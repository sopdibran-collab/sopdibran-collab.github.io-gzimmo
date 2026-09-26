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
  /** Chips sur fond SOFT : le survol repasse au blanc, pas au même gris. */
  onSoft?: boolean;
};

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
          <Badge className="text-accent/90">Zones d&apos;intervention</Badge>
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

      <div className={cn("grid gap-10 lg:grid-cols-2", compact ? "mt-8" : "mt-10")}>
        {interventionCantons.map((group) => (
          <div key={group.id}>
            <h3 className="font-display text-lg font-semibold text-foreground">{group.heading}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
              {group.places.map((place) => (
                <li key={place.name}>
                  {place.href ? (
                    <Link
                      href={place.href}
                      className={cn(
                        "inline-flex min-h-9 items-center rounded-md px-2.5 py-2 text-sm text-muted transition-colors duration-200 hover:text-accent",
                        onSoft ? "hover:bg-background" : "hover:bg-surface",
                      )}
                    >
                      {place.name}
                    </Link>
                  ) : (
                    <span className="inline-flex rounded-md px-2.5 py-1 text-sm text-muted">
                      {place.name}
                    </span>
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
