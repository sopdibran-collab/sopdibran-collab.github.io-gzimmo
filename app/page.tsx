import { homepageFaq } from "@/data/faq";
import { googleReviews } from "@/data/google-reviews";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema, googleReviewsLocalBusinessSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { HomeHero } from "@/components/content/HomeHero";
import { HomePrestationsGrid } from "@/components/content/HomePrestationsGrid";
import { WhyList } from "@/components/content/WhyList";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { HomeFeaturedReview } from "@/components/content/HomeFeaturedReview";
import { ContactCta } from "@/components/content/ContactCta";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Après chantier & fin de bail | Devis Romont",
  description:
    "Nettoyage après rénovation, travaux ou fin de bail à Romont, Fribourg et Vaud. Devis gratuit sous 24 h, garantie régie. 076 214 23 42.",
  path: "/",
  absoluteTitle: true,
  keywords: [
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
      <JsonLd
        data={[faqPageSchema(homepageFaq), googleReviewsLocalBusinessSchema(googleReviews)]}
      />

      <HomeHero />

      <Section variant="default">
        <HomePrestationsGrid />
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
