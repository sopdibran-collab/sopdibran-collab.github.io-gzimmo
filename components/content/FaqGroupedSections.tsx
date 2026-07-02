import { getFaqsGroupedByCategory } from "@/data/faq";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqGroupedSections() {
  const groups = getFaqsGroupedByCategory();

  return (
    <div className="space-y-16 md:space-y-20">
      {groups.map((group, index) => (
        <FadeIn key={group.id} delay={index * 0.04}>
          <section aria-labelledby={`faq-section-${group.id}`}>
            <div className="max-w-2xl">
              <h2
                id={`faq-section-${group.id}`}
                className="font-display text-display-sm text-foreground"
              >
                {group.title}
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">{group.description}</p>
            </div>
            <div className="mt-8">
              <FaqAccordion items={group.items} singleOpen />
            </div>
          </section>
        </FadeIn>
      ))}
    </div>
  );
}
