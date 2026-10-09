import Image from "next/image";
import { whyItems } from "@/data/content";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyList() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
      <FadeIn className="lg:col-span-5">
        <Badge>Pourquoi Gzimmo</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Checklist régie, devis sous 24 h, équipe à Romont
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-muted">
          Expertise immobilière, rigueur et réactivité. Notre exigence se lit dans chaque
          intervention.
        </p>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg bg-surface">
          <Image
            src="/images/brand/couloir-propre.jpg"
            alt="Couloir d'immeuble propre après entretien professionnel Gzimmo"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            loading="eager"
          />
        </div>
      </FadeIn>

      <FadeIn className="lg:col-span-7" delay={0.1}>
        <ul className="divide-y divide-border/80 border-y border-border/80">
          {whyItems.map((item) => (
            <li
              key={item}
              className="py-5 text-base leading-relaxed text-foreground/90 first:pt-6 last:pb-6"
            >
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
