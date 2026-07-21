import { homepageFaq } from "@/data/faq";
import { googleReviews } from "@/data/google-reviews";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema, googleReviewsLocalBusinessSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { HomeHero } from "@/components/content/HomeHero";
import { HomePrestationsGrid } from "@/components/content/HomePrestationsGrid";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { HomeFeaturedReview } from "@/components/content/HomeFeaturedReview";
import { ContactCta } from "@/components/content/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = createMetadata({
  title: "Nettoyage professionnel en Suisse romande",
  description:
    "Gzimmo Sàrl — entreprise de nettoyage à Romont (FR). Fins de bail, régies, chantiers, bureaux. Devis gratuit, réponse sous 24 h. 076 214 23 42.",
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
        <RealisationGrid />
      </Section>

      <Section variant="default">
        <HomeFeaturedReview />
      </Section>

      <ContactCta />
    </>
  );
}
