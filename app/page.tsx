import { homepageFaq } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { HomeHero } from "@/components/content/HomeHero";
import { HomePrestationsGrid } from "@/components/content/HomePrestationsGrid";
import { LocalMoneyLinks } from "@/components/content/LocalMoneyLinks";
import { WhyList } from "@/components/content/WhyList";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { HomeFeaturedReview } from "@/components/content/HomeFeaturedReview";
import { ContactCta } from "@/components/content/ContactCta";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { GarantieRemiseBail } from "@/components/ui/GarantieRemiseBail";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Entreprise de nettoyage à Romont | Fribourg, Vaud",
  description:
    "Gzimmo Sàrl, entreprise de nettoyage à Romont, Route de Raboud 8. Fribourg et Vaud. Devis gratuit — 076 214 23 42.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "entreprise de nettoyage",
    "Gzimmo",
    "Romont",
    "Fribourg",
    "Vaud",
    "devis nettoyage",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness is emitted once in the root layout (organizationJsonLd). */}
      <JsonLd data={faqPageSchema(homepageFaq)} />

      <HomeHero />

      <GarantieRemiseBail />

      <Section variant="default">
        <HomePrestationsGrid />
        <LocalMoneyLinks />
      </Section>

      <Section id="pourquoi" variant="surface">
        <WhyList />
      </Section>

      <Section variant="default">
        <RealisationGrid />
      </Section>

      <Section variant="surface">
        <HomeFeaturedReview />
      </Section>

      <Section variant="default">
        <FaqSectionHeader
          title="Prix, devis et garantie régie"
          description="Les questions que posent locataires et régies avant un état des lieux, une remise des clés ou une livraison de chantier."
        />
        <div className="mt-8">
          <FaqList items={homepageFaq} collapseAfter={4} />
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
