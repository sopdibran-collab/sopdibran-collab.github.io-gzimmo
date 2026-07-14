import { locations, romontRegionLocations } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LocalAreaLinks } from "@/components/seo/LocalSeoContent";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Zones d'intervention — nettoyage Suisse romande",
  description:
    "Gzimmo intervient à Romont, en Glâne, en Fribourg et dans toute la Suisse romande. Entreprise de nettoyage professionnel — devis gratuit.",
  path: "/zones",
  keywords: ["zones intervention", "Glâne", "Romont", "nettoyage Fribourg"],
});

export default function ZonesPage() {
  const fribourgLocations = locations.filter((l) => l.canton === "FR");
  const otherLocations = locations.filter((l) => l.canton !== "FR");

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

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones" }]} />
        <PageIntro
          badge="Suisse romande"
          title="Où intervenons-nous ?"
          description="Basés à Romont (FR), nous couvrons en priorité la Glâne et le canton de Fribourg, puis l'ensemble de la Suisse romande."
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
          <LocalAreaLinks locations={otherLocations} title="Autres cantons — Suisse romande" />
        </ContentCard>
      </PageMain>

      <PageCta />
    </>
  );
}
