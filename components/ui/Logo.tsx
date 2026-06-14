import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "horizontal" | "monochrome";
  linked?: boolean;
  className?: string;
  priority?: boolean;
};

const sources = {
  horizontal: "/horizontal.svg",
  monochrome: "/monochrome_noir.svg",
} as const;

const dimensions = {
  horizontal: { width: 280, height: 52 },
  monochrome: { width: 260, height: 52 },
} as const;

/** SVG natif — évite les bugs Safari avec next/image + fill. */
export function Logo({
  variant = "horizontal",
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
        "block h-11 w-auto max-w-[min(62vw,260px)] object-contain object-left sm:h-12 sm:max-w-[280px]",
        variant === "monochrome" && "max-w-[min(62vw,240px)] sm:max-w-[260px]",
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
