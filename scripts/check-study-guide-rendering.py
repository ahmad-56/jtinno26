"""Render originals and optimized guides with PDFium; emit comparison sheets."""

import argparse
import json
from pathlib import Path

import pypdfium2 as pdfium
from PIL import Image, ImageChops, ImageDraw, ImageStat

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--backup-dir", type=Path, required=True)
parser.add_argument("--output-dir", type=Path, required=True)
args = parser.parse_args()
args.output_dir.mkdir(parents=True, exist_ok=True)
report = []

for path in sorted(Path("public/StudyGuides").glob("*.pdf")):
    original = pdfium.PdfDocument(args.backup_dir / path.name)
    optimized = pdfium.PdfDocument(path)
    assert len(original) == len(optimized)
    page_images = []
    errors = []
    for index in range(len(original)):
        before_page, after_page = original[index], optimized[index]
        scale = 800 / before_page.get_width()
        before = before_page.render(scale=scale).to_pil().convert("RGB")
        after = after_page.render(scale=scale).to_pil().convert("RGB")
        assert before.size == after.size
        diff = ImageChops.difference(before, after)
        errors.append(round(sum(ImageStat.Stat(diff).mean) / 3, 3))
        after.save(args.output_dir / f"{path.stem}-{index + 1}.png")
        pair = Image.new("RGB", (820, 600), "white")
        draw = ImageDraw.Draw(pair)
        draw.text((10, 5), f"{path.stem} / page {index + 1}: original | compressed", fill="black")
        for offset, page_image in ((0, before), (410, after)):
            page_image.thumbnail((400, 570), Image.Resampling.LANCZOS)
            pair.paste(page_image, (offset + 5, 25))
        page_images.append(pair)
        before_page.close()
        after_page.close()
    for start in range(0, len(page_images), 4):
        batch = page_images[start:start + 4]
        sheet = Image.new("RGB", (1640, 600 * ((len(batch) + 1) // 2)), "#eeeeee")
        for index, pair in enumerate(batch):
            sheet.paste(pair, ((index % 2) * 820, (index // 2) * 600))
        sheet.save(args.output_dir / f"comparison-{path.stem}-{start // 4 + 1}.jpg", quality=90)
    record = {"file": path.name, "pages": len(original), "mean_pixel_error_by_page": errors}
    assert max(errors) < 5, f"Large visual change in {path}: {errors}"
    print(json.dumps(record), flush=True)
    report.append(record)
    original.close()
    optimized.close()

(args.output_dir / "rendering-report.json").write_text(json.dumps(report, indent=2))
