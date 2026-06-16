import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "inverse" | "accent" | "hero";
};

const variants = {
  default: "bg-background section-default",
  surface: "bg-surface section-surface",
  inverse: "section-inverse text-white",
  accent: "section-accent",
  hero: "section-hero",
};

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative z-10 mx-auto w-full max-w-[1200px] px-container", className)}>
      {children}
    </div>
  );
}

export function Section({ id, children, className, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-section", variants[variant], className)}
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
