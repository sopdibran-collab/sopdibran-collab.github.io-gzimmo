import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FaqList } from "@/components/content/FaqList";
import { ContactCta } from "@/components/content/ContactCta";

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

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        <PageIntro
          badge="FAQ"
          title="Vos questions, nos réponses"
          description="Des informations claires pour vous aider à préparer votre demande de devis."
        />

        <div className="mt-16">
          <FaqList items={faqItems} />
        </div>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
