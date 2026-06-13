import { locations, romontRegionLocations } from "@/data/locations";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LocalAreaLinks } from "@/components/seo/LocalSeoContent";
import { ContactCta } from "@/components/content/ContactCta";

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
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Zones d'intervention", path: "/zones" },
        ])}
      />

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones" }]} />
        <PageIntro
          badge="Suisse romande"
          title="Où intervenons-nous ?"
          description="Basés à Romont (FR), nous couvrons en priorité la Glâne et le canton de Fribourg, puis l'ensemble de la Suisse romande."
        />

        <div className="mt-16">
          <LocalAreaLinks
            locations={romontRegionLocations}
            title="Romont et région — zone prioritaire"
          />
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <LocalAreaLinks locations={fribourgLocations} title="Canton de Fribourg" />
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <LocalAreaLinks locations={otherLocations} title="Autres cantons — Suisse romande" />
        </div>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
