import { FadeIn } from "@/components/ui/FadeIn";

export function ValueCards({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-3">
      {items.map((value, index) => (
        <FadeIn key={value.title} delay={index * 0.08}>
          <article className="h-full rounded-2xl border border-border/80 bg-white/80 p-8 shadow-[0_8px_32px_rgba(30,34,39,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/20 hover:shadow-[0_16px_40px_rgba(65,152,142,0.08)] hover:-translate-y-0.5">
            <div className="mb-4 h-px w-10 bg-accent/40" aria-hidden="true" />
            <h2 className="font-display text-display-sm text-foreground">{value.title}</h2>
            <p className="mt-4 text-muted leading-relaxed">{value.text}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
