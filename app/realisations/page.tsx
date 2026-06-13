import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { ContactCta } from "@/components/content/ContactCta";

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

      <Section>
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Réalisations" }]}
        />
        <PageIntro
          badge="Réalisations"
          title="La précision, visible"
          description="Chaque projet reflète notre exigence : des espaces remis en ordre avec méthode et discrétion."
        />

        <div className="mt-16">
          <RealisationGrid showHeader={false} />
        </div>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
