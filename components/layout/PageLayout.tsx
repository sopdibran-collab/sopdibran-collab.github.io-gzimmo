import Image from "next/image";
import { ContactCta } from "@/components/content/ContactCta";
import { Section } from "@/components/layout/Section";
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
 * Split hero: text column | sharp photo.
 * No full-bleed photo behind text, no stacked washes.
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
    <Section variant="hero" className={cn("pb-0", className)}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0">{children}</div>
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden rounded-2xl",
            "bg-surface lg:aspect-auto lg:min-h-[min(28rem,52vh)] lg:self-stretch",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority ?? true}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        </div>
      </div>
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
