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
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Nettoyage fin de bail & régies à Romont",
  description:
    "Gzimmo Sàrl — nettoyage à Romont (FR). Fins de bail pour régies, chantiers, bureaux. Devis gratuit, réponse sous 24 h. 076 214 23 42.",
  path: "/",
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

      <ContactCta />
    </>
  );
}
