import Image from "next/image";
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

export function Logo({
  variant = "horizontal",
  linked = true,
  className,
  priority = false,
}: LogoProps) {
  const image = (
    <span
      className={cn(
        "relative block shrink-0",
        variant === "horizontal"
          ? "h-10 w-[min(52vw,220px)] sm:h-11 sm:w-[240px]"
          : "h-10 w-[min(52vw,200px)] sm:h-11 sm:w-[220px]",
        className,
      )}
    >
      <Image
        src={sources[variant]}
        alt={linked ? "" : company.name}
        fill
        className="object-contain object-left"
        priority={priority}
        sizes={variant === "horizontal" ? "240px" : "220px"}
      />
    </span>
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-block" aria-label={`${company.name} — Accueil`}>
      {image}
    </Link>
  );
}
