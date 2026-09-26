import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "inverse" | "accent" | "hero" | "paper" | "soft";
  /** `band` : rythme éditorial, plus serré qu’un `py-section` plein. */
  density?: "default" | "band";
};

const variants = {
  default: "bg-background section-default",
  surface: "bg-surface section-surface",
  inverse: "section-inverse text-white",
  accent: "section-accent",
  hero: "section-hero",
  /** WHITE — aplats, sans dégradé. */
  paper: "bg-background",
  /** SOFT — preuve, listes, informations. Hairline pour marquer l’unité. */
  soft: "border-y border-border bg-surface",
};

const densityClass = {
  default: "py-section",
  band: "py-14 sm:py-16 lg:py-20",
};

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 mx-auto w-full max-w-[1200px] min-w-0 px-container", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  variant = "default",
  density = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        densityClass[density],
        variants[variant],
        className,
      )}
    >
      {variant === "inverse" ? (
        <div aria-hidden="true" className="section-inverse-glow pointer-events-none absolute inset-0" />
      ) : null}
      {variant === "hero" ? (
        <div aria-hidden="true" className="section-hero-glow pointer-events-none absolute inset-0" />
      ) : null}
      <Container>{children}</Container>
    </section>
  );
}
