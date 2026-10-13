import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { RomontFinDeBailRealisation } from "@/components/content/RomontFinDeBailRealisation";

export const metadata = createMetadata({
  title: "Réalisations de nettoyage à Romont",
  description:
    "Photos et interventions Gzimmo, dont un nettoyage de fin de bail à Romont. Siège : Route de Raboud 8.",
  absoluteTitle: true,
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/realisations" },
        ])}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-realisations.jpg",
          alt: "Appartement après nettoyage",
          position: "center 45%",
        }}
      >
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
        />
        <PageIntro
          onDark
          badge="Réalisations"
          title="Réalisations de nettoyage à Romont"
          description="Un nettoyage de fin de bail à Romont, avec photos avant et après. Les autres interventions sont décrites plus bas."
        />
      </PageHero>

      <PageMain variant="surface">
        <RomontFinDeBailRealisation className="border-0 pt-0" />
        <div className="mt-16 border-t border-border/80 pt-16">
          <RealisationGrid showHeader={false} />
        </div>
      </PageMain>

      <PageCta />
    </>
  );
}
