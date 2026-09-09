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
  title: "Gzimmo | Nettoyage fin de bail et après chantier à Romont",
  description:
    "Gzimmo Sàrl à Romont : nettoyage fin de bail et après chantier. Devis gratuit sous 24 h, garantie régie. Fribourg, Vaud, Neuchâtel — 076 214 23 42.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Gzimmo",
    "nettoyage après rénovation",
    "nettoyage après chantier",
    "nettoyage après travaux",
    "nettoyage fin de bail",
    "devis nettoyage",
    "Romont",
    "Fribourg",
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

      <Section variant="surface">
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
          <FaqList items={homepageFaq} />
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
