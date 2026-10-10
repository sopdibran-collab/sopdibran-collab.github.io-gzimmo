import Link from "next/link";
import { interventionCantons } from "@/data/intervention-zones";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Zones d'intervention — Fribourg, Vaud, Neuchâtel",
  description:
    "Gzimmo intervient depuis Romont dans les cantons de Fribourg, de Vaud et de Neuchâtel. Devis gratuit.",
  path: "/zones",
  keywords: [
    "zones intervention",
    "Glâne",
    "Romont",
    "nettoyage Fribourg",
    "nettoyage Vaud",
    "nettoyage Neuchâtel",
  ],
});

export default function ZonesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Zones d'intervention", path: "/zones" },
          ]),
          zonesItemListSchema(),
        ]}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-zones.jpg",
          alt: "Vue sur Romont et environs",
          position: "center 40%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones" }]} />
        <PageIntro
          onDark
          badge="Fribourg, Vaud, Neuchâtel"
          title="Où intervenons-nous ?"
          description="Basés à Romont (FR), nous intervenons dans les cantons de Fribourg, de Vaud et de Neuchâtel."
        />
      </PageHero>

      <PageMain variant="surface">
        {interventionCantons.map((canton, index) => (
          <ContentCard key={canton.id} className={index > 0 ? "mt-8" : undefined}>
            <nav aria-label={canton.heading}>
              <h2 className="font-display text-display-sm text-foreground">{canton.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{canton.description}</p>
              <ul className="mt-6 columns-2 gap-x-8 text-sm md:columns-3">
                {canton.places.map((place) => (
                  <li key={place.name} className="mb-2 break-inside-avoid">
                    {place.href ? (
                      <Link
                        href={place.href}
                        className="text-muted transition-colors hover:text-accent-ink"
                      >
                        {place.name}
                      </Link>
                    ) : (
                      <span className="text-muted">{place.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </ContentCard>
        ))}
      </PageMain>

      <PageCta />
    </>
  );
}
