import { ContactCta } from "@/components/content/ContactCta";
import { Section } from "@/components/layout/Section";
import type { ReactNode } from "react";

type SectionVariant = "default" | "surface" | "inverse" | "accent" | "hero";

export function PageHero({ children }: { children: ReactNode }) {
  return (
    <Section variant="hero" className="pb-0">
      {children}
    </Section>
  );
}

export function PageMain({
  children,
  variant = "surface",
  className,
}: {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
}) {
  return (
    <Section variant={variant} className={className}>
      {children}
    </Section>
  );
}

export function PageCta() {
  return <ContactCta />;
}
