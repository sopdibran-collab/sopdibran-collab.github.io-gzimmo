import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";

export function BenefitsList({
  title = "Ce que comprend notre prestation",
  benefits,
}: {
  title?: string;
  benefits: string[];
}) {
  return (
    <div>
      <Badge className="text-accent/90">Prestation</Badge>
      <h2 className="mt-4 font-display text-display-sm text-foreground">{title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit} delay={index * 0.05}>
            <li className="flex gap-4 rounded-lg border border-border/80 bg-white/70 px-5 py-4 text-[0.9375rem] leading-relaxed text-foreground/90 shadow-[0_2px_12px_rgba(30,34,39,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-accent/25 hover:shadow-[0_8px_24px_rgba(65,152,142,0.08)]">
              <span className="shrink-0 font-display text-sm font-medium text-accent">—</span>
              {benefit}
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
