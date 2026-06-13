import type { FaqItem } from "@/data/faq";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <dl className="divide-y divide-border border-t border-border">
      {items.map((item, index) => (
        <FadeIn key={item.question} delay={index * 0.05}>
          <div className="py-8">
            <dt className="font-medium text-foreground">{item.question}</dt>
            <dd className="mt-3 max-w-2xl text-muted">{item.answer}</dd>
          </div>
        </FadeIn>
      ))}
    </dl>
  );
}
