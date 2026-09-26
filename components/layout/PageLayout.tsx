import Image from "next/image";
import { ContactCta } from "@/components/content/ContactCta";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionVariant = "default" | "surface" | "inverse" | "accent" | "hero" | "paper" | "soft";

export type PageHeroImage = {
  src: string;
  alt: string;
  /** object-position, e.g. "center 40%" */
  position?: string;
  priority?: boolean;
};

/**
 * Full-bleed PageHero when `image` is set: soft décor photo + dark gray veil + light copy.
 * Same height token as HomeHero (`.min-h-hero-photo`) — no split grid.
 * Without `image`, keeps the soft section-hero gradient (legal / SEO).
 */
export function PageHero({
  children,
  image,
  className,
  tone = "soft",
}: {
  children: ReactNode;
  image?: PageHeroImage;
  className?: string;
  /** `dark` : hero aplati sur l’inverse existant. Le HeaderOffset reprend la même teinte. */
  tone?: "soft" | "dark";
}) {
  if (!image && tone === "dark") {
    return (
      <section
        className={cn("relative bg-inverse pt-14 pb-14 text-white lg:pt-16 lg:pb-20", className)}
      >
        <Container>{children}</Container>
      </section>
    );
  }

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
        "relative isolate min-h-hero-photo overflow-hidden bg-[#1e2227]",
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
      <Container
        className={cn(
          "flex min-h-hero-photo flex-col justify-end",
          /* HeaderOffset already clears the fixed bar — lighter top pad than HomeHero */
          "pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24",
        )}
      >
        {children}
      </Container>
    </section>
  );
}

export function PageMain({
  children,
  variant = "surface",
  className,
  density = "default",
}: {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  density?: "default" | "band";
}) {
  return (
    <Section variant={variant} density={density} className={className}>
      {children}
    </Section>
  );
}

export function PageCta() {
  return <ContactCta />;
}
