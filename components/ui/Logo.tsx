import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "horizontal" | "monochrome";
  size?: "header" | "footer";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sources = {
  horizontal: "/horizontal.svg",
  monochrome: "/monochrome_noir.svg",
} as const;

/** Ratio réel du lockup — viewBox 3540×1160 (inclut le toit et le bas du crochet). */
const LOGO_ASPECT = 3540 / 1160;

const dimensions = {
  horizontal: { width: 3540, height: 1160 },
  monochrome: { width: 3540, height: 1160 },
} as const;

const sizes = {
  header: {
    horizontal:
      "w-[min(68vw,200px)] max-h-9 sm:w-[min(44vw,220px)] sm:max-h-10 lg:w-[220px] lg:max-h-11",
    monochrome:
      "w-[min(68vw,200px)] max-h-9 sm:w-[min(44vw,220px)] sm:max-h-10 lg:w-[220px] lg:max-h-11",
  },
  footer: {
    horizontal: "w-[min(88vw,280px)] sm:w-[310px] lg:w-[352px]",
    monochrome: "w-[min(88vw,280px)] sm:w-[310px] lg:w-[352px]",
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

  const image = (
    <img
      src={sources[variant]}
      alt={linked ? "" : company.name}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "block h-auto",
        sizes[size][variant],
        className,
      )}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${company.name} — Accueil`}>
      {image}
    </Link>
  );
}
