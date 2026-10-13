import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { FaqGroupedSections } from "@/components/content/FaqGroupedSections";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ConversionCta } from "@/components/ui/ConversionCta";
import { HashScroll } from "@/components/ui/HashScroll";

export const metadata = createMetadata({
  title: "FAQ nettoyage | Romont, FR, VD, NE",
  description:
    "Réponses de Gzimmo sur les tarifs, la zone (Fribourg, Vaud, Neuchâtel) et les délais. Siège à Romont. Devis gratuit.",
  absoluteTitle: true,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <HashScroll />
      <JsonLd
        data={[
          faqPageSchema(faqItems),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-faq.jpg",
          alt: "Carnet et clés sur un plan de cuisine",
          position: "center 45%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        <PageIntro
          onDark
          badge="FAQ"
          title="Questions fréquentes sur le nettoyage"
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
