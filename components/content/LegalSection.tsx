import type { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-10 first:mt-0 first:border-0 first:pt-0">
      <h2 className="font-display text-display-sm text-foreground">{title}</h2>
      <div className="prose-legal mt-4 space-y-4 text-muted">{children}</div>
    </section>
  );
}
