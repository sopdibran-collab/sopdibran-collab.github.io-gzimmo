import { locations, romontRegionLocations } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LocalAreaLinks } from "@/components/seo/LocalSeoContent";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Zones d'intervention — Suisse romande",
  description:
    "Gzimmo intervient dans toute la Suisse romande depuis Romont. Pages locales : Fribourg, Vaud et Neuchâtel. Devis gratuit.",
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
  const fribourgLocations = locations.filter((l) => l.canton === "FR");
  const vaudLocations = locations.filter((l) => l.canton === "VD");
  const neuchatelLocations = locations.filter((l) => l.canton === "NE");

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
          badge="Suisse romande"
          title="Où intervenons-nous ?"
          description="Basés à Romont (FR), nous intervenons dans toute la Suisse romande. Les pages ci-dessous détaillent Fribourg, Vaud et Neuchâtel — en priorité la Glâne."
        />
      </PageHero>

      <PageMain variant="surface">
        <ContentCard>
          <LocalAreaLinks
            locations={romontRegionLocations}
            title="Romont et région — zone prioritaire"
          />
        </ContentCard>

        <ContentCard className="mt-8">
          <LocalAreaLinks locations={fribourgLocations} title="Canton de Fribourg" />
        </ContentCard>

        <ContentCard className="mt-8">
          <LocalAreaLinks locations={vaudLocations} title="Canton de Vaud" />
        </ContentCard>

        <ContentCard className="mt-8">
          <LocalAreaLinks locations={neuchatelLocations} title="Canton de Neuchâtel" />
        </ContentCard>
      </PageMain>

      <PageCta />
    </>
  );
}
