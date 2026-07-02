import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { FaqGroupedSections } from "@/components/content/FaqGroupedSections";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ConversionCta } from "@/components/ui/ConversionCta";

export const metadata = createMetadata({
  title: "Questions fréquentes",
  description:
    "FAQ Gzimmo Sàrl : tarifs, zone d'intervention, prestations, délais et assurances. Nettoyage professionnel en Suisse romande. Devis gratuit sous 24 h.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        <PageIntro
          badge="FAQ"
          title="Questions fréquentes"
          description="Tarifs, zone d'intervention, prestations et délais — des réponses claires pour préparer votre demande de devis."
        >
          <ConversionCta />
        </PageIntro>
      </PageHero>

      <PageMain variant="surface">
        <FaqGroupedSections />
      </PageMain>

      <PageCta />
    </>
  );
}
