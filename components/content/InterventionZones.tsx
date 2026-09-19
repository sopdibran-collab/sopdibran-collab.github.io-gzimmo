import Link from "next/link";
import { interventionCantons } from "@/data/intervention-zones";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";

type InterventionZonesProps = {
  servicePhrase?: string;
};

/** Zones d'intervention — Fribourg, Vaud, Neuchâtel. */
export function InterventionZones({
  servicePhrase = "nettoyage fin de bail",
}: InterventionZonesProps) {
  return (
    <section className="mt-16 border-t border-border/80 pt-16" aria-labelledby="zones-intervention">
      <Badge className="text-accent/90">Zones d&apos;intervention</Badge>
      <h2 id="zones-intervention" className="mt-4 font-display text-display-sm text-foreground">
        Zones d&apos;intervention
      </h2>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Nous intervenons rapidement pour votre {servicePhrase} à Fribourg, dans les
        cantons de Vaud (de Bex à Nyon, Yverdon, Payerne, Vevey, Montreux, Chexbres,
        Oron-la-Ville, Palézieux), de Fribourg et de Neuchâtel.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        {interventionCantons.map((group) => (
          <div key={group.id}>
            <h3 className="font-display text-lg font-semibold text-foreground">{group.heading}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
              {group.places.map((place) => (
                <li key={place.name}>
                  {place.href ? (
                    <Link
                      href={place.href}
                      className="inline-flex min-h-9 items-center rounded-md px-2.5 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-accent"
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
