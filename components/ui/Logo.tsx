import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "horizontal" | "monochrome" | "monochromeInverse";
  size?: "header" | "footer";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sources = {
  horizontal: "/horizontal.svg",
  monochrome: "/monochrome_noir.svg",
  monochromeInverse: "/monochrome_blanc.svg",
} as const;

/** Ratio réel du lockup après recadrage du viewBox SVG (3105×997). */
const LOGO_ASPECT = 3105 / 997;

const dimensions = {
  horizontal: { width: 3105, height: 997 },
  monochrome: { width: 3105, height: 997 },
  monochromeInverse: { width: 3105, height: 997 },
} as const;

const sizes = {
  header: {
    horizontal:
      "w-auto max-w-[min(148px,calc(100vw-7.5rem))] max-h-10 sm:max-w-[min(220px,calc(100vw-8rem))] sm:max-h-[3.25rem] lg:w-[300px] lg:max-w-none lg:max-h-[4.5rem]",
    monochrome:
      "w-auto max-w-[min(148px,calc(100vw-7.5rem))] max-h-10 sm:max-w-[min(220px,calc(100vw-8rem))] sm:max-h-[3.25rem] lg:w-[300px] lg:max-w-none lg:max-h-[4.5rem]",
    monochromeInverse:
      "w-auto max-w-[min(148px,calc(100vw-7.5rem))] max-h-10 sm:max-w-[min(220px,calc(100vw-8rem))] sm:max-h-[3.25rem] lg:w-[300px] lg:max-w-none lg:max-h-[4.5rem]",
  },
  footer: {
    horizontal: "w-full max-w-[min(100%,360px)] sm:max-w-[420px] lg:max-w-[480px]",
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
    <Link
      href="/"
      className="inline-flex max-w-full min-w-0 shrink items-center"
      aria-label={`${company.name} — Accueil`}
    >
      {image}
    </Link>
  );
}
