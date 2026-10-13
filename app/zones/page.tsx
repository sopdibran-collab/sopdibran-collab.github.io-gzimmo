import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ZoneBands } from "@/components/content/ZoneBands";

export const metadata = createMetadata({
  title: "Zones de nettoyage depuis Romont",
  description:
    "Bassins depuis Romont : Glâne et Broye, Gruyère et Veveyse, Sarine et Singine, Lausanne et Ouest lausannois, Nord vaudois. Réponse sous 24 h, sans frais de déplacement.",
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
          description="Siège en Glâne, puis les communes regroupées par bassin. Réponse sous 24 h, sans frais de déplacement."
        />
      </PageHero>

      <ZoneBands />

      <PageCta />
    </>
  );
}
