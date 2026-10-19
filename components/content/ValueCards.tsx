import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function ValueCards({
  items,
  className,
  sectionTitle,
  sectionId,
}: {
  items: { title: string; text: string }[];
  className?: string;
  sectionTitle?: string;
  sectionId?: string;
}) {
  const Heading = sectionTitle ? "h3" : "h2";
  const grid = (
    <div
      className={cn(
        sectionTitle
          ? "mt-6 grid gap-2 md:mt-8 md:grid-cols-3 md:gap-8"
          : "mt-16 grid gap-4 md:grid-cols-3",
        className,
      )}
    >
      {items.map((value, index) => (
        <FadeIn key={value.title} delay={index * 0.08}>
          <article
            className={cn(
              "h-full border-t-2 border-accent",
              sectionTitle ? "py-4 md:py-6" : "py-6",
            )}
          >
            <div className="mb-4 h-px w-10 bg-accent/40" aria-hidden="true" />
            <Heading
              className={
                sectionTitle
                  ? "font-display text-xl font-semibold text-foreground"
                  : "font-display text-display-sm text-foreground"
              }
            >
              {value.title}
            </Heading>
            <p className="mt-3 text-muted leading-relaxed md:mt-4">{value.text}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  );

  if (!sectionTitle) {
    return grid;
  }

  return (
    <section className="mt-16" aria-labelledby={sectionId}>
      <h2 id={sectionId} className="font-display text-display-sm text-foreground">
        {sectionTitle}
      </h2>
      {grid}
    </section>
  );
}
