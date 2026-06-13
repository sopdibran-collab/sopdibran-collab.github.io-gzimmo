import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "inverse";
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  inverse: "bg-inverse text-white",
};

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-container", className)}>
      {children}
    </div>
  );
}

export function Section({ id, children, className, variant = "default" }: SectionProps) {
  return (
    <section id={id} className={cn("py-section", variants[variant], className)}>
      <Container>{children}</Container>
    </section>
  );
}
