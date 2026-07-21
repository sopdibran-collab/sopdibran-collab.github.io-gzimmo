#!/usr/bin/env python3
"""Generate the default Open Graph image (1200×630) for gzimmo.ch."""

from __future__ import annotations

import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 1200, 630
OUT_JPG = ROOT / "public" / "og-default.jpg"
OUT_PNG = ROOT / "public" / "og-default.png"
OUT_SVG = ROOT / "public" / "og-default.svg"
LOGO_SVG = ROOT / "public" / "horizontal.svg"
FONTS_DIR = ROOT / "scripts" / "fonts"

# Brand tokens — aligned with app/globals.css
BG = (255, 255, 255)
SURFACE = (245, 247, 248)  # #F5F7F8
FOREGROUND = (30, 34, 39)  # #1E2227
MUTED = (98, 98, 98)  # #626262
ACCENT = (65, 152, 142)  # #41988E
BORDER = (232, 234, 236)  # #E8EAEC

REQUIRED_FONTS = (
    "Sora-SemiBold.ttf",
    "Inter-Regular.ttf",
    "Inter-Medium.ttf",
)


def ensure_fonts() -> None:
    """Vendored fonts in scripts/fonts/ (Sora + Inter, latin subset)."""
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    missing = [name for name in REQUIRED_FONTS if not (FONTS_DIR / name).is_file()]
    if missing:
        raise FileNotFoundError(
            f"Missing fonts in {FONTS_DIR}: {', '.join(missing)}. "
            "Add the TTF files (Sora 600, Inter 400/500) before running npm run og:image."
        )


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont:
    path = FONTS_DIR / name
    if not path.exists():
        raise FileNotFoundError(f"Missing font: {path}. Run ensure_fonts() first.")
    return ImageFont.truetype(path, size)


def render_svg_to_png(
    svg_content: str,
    output_png: Path,
    *,
    fit_width: int | None = None,
    fit_height: int | None = None,
) -> Image.Image:
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False, encoding="utf-8") as tmp:
        tmp.write(svg_content)
        tmp_path = Path(tmp.name)

    cmd = ["npx", "--yes", "@resvg/resvg-js-cli", "--no-system-font"]
    if fit_width is not None:
        cmd.extend(["--fit-width", str(fit_width)])
    if fit_height is not None:
        cmd.extend(["--fit-height", str(fit_height)])
    cmd.extend([str(tmp_path), str(output_png)])

    subprocess.run(cmd, check=True, cwd=ROOT)
    tmp_path.unlink(missing_ok=True)
    return Image.open(output_png).convert("RGBA")


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def paste_rgba(base: Image.Image, overlay: Image.Image, position: tuple[int, int]) -> None:
    base.paste(overlay, position, overlay)


def text_width(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont) -> int:
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0]


def build_background() -> Image.Image:
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Accent anchor — same restraint as site hairlines
    draw.rectangle([0, 0, 4, HEIGHT], fill=ACCENT)

    # Soft footer band
    draw.rectangle([0, HEIGHT - 96, WIDTH, HEIGHT], fill=SURFACE)
    draw.line([(80, HEIGHT - 96), (WIDTH - 80, HEIGHT - 96)], fill=BORDER, width=1)

    return img


def build_svg_source() -> str:
    """Light editorial OG — source SVG kept in sync with raster output."""
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" fill="none">
  <rect width="{WIDTH}" height="{HEIGHT}" fill="#FFFFFF"/>
  <rect width="4" height="{HEIGHT}" fill="#41988E"/>
  <rect y="{HEIGHT - 96}" width="{WIDTH}" height="96" fill="#F5F7F8"/>
  <line x1="80" y1="{HEIGHT - 96}" x2="{WIDTH - 80}" y2="{HEIGHT - 96}" stroke="#E8EAEC" stroke-width="1"/>
  <text x="80" y="300" fill="#1E2227" font-family="Sora, Inter, Arial, sans-serif" font-size="54" font-weight="600" letter-spacing="-1.2">Nettoyage professionnel</text>
  <text x="80" y="368" fill="#1E2227" font-family="Sora, Inter, Arial, sans-serif" font-size="54" font-weight="600" letter-spacing="-1.2">en Suisse romande</text>
  <text x="80" y="430" fill="#626262" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="400">Fin de bail · Bureaux · Régies · Après chantier</text>
  <text x="80" y="{HEIGHT - 40}" fill="#626262" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="400">Devis gratuit · Réponse sous 24 h</text>
  <text x="{WIDTH - 80}" y="{HEIGHT - 40}" fill="#41988E" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="500" text-anchor="end">gzimmo.ch</text>
</svg>
"""


def main() -> None:
    if not LOGO_SVG.exists():
        raise FileNotFoundError(f"Missing logo SVG: {LOGO_SVG}")

    ensure_fonts()

    img = build_background()
    draw = ImageDraw.Draw(img)

    font_display = load_font("Sora-SemiBold.ttf", 54)
    font_lead = load_font("Inter-Regular.ttf", 26)
    font_meta = load_font("Inter-Regular.ttf", 20)
    font_url = load_font("Inter-Medium.ttf", 20)

    margin_left = 80
    content_top = 80

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        logo_png = render_svg_to_png(
            LOGO_SVG.read_text(encoding="utf-8"),
            tmp / "logo.png",
            fit_width=300,
        )
        logo_png = trim_transparent(logo_png)

    paste_rgba(img, logo_png, (margin_left, content_top))

    logo_bottom = content_top + logo_png.height + 40

    draw.text((margin_left, logo_bottom), "Nettoyage professionnel", font=font_display, fill=FOREGROUND)
    draw.text((margin_left, logo_bottom + 68), "en Suisse romande", font=font_display, fill=FOREGROUND)
    draw.text(
        (margin_left, logo_bottom + 148),
        "Fin de bail · Bureaux · Régies · Après chantier",
        font=font_lead,
        fill=MUTED,
    )

    footer_y = HEIGHT - 40
    draw.text((margin_left, footer_y), "Devis gratuit · Réponse sous 24 h", font=font_meta, fill=MUTED)

    url_text = "gzimmo.ch"
    url_x = WIDTH - 80 - text_width(draw, url_text, font_url)
    draw.text((url_x, footer_y), url_text, font=font_url, fill=ACCENT)

    OUT_JPG.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT_JPG, format="JPEG", quality=93, optimize=True, subsampling=0)
    img.save(OUT_PNG, format="PNG", optimize=True)
    OUT_SVG.write_text(build_svg_source(), encoding="utf-8")

    print(f"Wrote {OUT_JPG}")
    print(f"Wrote {OUT_PNG}")
    print(f"Wrote {OUT_SVG}")


if __name__ == "__main__":
    main()
