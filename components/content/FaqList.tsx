import type { FaqItem } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-border/80 border-t border-border/80">
      {items.map((item, index) => (
        <FadeIn key={item.question} delay={index * 0.05}>
          <div className="py-8 transition-colors duration-300 hover:bg-white/50 md:px-4 md:-mx-4 md:rounded-lg">
            <dt className="text-base font-medium text-foreground md:text-[1.05rem]">
              {item.question}
            </dt>
            <dd className="mt-3 max-w-2xl text-muted leading-relaxed">{item.answer}</dd>
          </div>
        </FadeIn>
      ))}
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
