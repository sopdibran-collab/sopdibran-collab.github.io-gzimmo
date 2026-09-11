import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** horizontal = couleur fond clair ; onDark = marque teal + wordmark blanc ; monochrome* = aplats */
  variant?: "horizontal" | "onDark" | "monochrome" | "monochromeInverse";
  size?: "header" | "footer";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sources = {
  horizontal: "/horizontal.svg",
  onDark: "/horizontal_on_dark.svg",
  monochrome: "/monochrome_noir.svg",
  monochromeInverse: "/monochrome_blanc.svg",
} as const;

/** Ratio réel du lockup après recadrage du viewBox SVG (3105×997). */
const LOGO_ASPECT = 3105 / 997;

/**
 * Dimensions intrinsèques : les lockups recadrés (horizontal / onDark) partagent
 * le même viewBox. Les monochromes plein canevas gardent leur ratio source ;
 * le header n’utilise plus monochromeInverse (évite l’écrasement).
 */
const dimensions = {
  horizontal: { width: 3105, height: 997 },
  onDark: { width: 3105, height: 997 },
  monochrome: { width: 3105, height: 997 },
  monochromeInverse: { width: 3508, height: 2481 },
} as const;

/** Tailles header uniques — même échelle partout (home + intérieures). */
const sizes = {
  header: {
    horizontal: "h-9 w-auto max-w-[200px]",
    onDark: "h-9 w-auto max-w-[200px]",
    monochrome: "h-9 w-auto max-w-[200px]",
    monochromeInverse: "h-9 w-auto max-w-[200px]",
  },
  footer: {
    horizontal: "w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]",
    onDark: "w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]",
    monochrome: "w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]",
    monochromeInverse: "w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]",
  },
} as const;

/** SVG natif — viewBox recadré pour un rendu à la bonne échelle (Safari + Chrome). */
export function Logo({
  variant = "horizontal",
  size = "header",
  linked = true,
  className,
  priority = false,
}: LogoProps) {
  const { width, height } = dimensions[variant];
  const aspect =
    variant === "monochromeInverse" ? width / height : LOGO_ASPECT;

  const image = (
    <img
      src={sources[variant]}
      alt={company.name}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "block h-auto object-contain object-left",
        sizes[size][variant],
        className,
      )}
      style={{ aspectRatio: aspect }}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="inline-flex max-w-full min-w-0 shrink items-center"
      aria-label={`${company.name} — Accueil`}
    >
      {image}
    </Link>
  );
}
