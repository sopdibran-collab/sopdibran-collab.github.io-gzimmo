import { company, teamExperienceLabel } from "@/data/company";
import { cn } from "@/lib/utils";

const items = [
  "Réponse sous 24 h",
  "Devis gratuit",
  "Suisse romande",
  teamExperienceLabel(true),
] as const;

type ReassuranceBandProps = {
  className?: string;
};

export function ReassuranceBand({ className }: ReassuranceBandProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted",
        className,
      )}
      aria-label="Garanties Gzimmo"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ReassuranceCards({ className }: ReassuranceBandProps) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-border/80 bg-white/70 px-4 py-3 text-sm text-foreground/90"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NapBlock({ className }: ReassuranceBandProps) {
  return (
    <address
      className={cn("not-italic text-sm text-muted leading-relaxed", className)}
    >
      <strong className="text-foreground">{company.legalName}</strong>
      <br />
      {company.address.street}, {company.address.postalCode} {company.address.city} (
      {company.address.region})
      <br />
      <a href={`tel:${company.phone}`} className="text-foreground hover:text-accent">
        {company.phoneDisplay}
      </a>
      <br />
      <a href={`mailto:${company.email}`} className="text-foreground hover:text-accent">
        {company.email}
      </a>
    </address>
  );
}
