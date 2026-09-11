import Image from "next/image";
import { ContactCta } from "@/components/content/ContactCta";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionVariant = "default" | "surface" | "inverse" | "accent" | "hero";

export type PageHeroImage = {
  src: string;
  alt: string;
  /** object-position, e.g. "center 40%" */
  position?: string;
  priority?: boolean;
};

export function PageHero({
  children,
  image,
  className,
}: {
  children: ReactNode;
  image?: PageHeroImage;
  className?: string;
}) {
  if (!image) {
    return (
      <Section variant="hero" className={cn("pb-0", className)}>
        {children}
      </Section>
    );
  }

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-surface py-section pb-0",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={image.priority ?? true}
        sizes="100vw"
        className="object-cover"
        style={image.position ? { objectPosition: image.position } : undefined}
      />
      {/* Soft white wash — photo stays visible, dark typography stays readable */}
      <div aria-hidden="true" className="absolute inset-0 bg-white/68" />
      <div
        aria-hidden="true"
        className="section-hero-glow pointer-events-none absolute inset-0 opacity-40"
      />
      <Container>{children}</Container>
    </section>
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
