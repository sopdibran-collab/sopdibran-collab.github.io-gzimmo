import { whyItems } from "@/data/content";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyList() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <FadeIn className="lg:col-span-5">
        <Badge>Pourquoi Gzimmo</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Pourquoi nous confier vos espaces
        </h2>
        <p className="mt-5 max-w-md text-muted leading-relaxed">
          Précision, discrétion et finitions soignées — notre exigence se lit dans chaque détail.
        </p>
      </FadeIn>

      <FadeIn className="lg:col-span-7" delay={0.1}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whyItems.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border/80 bg-white/70 px-5 py-4 text-[0.9375rem] leading-relaxed text-foreground/90 shadow-[0_2px_12px_rgba(30,34,39,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/25 hover:shadow-[0_8px_24px_rgba(65,152,142,0.08)] hover:-translate-y-0.5"
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
