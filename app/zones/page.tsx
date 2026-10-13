import { indicativeTimeNotice } from "@/data/intervention-zones";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ZoneBands } from "@/components/content/ZoneBands";

export const metadata = createMetadata({
  title: "Zones de nettoyage depuis Romont",
  description:
    "Bandes de temps de route depuis Romont : siège en Glâne, environ 15 à 20 minutes, 20 à 30 minutes, 35 à 40 minutes en zone étendue. Temps indicatif, pas un délai d'intervention garanti.",
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
          description="Siège en Glâne, puis les communes regroupées par temps de route. Pas de Genève ni de Valais."
        />
      </PageHero>

      <p className="border-b border-border bg-background px-container py-6 text-sm text-foreground">
        <span className="mx-auto block max-w-[1200px]">{indicativeTimeNotice}</span>
      </p>

      <ZoneBands />

      <PageCta />
    </>
  );
}
