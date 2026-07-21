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
          Pourquoi confier votre nettoyage à Gzimmo ?
        </h2>
        <p className="mt-5 max-w-md text-muted leading-relaxed">
          Expertise immobilière, rigueur et réactivité — notre exigence se lit dans chaque
          intervention.
        </p>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg bg-surface">
          <Image
            src="/images/brand/couloir-propre.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </FadeIn>

      <FadeIn className="lg:col-span-7" delay={0.1}>
        <ul className="divide-y divide-border/80 border-y border-border/80">
          {whyItems.map((item) => (
            <li
              key={item}
              className="py-5 text-[0.9375rem] leading-relaxed text-foreground/90 first:pt-6 last:pb-6"
            >
              <span className="mb-2 block font-display text-sm font-medium text-accent">—</span>
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
