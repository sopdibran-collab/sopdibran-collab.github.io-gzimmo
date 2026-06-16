import { company, formatAddress } from "@/data/company";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GoogleMapProps = {
  className?: string;
  title?: string;
};

export function GoogleMap({ className, title }: GoogleMapProps) {
  return (
    <div
      className={cn(
        "aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-surface shadow-[0_8px_32px_rgba(30,34,39,0.05)] md:aspect-[16/9]",
        className,
      )}
    >
      <iframe
        src={company.googleMapsEmbed}
        width="100%"
        height="100%"
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title ?? `${company.name} — ${formatAddress()}`}
      />
    </div>
  );
}

export function GoogleMapsLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={company.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
