# -*- coding: utf-8 -*-
"""Downscale bid-page screenshots for sharp on-slide display."""
from pathlib import Path

from PIL import Image, ImageFilter

SRC = Path(r"j:\GEO Home\Slide_Medical_999\public\bid-sample")
DST = SRC / "display"
# ~2x of the on-slide CSS size (~600px wide), keeps text crisp after slide-canvas scale
WIDTH = 1400


def main():
    DST.mkdir(parents=True, exist_ok=True)
    files = sorted(SRC.glob("*_page-*.jpg"))
    print("src", len(files))
    for f in files:
        im = Image.open(f).convert("RGB")
        w, h = im.size
        nh = round(h * WIDTH / w)
        out = im.resize((WIDTH, nh), Image.Resampling.LANCZOS)
        out = out.filter(ImageFilter.UnsharpMask(radius=1.4, percent=160, threshold=2))
        num = f.stem.split("page-")[-1]
        dest = DST / f"{num}.jpg"
        out.save(dest, "JPEG", quality=92, subsampling=0, optimize=True)
        print(dest.name, out.size, dest.stat().st_size)


if __name__ == "__main__":
    main()
