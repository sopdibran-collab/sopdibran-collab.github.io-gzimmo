import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users } from "lucide-react";
import { interventionCantons } from "@/data/intervention-zones";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

type InterventionZonesProps = {
  servicePhrase?: string;
  heading?: string;
  /** Lien du bouton de devis. */
  devisHref?: string;
  className?: string;
  /** Cartes blanches sur le fond gris de la section parente. */
  onSoft?: boolean;
};

const reassurances = [
  {
    icon: MapPin,
    title: "Depuis Romont",
    detail: "Fribourg, Vaud et Neuchâtel",
  },
  {
    icon: Clock,
    title: "Devis sous 24 h",
    detail: "Gratuit, sans engagement",
  },
  {
    icon: Users,
    title: "Particuliers et entreprises",
    detail: "Régies comprises",
  },
] as const;

function placeChipClass(onSoft: boolean, linked: boolean) {
  return cn(
    "inline-flex min-h-11 items-center rounded-md border border-border px-3 text-sm font-medium transition-colors duration-200",
    onSoft ? "bg-surface text-foreground" : "bg-background text-foreground",
    linked &&
      "hover:border-accent/40 hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
  );
}

/** Zones d'intervention — Fribourg, Vaud, Neuchâtel. */
export function InterventionZones({
  servicePhrase = "nettoyage",
  heading = "Nos zones d'intervention en Suisse romande",
  devisHref = "/contact",
  className,
  onSoft = false,
}: InterventionZonesProps) {
  const cardClass = "border-t-2 border-accent py-5";

  return (
    <section className={cn("mt-16 border-t border-border pt-16", className)} aria-labelledby="zones-intervention">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start lg:gap-12">
        <div>
          <Badge className="text-accent-ink">Zones d&apos;intervention</Badge>
          <h2
            id="zones-intervention"
            className="mt-4 scroll-mt-28 font-display text-display-sm text-foreground"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base text-muted leading-relaxed">
            Depuis Romont, nous intervenons dans les cantons de Fribourg, de Vaud et de Neuchâtel
            pour votre {servicePhrase}.
          </p>
          <ul className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
            {reassurances.map((item) => (
              <li key={item.title} className="flex min-w-0 items-start gap-2.5">
                <item.icon className="mt-0.5 size-4 shrink-0 text-accent-ink" strokeWidth={1.5} aria-hidden />
                <span>
                  <span className="block text-sm font-medium text-foreground">{item.title}</span>
                  <span className="block text-sm text-muted">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-border lg:mt-1">
          <Image
            src="/images/hero/hero-zones.jpg"
            alt="Vue sur Romont et les environs"
            fill
            sizes="(min-width: 1024px) 256px, 100vw"
            className="object-cover object-[center_42%]"
          />
        </figure>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {interventionCantons.map((group) => (
          <article key={group.id} className={cardClass}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-foreground">{group.heading}</h3>
              <p className="shrink-0 text-xs font-medium tracking-[0.08em] text-muted">{group.code}</p>
            </div>
            <p className="mt-2 max-w-[62ch] text-base text-muted leading-relaxed">{group.description}</p>
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
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted leading-relaxed">
        Siège : Route de Raboud 8, 1680 Romont FR. Une commune n&apos;apparaît pas dans la liste ?
        Écrivez-nous. Nous confirmons le déplacement.
      </p>
      <div className="mt-4">
        <TextLink href="/zones">Voir toutes les pages locales</TextLink>
      </div>

      <div className={cn("mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between", cardClass)}>
        <div className="min-w-0">
          <p className="text-sm font-medium text-accent-ink">Vous êtes dans notre secteur ?</p>
          <p className="mt-1 font-display text-xl font-semibold text-foreground">Demander un devis</p>
          <p className="mt-2 max-w-[52ch] text-base text-muted leading-relaxed">
            Décrivez le bien ou le chantier.
          </p>
        </div>
        <div className="shrink-0">
          <Button
            href={devisHref}
            className="w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto"
          >
            Demander un devis gratuit
          </Button>
          <p className="mt-2 text-sm text-muted sm:text-right">Réponse sous 24 h · Sans engagement</p>
        </div>
      </div>
    </section>
  );
}
