import type { FaqContent, FaqItem } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

type FaqListProps = {
  items: readonly (FaqItem | FaqContent)[];
  /** Désactive l'animation quand la liste est déjà dans un bloc animé (page FAQ groupée). */
  animated?: boolean;
};

function faqRowKey(item: FaqItem | FaqContent, index: number) {
  return "id" in item ? item.id : `${item.question}-${index}`;
}

function FaqRow({ item }: { item: FaqItem | FaqContent }) {
  return (
    <div className="py-8 transition-colors duration-300 hover:bg-white/50 md:-mx-4 md:rounded-lg md:px-4">
      <dt className="text-base font-medium text-foreground md:text-[1.05rem]">{item.question}</dt>
      <dd className="mt-3 max-w-2xl text-muted leading-relaxed">{item.answer}</dd>
    </div>
  );
}

/** Liste FAQ éditoriale — réponses visibles (homepage, services, page FAQ). */
export function FaqList({ items, animated = true }: FaqListProps) {
  return (
    <dl className="divide-y divide-border/80 border-t border-border/80">
      {items.map((item, index) => {
        const key = faqRowKey(item, index);
        if (!animated) {
          return (
            <div key={key}>
              <FaqRow item={item} />
            </div>
          );
        }
        return (
          <FadeIn key={key} delay={index * 0.05}>
            <FaqRow item={item} />
          </FadeIn>
        );
      })}
    </dl>
  );
}

export function FaqSectionHeader() {
  return (
    <>
      <Badge>FAQ</Badge>
      <h2 className="mt-4 font-display text-display-md text-foreground">Questions fréquentes</h2>
    </>
  );
}
