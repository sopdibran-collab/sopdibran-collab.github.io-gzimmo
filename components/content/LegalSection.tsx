import type { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8 rounded-xl border border-border/70 bg-white/60 p-8 first:mt-0">
      <h2 className="font-display text-display-sm text-foreground">{title}</h2>
      <div className="prose-legal mt-4 space-y-4 text-base text-muted leading-relaxed">{children}</div>
    </section>
  );
}
