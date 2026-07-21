#!/usr/bin/env python3
"""Generate the default Open Graph image (1200×630) for gzimmo.ch."""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 1200, 630
OUT_JPG = ROOT / "public" / "og-default.jpg"
OUT_PNG = ROOT / "public" / "og-default.png"
TEXT_SVG = ROOT / "public" / "horizontal.svg"

# Brand tokens (gzimmo.ch)
BG = (30, 34, 39)  # #1E2227
BG_SOFT = (42, 48, 56)  # #2A3038
ACCENT = (65, 152, 142)  # #41988E
WHITE = (255, 255, 255)
MUTED = (176, 182, 194)
SUBTLE = (98, 106, 114)

SANS_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial.ttf",
]


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    for path in SANS_CANDIDATES:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size, index=1 if bold and path.endswith(".ttc") else 0)
            except OSError:
                return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def prepare_gzimmo_text_svg(svg: str) -> str:
    """Full lockup on dark background — keep teal symbol, white wordmark."""

    def process_shape(match: re.Match[str]) -> str:
        tag = match.group(0)
        lower = tag.lower()
        if "fill:none" in lower or "fill-opacity:0" in lower:
            return ""
        if "#41988e" in lower or "#41988E" in tag:
            return tag
        tag = re.sub(r'\s*style="[^"]*"', "", tag)
        if 'fill="' in tag:
            tag = re.sub(r'fill="[^"]*"', 'fill="#FFFFFF"', tag)
        elif "<path" in tag:
            tag = tag.replace("<path ", '<path fill="#FFFFFF" ', 1)
        elif "<rect" in tag:
            tag = tag.replace("<rect ", '<rect fill="#FFFFFF" ', 1)
        return tag

    svg = re.sub(r"<path[^>]*/>", process_shape, svg)
    svg = re.sub(r"<rect[^>]*/>", process_shape, svg)
    return svg


def render_svg_to_png(
    svg_content: str,
    output_png: Path,
    *,
    fit_width: int | None = None,
    fit_height: int | None = None,
) -> Image.Image:
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as tmp:
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


def build_background() -> Image.Image:
    """Flat premium surface — no gradient, hairline structure only."""
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Accent bar (editorial anchor)
    draw.rectangle([0, 0, 5, HEIGHT], fill=ACCENT)

    # Soft right panel — flat tone shift, not gradient
    draw.rectangle([WIDTH - 420, 0, WIDTH, HEIGHT], fill=BG_SOFT)

    # Hairline separators
    draw.line([(96, HEIGHT - 120), (WIDTH - 96, HEIGHT - 120)], fill=(46, 52, 58), width=1)
    draw.line([(96, 168), (520, 168)], fill=ACCENT, width=2)

    return img


def main() -> None:
    if not TEXT_SVG.exists():
        raise FileNotFoundError(f"Missing text SVG: {TEXT_SVG}")

    img = build_background()
    draw = ImageDraw.Draw(img)

    font_display = load_font(52, bold=True)
    font_lead = load_font(28)
    font_meta = load_font(22)
    font_url = load_font(20)
    font_badge = load_font(18)

    margin_left = 96

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        text_png = render_svg_to_png(
            prepare_gzimmo_text_svg(TEXT_SVG.read_text()),
            tmp / "text.png",
            fit_width=480,
        )
        text_png = trim_transparent(text_png)

    paste_rgba(img, text_png, (margin_left, 78))

    # Eyebrow
    draw.text(
        (margin_left, 196),
        "GZIMMO SÀRL · ROMONT (FR)",
        font=font_badge,
        fill=ACCENT,
    )

    # Headline
    draw.text(
        (margin_left, 238),
        "Nettoyage professionnel",
        font=font_display,
        fill=WHITE,
    )
    draw.text(
        (margin_left, 302),
        "en Suisse romande",
        font=font_display,
        fill=WHITE,
    )

    # Lead
    draw.text(
        (margin_left, 388),
        "Fin de bail · Bureaux · Régies · Après chantier",
        font=font_lead,
        fill=MUTED,
    )

    # Trust line
    draw.text(
        (margin_left, HEIGHT - 72),
        "Devis gratuit · Réponse sous 24 h",
        font=font_meta,
        fill=SUBTLE,
    )

    # URL
    url_text = "gzimmo.ch"
    url_bbox = draw.textbbox((0, 0), url_text, font=font_url)
    url_w = url_bbox[2] - url_bbox[0]
    draw.text(
        (WIDTH - 96 - url_w, HEIGHT - 72),
        url_text,
        font=font_url,
        fill=ACCENT,
    )

    # Right panel — service chips (text only, minimal)
    chips = ["Fin de bail", "Conciergerie", "Bureaux", "Vitres"]
    chip_y = 200
    for chip in chips:
        draw.rectangle([WIDTH - 360, chip_y, WIDTH - 120, chip_y + 44], outline=(58, 66, 74), width=1)
        draw.text((WIDTH - 340, chip_y + 10), chip, font=font_meta, fill=MUTED)
        chip_y += 58

    OUT_JPG.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT_JPG, format="JPEG", quality=92, optimize=True, subsampling=0)
    img.save(OUT_PNG, format="PNG", optimize=True)
    print(f"Wrote {OUT_JPG}")
    print(f"Wrote {OUT_PNG}")


if __name__ == "__main__":
    main()
