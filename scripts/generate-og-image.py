#!/usr/bin/env python3
"""Generate the default Open Graph image (1200x630 JPG) for gzimmo.ch."""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 1200, 630
OUT = ROOT / "public" / "og-default.jpg"
ICON_SVG = ROOT / "public" / "icon_only.svg"
TEXT_SVG = ROOT / "public" / "horizontal.svg"

BG_TOP = (30, 34, 39)
BG_BOTTOM = (42, 48, 56)
ACCENT = (65, 152, 142)
WHITE = (253, 253, 253)
MUTED = (176, 182, 194)

SANS_CANDIDATES = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]


def load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def prepare_gzimmo_text_svg(svg: str) -> str:
    """Keep wordmark paths only and render them white on the dark OG background."""

    def process_shape(match: re.Match[str]) -> str:
        tag = match.group(0)
        lower = tag.lower()
        if "fill:none" in lower or "fill-opacity:0" in lower:
            return ""
        if "#41988e" in lower:
            return ""

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


def build_background() -> Image.Image:
    y = np.linspace(0, 1, HEIGHT)[:, None]
    top = np.array(BG_TOP, dtype=np.float64)
    bottom = np.array(BG_BOTTOM, dtype=np.float64)
    gradient = top * (1 - y) + bottom * y
    base = np.repeat(gradient[:, None, :], WIDTH, axis=1)

    rng = np.random.default_rng(11)
    grain = rng.normal(0, 3.0, size=(HEIGHT, WIDTH, 1))
    arr = np.clip(base + grain, 0, 255).astype(np.uint8)
    return Image.fromarray(arr)


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img


def paste_rgba(base: Image.Image, overlay: Image.Image, position: tuple[int, int]) -> None:
    base.paste(overlay, position, overlay)


def main() -> None:
    if not ICON_SVG.exists():
        raise FileNotFoundError(f"Missing icon SVG: {ICON_SVG}")
    if not TEXT_SVG.exists():
        raise FileNotFoundError(f"Missing text SVG: {TEXT_SVG}")

    img = build_background()
    draw = ImageDraw.Draw(img)
    sans_sub = load_font(SANS_CANDIDATES, 30)
    sans_small = load_font(SANS_CANDIDATES, 24)
    margin = 90

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        icon_png = render_svg_to_png(
            ICON_SVG.read_text(),
            tmp / "icon.png",
            fit_height=250,
        )
        text_png = render_svg_to_png(
            prepare_gzimmo_text_svg(TEXT_SVG.read_text()),
            tmp / "text.png",
            fit_width=720,
        )
        text_png = trim_transparent(text_png)

    paste_rgba(img, icon_png, (margin, 115))
    text_y = 388
    paste_rgba(img, text_png, (margin, text_y))

    rule_y = text_y + text_png.height + 18
    rule_width = max(320, text_png.width)
    draw.line([(margin, rule_y), (margin + rule_width, rule_y)], fill=ACCENT, width=3)

    tagline_y = rule_y + 22
    draw.text(
        (margin, tagline_y),
        "Nettoyage professionnel · Fin de bail · Bureaux · Après chantier",
        font=sans_sub,
        fill=MUTED,
    )
    draw.text(
        (margin, tagline_y + 48),
        "Romont (FR) — Équipe expérimentée, devis gratuit",
        font=sans_small,
        fill=ACCENT,
    )

    url_text = "gzimmo.ch"
    bbox = draw.textbbox((0, 0), url_text, font=sans_small)
    draw.text(
        (WIDTH - margin - (bbox[2] - bbox[0]), HEIGHT - 82),
        url_text,
        font=sans_small,
        fill=MUTED,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, format="JPEG", quality=88, optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
