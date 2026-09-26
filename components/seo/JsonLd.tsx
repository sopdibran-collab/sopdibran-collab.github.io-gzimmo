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
  onDark = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Light typography for full-bleed dark-veil heroes */
  onDark?: boolean;
}) {
  return (
    <header className="max-w-2xl">
      {badge ? (
        <Badge className={onDark ? "text-white/70" : "text-accent"}>{badge}</Badge>
      ) : null}
      <h1
        className={
          onDark
            ? "mt-4 font-display text-display-md text-white"
            : "mt-4 font-display text-display-md text-foreground"
        }
      >
        {title}
      </h1>
      {description ? (
        <p
          className={
            onDark
              ? "mt-5 text-reading text-white/70"
              : "mt-5 text-reading text-muted"
          }
        >
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </header>
  );
}
