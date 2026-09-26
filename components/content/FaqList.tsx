import type { FaqContent, FaqItem } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type FaqListProps = {
  items: readonly (FaqItem | FaqContent)[];
  /** Désactive l'animation quand la liste est déjà dans un bloc animé (page FAQ groupée). */
  animated?: boolean;
};

function faqRowKey(item: FaqItem | FaqContent, index: number) {
  return "id" in item ? item.id : `${item.question}-${index}`;
}

/**
 * FAQ en description list valide :
 * chaque entrée = un seul `div` enfant direct de `dl`, contenant `dt` + `dd`.
 * (Pas de wrapper d’animation supplémentaire — HTML + a11y.)
 */
export function FaqList({ items, animated = true }: FaqListProps) {
  return (
    <dl className="divide-y divide-border/80 border-t border-border/80">
      {items.map((item, index) => {
        const key = faqRowKey(item, index);
        const anchorId = "id" in item ? item.id : undefined;

        return (
          <div
            key={key}
            id={anchorId}
            className={cn(
              "scroll-mt-28 py-8 transition-colors duration-300 hover:bg-white/50 md:-mx-4 md:rounded-lg md:px-4",
              animated && "animate-fade-in-up motion-reduce:animate-none",
            )}
            style={animated ? { animationDelay: `${index * 0.05}s` } : undefined}
          >
            <dt className="text-lg font-medium text-foreground">
              {item.question}
            </dt>
            <dd className="mt-3 text-reading text-muted">{item.answer}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export function FaqSectionHeader({
  title = "Questions fréquentes",
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      <Badge>FAQ</Badge>
      <h2 className="mt-4 font-display text-display-md text-foreground">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{description}</p>
      ) : null}
    </>
  );
}
