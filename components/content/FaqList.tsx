import type { FaqContent, FaqItem } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/content/FaqAccordion";

type FaqListProps = {
  items: readonly (FaqItem | FaqContent)[];
};

/** Liste FAQ compacte (homepage, pages services) — accordéons minimalistes. */
export function FaqList({ items }: FaqListProps) {
  return <FaqAccordion items={items} />;
}

export function FaqSectionHeader() {
  return (
    <>
      <Badge>FAQ</Badge>
      <h2 className="mt-4 font-display text-display-md text-foreground">Questions fréquentes</h2>
    </>
  );
}
