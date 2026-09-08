"""Compress embedded PDF images without rasterizing text or changing page geometry.

Run with Python 3, pypdf, and Pillow. Originals and a size report are retained in
the supplied backup directory, outside public/, for review before deployment.
"""

import argparse
from io import BytesIO
import json
from pathlib import Path
import shutil

from pypdf import PdfReader, PdfWriter


def page_signature(page):
    return {
        "text": page.extract_text(),
        "media_box": list(page.mediabox),
        "crop_box": list(page.cropbox),
        "rotation": page.rotation,
        "annotations": [
            {
                "type": str(annotation.get_object().get("/Subtype")),
                "rect": list(annotation.get_object().get("/Rect", [])),
                "uri": str(annotation.get_object().get("/A", {}).get("/URI", "")),
            }
            for annotation in page.get("/Annots", [])
        ],
    }


def optimize(source, backup_dir, from_backups=False):
    backup = backup_dir / source.name
    if from_backups:
        if not backup.is_file():
            raise FileNotFoundError(backup)
    else:
        if backup.exists():
            raise FileExistsError(f"Refusing to overwrite original backup: {backup}")
        shutil.copy2(source, backup)
    reader = PdfReader(backup)
    if reader.get_fields():
        raise ValueError(f"Study guide contains form fields; review separately: {source}")
    signatures = [page_signature(page) for page in reader.pages]
    writer = PdfWriter(clone_from=reader)
    replaced = 0
    seen = set()
    for page in writer.pages:
        for image in page.images:
            reference = image.indirect_reference
            if reference is None or reference.idnum in seen:
                continue
            seen.add(reference.idnum)
            obj = reference.get_object()
            # Preserve masks and small artwork. Text and vector graphics are untouched.
            if obj.get("/SMask") or obj.get("/Mask") or obj.get("/ImageMask"):
                continue
            if image.image.mode not in ("RGB", "L") or len(image.data) < 100_000:
                continue
            candidate = BytesIO()
            image.image.save(candidate, format="JPEG", quality=85, optimize=True)
            if len(candidate.getvalue()) < len(image.data) * 0.85:
                image.replace(image.image, quality=85, optimize=True)
                replaced += 1
        page.compress_content_streams(level=9)
    # Keep the original resource graph: pruning can discard assets referenced
    # indirectly by nested forms in exports from some PDF authoring tools.
    candidate = backup_dir / f"{source.stem}.optimized.pdf"
    writer.write(candidate)
    result = PdfReader(candidate)
    assert [page_signature(page) for page in result.pages] == signatures, source
    assert result.get_fields() == reader.get_fields(), source
    if candidate.stat().st_size < backup.stat().st_size:
        shutil.copy2(candidate, source)
    elif from_backups:
        shutil.copy2(backup, source)
    record = {
        "file": source.name,
        "pages": len(reader.pages),
        "before_bytes": backup.stat().st_size,
        "after_bytes": source.stat().st_size,
        "images_recompressed": replaced,
        "text_geometry_and_links_preserved": True,
    }
    print(json.dumps(record), flush=True)
    return record


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--backup-dir", type=Path, required=True)
    parser.add_argument("--source-dir", type=Path, default=Path("public/StudyGuides"))
    parser.add_argument("--from-backups", action="store_true", help="Rebuild from retained originals")
    args = parser.parse_args()
    args.backup_dir.mkdir(parents=True, exist_ok=True)
    records = [optimize(path, args.backup_dir, args.from_backups) for path in sorted(args.source_dir.glob("*.pdf"))]
    (args.backup_dir / "compression-report.json").write_text(json.dumps(records, indent=2))
