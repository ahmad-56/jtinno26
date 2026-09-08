"""Generate AVIF/WebP backgrounds and a WebP logo using Pillow with AVIF support."""

from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
output = root / "app/assets/backgrounds"
output.mkdir(parents=True, exist_ok=True)
with Image.open(root / "app/assets/school.jpg") as original:
    original = ImageOps.exif_transpose(original).convert("RGB")
    for width in (480, 960, 1440):
        height = round(original.height * width / original.width)
        resized = original.resize((width, height), Image.Resampling.LANCZOS)
        target = output / f"school-{width}.webp"
        resized.save(target, "WEBP", quality=55, method=6)
        print(f"{target.name}: {target.stat().st_size:,} bytes", flush=True)
        target = output / f"school-{width}.avif"
        resized.save(target, "AVIF", quality=45, speed=6)
        print(f"{target.name}: {target.stat().st_size:,} bytes", flush=True)

with Image.open(root / "app/assets/New logo no bg.png") as original:
    original.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    target = root / "app/assets/main-logo.webp"
    original.save(target, "WEBP", quality=88, method=6)
    print(f"{target.name}: {target.stat().st_size:,} bytes", flush=True)
