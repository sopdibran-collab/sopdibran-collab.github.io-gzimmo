import Link from "next/link";
import { interventionCantons } from "@/data/intervention-zones";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

type InterventionZonesProps = {
  servicePhrase?: string;
  heading?: string;
  /** Listes de communes seulement — le titre est déjà porté par la section parente. */
  compact?: boolean;
  /** When rendered as its own page section, drop the top hairline separator. */
  className?: string;
  /** Section parente sur fond gris : carte blanche, pastilles grises. */
  onSoft?: boolean;
};

function placeChipClass(onSoft: boolean, linked: boolean) {
  return cn(
    "inline-flex min-h-9 items-center rounded-md border border-border px-3 text-sm font-medium text-foreground transition-colors duration-200",
    onSoft ? "bg-surface" : "bg-background",
    linked &&
      "hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
  );
}

/** Zones d'intervention — Fribourg, Vaud, Neuchâtel. */
export function InterventionZones({
  servicePhrase = "nettoyage fin de bail",
  heading = "Zones d'intervention",
  compact = false,
  className,
  onSoft = false,
}: InterventionZonesProps) {
  return (
    <section
      className={cn("mt-16 border-t border-border/80 pt-16", className)}
      aria-labelledby={compact ? "local" : "zones-intervention"}
    >
      {compact ? null : (
        <>
          <Badge className="text-accent">Zones d&apos;intervention</Badge>
          <h2 id="zones-intervention" className="mt-4 font-display text-display-sm text-foreground">
            {heading}
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Nous intervenons dans toute la Suisse romande pour votre {servicePhrase}. Les
            pages publiées détaillent Fribourg et les cantons de Vaud (de Bex à Nyon, Yverdon,
            Payerne, Vevey, Montreux, Chexbres, Oron-la-Ville, Palézieux) et de Neuchâtel.
          </p>
        </>
      )}

      <div className={cn("flex flex-col gap-4", compact ? "mt-8" : "mt-10")}>
        {interventionCantons.map((group) => (
          <div
            key={group.id}
            className={cn(
              "rounded-xl border border-border px-5 py-5 sm:px-6",
              onSoft ? "bg-background" : "bg-surface",
            )}
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{group.heading}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.places.map((place) => (
                <li key={place.name}>
                  {place.href ? (
                    <Link href={place.href} className={placeChipClass(onSoft, true)}>
                      {place.name}
                    </Link>
                  ) : (
                    <span className={placeChipClass(onSoft, false)}>{place.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted leading-relaxed">
        Siège : Route de Raboud 8, 1680 Romont FR. Une commune n&apos;apparaît pas dans la
        liste ? Écrivez-nous — nous confirmons le déplacement.
      </p>
      <div className="mt-6">
        <TextLink href="/zones">Voir toutes les pages locales</TextLink>
      </div>
    </section>
  );
}
