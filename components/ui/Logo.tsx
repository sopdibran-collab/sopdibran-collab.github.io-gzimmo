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

/** Ratio réel du lockup après recadrage du viewBox SVG (3105×997). */
const LOGO_ASPECT = 3105 / 997;

const dimensions = {
  horizontal: { width: 3105, height: 997 },
  monochrome: { width: 3105, height: 997 },
} as const;

const sizes = {
  header: {
    horizontal:
      "w-[min(72vw,240px)] max-h-[3.25rem] sm:w-[min(52vw,280px)] sm:max-h-[4.25rem] lg:w-[300px] lg:max-h-[4.5rem]",
    monochrome:
      "w-[min(72vw,240px)] max-h-[3.25rem] sm:w-[min(52vw,280px)] sm:max-h-[4.25rem] lg:w-[300px] lg:max-h-[4.5rem]",
  },
  footer: {
    horizontal: "w-[min(85vw,270px)] sm:w-[300px] lg:w-[340px]",
    monochrome: "w-[min(85vw,270px)] sm:w-[300px] lg:w-[340px]",
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
        "block h-auto object-contain object-left",
        sizes[size][variant],
        className,
      )}
      style={{ aspectRatio: LOGO_ASPECT }}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${company.name} — Accueil`}>
      {image}
    </Link>
  );
}
