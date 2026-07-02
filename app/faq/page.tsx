import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { FaqGroupedSections } from "@/components/content/FaqGroupedSections";
import { JsonLd } from "@/components/seo/JsonLd";
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
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent/90">FAQ</p>
          <h1 className="mt-4 font-display text-display-lg font-semibold text-foreground">
            Questions fréquentes — Gzimmo
          </h1>
          <p className="mt-5 text-muted leading-relaxed">
            Tarifs, zone d&apos;intervention, prestations et délais — des réponses claires pour
            préparer votre demande de devis.
          </p>
          <ConversionCta className="mt-8" />
        </div>
      </PageHero>

      <PageMain variant="surface">
        <FaqGroupedSections />
      </PageMain>

      <PageCta />
    </>
  );
}
