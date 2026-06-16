import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FaqList } from "@/components/content/FaqList";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Questions fréquentes sur les services de nettoyage Gzimmo : zone d'intervention, devis gratuit, produits utilisés et délais.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(),
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
          title="Vos questions, nos réponses"
          description="Des informations claires pour vous aider à préparer votre demande de devis."
        />
      </PageHero>

      <PageMain variant="surface">
        <FaqList items={faqItems} />
      </PageMain>

      <PageCta />
    </>
  );
}
