import { whyItems } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhyList() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <FadeIn className="lg:col-span-5">
        <h2 className="font-display text-display-md text-foreground">
          Pourquoi nous confier vos espaces
        </h2>
      </FadeIn>

      <FadeIn className="lg:col-span-7" delay={0.1}>
        <ul className="space-y-5">
          {whyItems.map((item) => (
            <li
              key={item}
              className="flex gap-4 text-foreground/90 before:shrink-0 before:font-medium before:text-accent before:content-['—']"
            >
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
