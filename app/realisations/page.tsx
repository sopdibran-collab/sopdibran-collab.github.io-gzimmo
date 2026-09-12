import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { RealisationGrid } from "@/components/content/RealisationGrid";

export const metadata = createMetadata({
  title: "Réalisations",
  description:
    "Découvrez les réalisations Gzimmo : nettoyage professionnel en Suisse romande, finitions soignées et résultats impeccables.",
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
          badge="Réalisations"
          title="La précision, visible"
          description="Chaque projet reflète notre exigence : des espaces remis en ordre avec méthode et discrétion."
        />
      </PageHero>

      <PageMain variant="surface">
        <RealisationGrid showHeader={false} />
      </PageMain>

      <PageCta />
    </>
  );
}
