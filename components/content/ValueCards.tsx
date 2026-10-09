import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function ValueCards({
  items,
  className,
}: {
  items: { title: string; text: string }[];
  className?: string;
}) {
  return (
    <div className={cn("mt-16 grid gap-4 md:grid-cols-3", className)}>
      {items.map((value, index) => (
        <FadeIn key={value.title} delay={index * 0.08}>
          <article className="h-full border-t-2 border-accent py-6">
            <div className="mb-4 h-px w-10 bg-accent/40" aria-hidden="true" />
            <h2 className="font-display text-display-sm text-foreground">{value.title}</h2>
            <p className="mt-4 text-muted leading-relaxed">{value.text}</p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
