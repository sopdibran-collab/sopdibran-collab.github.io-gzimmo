import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ZoneBands } from "@/components/content/ZoneBands";
import { ContextualLinks } from "@/components/content/ContextualLinks";

export const metadata = createMetadata({
  title: "Zones de nettoyage depuis Romont",
  description:
    "Les communes où nous intervenons depuis Romont, de la Glâne à Lausanne. Réponse sous 24 h, sans frais de déplacement.",
  absoluteTitle: true,
  path: "/zones",
  keywords: ["zones intervention", "Glâne", "Romont", "nettoyage Fribourg", "nettoyage Vaud"],
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
          badge="Depuis Romont"
          title="Zones de nettoyage depuis Romont"
          description="Depuis notre siège de Romont, nous intervenons dans les cantons de Fribourg et de Vaud. Voici les communes desservies, région par région."
        />
      </PageHero>

      <ZoneBands />

      <PageMain variant="default">
        <ContextualLinks
          links={[
            { label: "Services de nettoyage", href: "/services" },
            { label: "Réalisations", href: "/realisations" },
            { label: "Avis clients", href: "/avis" },
          ]}
        />
      </PageMain>

      <PageCta />
    </>
  );
}
