import Link from "next/link";
import { getServicePath } from "@/lib/service-paths";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

/** Grille Prestations — disposition mockup (3×2, pleine largeur). */
const homePrestations = [
  { label: "Fin de bail", slug: "nettoyage-fin-de-bail" },
  { label: "Régies", slug: "conciergerie" },
  { label: "Chantiers", slug: "nettoyage-apres-chantier" },
  { label: "Bureaux", slug: "nettoyage-bureaux" },
  { label: "Appartements", slug: "nettoyage-appartements" },
  { label: "Vitres", slug: "nettoyage-vitres" },
] as const;

export function HomePrestationsGrid() {
  return (
    <div>
      <FadeIn>
        <Badge className="text-accent/90">Prestations</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Ce que nous prenons en charge
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Six interventions centrales pour l&apos;immobilier — devis clair, exécution précise.
        </p>
      </FadeIn>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {homePrestations.map((item, index) => (
          <FadeIn key={item.slug} delay={index * 0.04}>
            <li>
              <Link
                href={getServicePath(item.slug)}
                className="group flex items-center justify-between gap-4 border border-border/80 bg-white px-6 py-5 transition-[border-color,color] duration-200 hover:border-accent/35"
              >
                <span className="font-display text-base font-semibold tracking-[-0.015em] text-foreground transition-colors group-hover:text-accent">
                  {item.label}
                </span>
                <span
                  className="text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>

      <div className="mt-10">
        <TextLink href="/services">Voir tous les services</TextLink>
      </div>
    </div>
  );
}
