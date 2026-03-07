"""
Applies the ISO100 watermark to all portfolio images and saves them to public/gallery/.
Run from the isophotos project root: python3 scripts/watermark.py
"""

from PIL import Image
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORTFOLIO_DIR = os.path.join(BASE, "ISO100", "Portfolio")
OUTPUT_BASE = os.path.join(BASE, "public", "gallery")
WATERMARK_PATH = os.path.join(BASE, "ISO100", "watermark.png")

# Map folder name -> output slug
CATEGORY_MAP = {
    "Architecture Photography": "architecture",
    "Fine Art Photography":     "fine-art",
    "Graduations":              "graduations",
    "Lifestyle":                "lifestyle",
    "Personal Branding":        "personal-branding",
    "Portraits":                "portraits",
}

WATERMARK_SCALE = 0.18  # watermark width = 18% of photo width
WATERMARK_OPACITY = 0.90
WATERMARK_MARGIN = 0.04  # 4% margin from edges

def apply_watermark(photo: Image.Image, watermark_src: Image.Image) -> Image.Image:
    from PIL import ImageFilter
    photo = photo.convert("RGBA")
    wm = watermark_src.copy()

    # Scale watermark to % of photo width
    target_w = int(photo.width * WATERMARK_SCALE)
    ratio = target_w / wm.width
    target_h = int(wm.height * ratio)
    wm = wm.resize((target_w, target_h), Image.LANCZOS)

    # Apply opacity to watermark alpha channel
    r, g, b, a = wm.split()
    a = a.point(lambda x: int(x * WATERMARK_OPACITY))
    wm = Image.merge("RGBA", (r, g, b, a))

    # Build drop shadow: black version of the watermark, blurred
    shadow_alpha = a.point(lambda x: int(x * 0.6))
    shadow = Image.merge("RGBA", (
        a.point(lambda x: 0),  # R=0
        a.point(lambda x: 0),  # G=0
        a.point(lambda x: 0),  # B=0
        shadow_alpha,
    ))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=max(2, target_w // 60)))

    # Position: bottom-right corner with margin
    margin_x = int(photo.width * WATERMARK_MARGIN)
    margin_y = int(photo.height * WATERMARK_MARGIN)
    pos = (photo.width - wm.width - margin_x, photo.height - wm.height - margin_y)
    shadow_offset = max(1, target_w // 120)

    # Composite shadow first, then watermark on top
    overlay = Image.new("RGBA", photo.size, (0, 0, 0, 0))
    overlay.paste(shadow, (pos[0] + shadow_offset, pos[1] + shadow_offset), shadow)
    overlay.paste(wm, pos, wm)
    result = Image.alpha_composite(photo, overlay)
    return result.convert("RGB")


def process():
    watermark_src = Image.open(WATERMARK_PATH).convert("RGBA")
    processed = 0

    for folder_name, slug in CATEGORY_MAP.items():
        folder_path = os.path.join(PORTFOLIO_DIR, folder_name)
        if not os.path.isdir(folder_path):
            print(f"  [skip] folder not found: {folder_name}")
            continue

        out_dir = os.path.join(OUTPUT_BASE, slug)
        os.makedirs(out_dir, exist_ok=True)

        for i, filename in enumerate(sorted(os.listdir(folder_path))):
            if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
                continue

            src_path = os.path.join(folder_path, filename)
            # Clean filename: lowercase, replace spaces and parens
            clean = filename.lower()
            for ch in [" ", "(", ")"]:
                clean = clean.replace(ch, "_")
            clean = clean.replace(".jpeg", ".jpg")
            out_path = os.path.join(out_dir, f"{i+1:02d}_{clean}")

            print(f"  {folder_name}/{filename} -> gallery/{slug}/{os.path.basename(out_path)}")
            img = Image.open(src_path)

            # Auto-rotate based on EXIF orientation
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except Exception:
                pass

            watermarked = apply_watermark(img, watermark_src)
            watermarked.save(out_path, "JPEG", quality=88, optimize=True)
            processed += 1

    print(f"\nDone — {processed} images watermarked.")


if __name__ == "__main__":
    process()
