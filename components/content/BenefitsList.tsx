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
      <Badge className="text-accent-ink">Prestation</Badge>
      <h2 className="mt-4 font-display text-display-sm text-foreground">{title}</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <FadeIn
            key={benefit}
            as="li"
            delay={index * 0.05}
            className="flex gap-4 border-t border-border px-1 py-4 text-base leading-relaxed text-foreground/90"
          >
            {benefit}
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
