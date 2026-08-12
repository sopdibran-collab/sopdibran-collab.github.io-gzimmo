import Image from "next/image";
import Link from "next/link";
import { getServicePath } from "@/lib/service-paths";
import { TextLink } from "@/components/ui/TextLink";

const homePrestations = [
  {
    label: "Fin de bail",
    slug: "nettoyage-fin-de-bail",
    detail: "Remise aux standards régie, état des lieux sans mauvaise surprise.",
    image: "/images/services/nettoyage-fin-de-bail.webp",
  },
  {
    label: "Régies & conciergerie",
    slug: "conciergerie",
    detail: "Interventions planifiées pour vos entrées, sorties et turnovers.",
    image: "/images/services/entretien-locaux.webp",
  },
  {
    label: "Après chantier",
    slug: "nettoyage-apres-chantier",
    detail: "Poussières fines, résidus, livraison prête à habiter.",
    image: "/images/services/nettoyage-apres-chantier.webp",
  },
  {
    label: "Bureaux",
    slug: "nettoyage-bureaux",
    detail: "Entretien hors heures — sols, sanitaires, espaces communs.",
    image: "/images/services/nettoyage-bureaux.webp",
  },
  {
    label: "Appartements",
    slug: "nettoyage-appartements",
    detail: "Remise en état profonde, cuisines et sanitaires inclus.",
    image: "/images/services/nettoyage-appartements.webp",
  },
  {
    label: "Vitres",
    slug: "nettoyage-vitres",
    detail: "Vitrines et façades — lisibilité et image soignée.",
    image: "/images/services/nettoyage-vitres.webp",
  },
] as const;

export function HomePrestationsGrid() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <h2 className="font-display text-display-md text-foreground">
            Six métiers du nettoyage, une adresse à Romont
          </h2>
        </div>
        <p className="max-w-sm text-muted leading-relaxed lg:col-span-5 lg:justify-self-end lg:text-right">
          On ne vend pas un package générique — on intervient sur le terrain, pour des
          locataires, régies et chantiers de Suisse romande.
        </p>
      </div>

      <ul className="mt-14 space-y-0">
        {homePrestations.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={getServicePath(item.slug)}
              className="group grid gap-5 border-t border-border py-7 transition-colors duration-200 last:border-b sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[6rem_11rem_minmax(0,1fr)_auto] lg:gap-10 lg:py-8"
            >
              <span className="font-display text-sm font-semibold tabular-nums tracking-tight text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface sm:block">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
                  sizes="176px"
                />
              </div>

              <div className="min-w-0">
                <span className="font-display text-lg font-semibold tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-accent sm:text-xl">
                  {item.label}
                </span>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>

              <span
                className="hidden text-muted transition-colors duration-200 group-hover:text-accent lg:inline"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <TextLink href="/services">Voir le détail des services</TextLink>
      </div>
    </div>
  );
}
