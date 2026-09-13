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

/**
 * Full-bleed PageHero when `image` is set: soft décor photo + dark gray veil + light copy.
 * Same language as HomeHero — no split grid, no rounded photo column.
 * Without `image`, keeps the soft section-hero gradient (legal / SEO).
 */
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
        "relative isolate overflow-hidden bg-[#1e2227] py-section pb-0",
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
      <div aria-hidden="true" className="absolute inset-0 bg-[#1e2227]/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1e2227]/80 via-[#1e2227]/25 to-[#1e2227]/35"
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
