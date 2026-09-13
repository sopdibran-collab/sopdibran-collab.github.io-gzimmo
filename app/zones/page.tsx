import { locations, romontRegionLocations } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LocalAreaLinks } from "@/components/seo/LocalSeoContent";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Zones d'intervention — Fribourg, Vaud, Neuchâtel",
  description:
    "Gzimmo intervient à Romont, en Glâne, dans les cantons de Fribourg, Vaud et Neuchâtel. Entreprise de nettoyage professionnel — devis gratuit.",
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
          badge="Fribourg · Vaud · Neuchâtel"
          title="Où intervenons-nous ?"
          description="Basés à Romont (FR), nous couvrons les cantons de Fribourg, Vaud et Neuchâtel — en priorité la Glâne et le canton de Fribourg."
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
