import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export function PlausibleScript() {
  if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
    return (
      <script
        defer
        data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.js"
      />
    );
  }
  return null;
}

export function PageIntro({
  badge,
  title,
  description,
  children,
}: {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      {badge ? <Badge className="text-accent/90">{badge}</Badge> : null}
      <h1 className="mt-4 font-display text-display-md text-foreground">{title}</h1>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
