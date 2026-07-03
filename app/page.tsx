import { homepageFaq } from "@/data/faq";
import { googleReviews } from "@/data/google-reviews";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema, googleReviewsLocalBusinessSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { AccentLine } from "@/components/ui/Badge";
import { Badge } from "@/components/ui/Badge";
import { ConversionCta } from "@/components/ui/ConversionCta";
import { ReassuranceBand } from "@/components/ui/ReassuranceBand";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCardGrid } from "@/components/content/ServiceCardGrid";
import { WhyList } from "@/components/content/WhyList";
import { StatsBand } from "@/components/content/StatsBand";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { GoogleReviewsSlider } from "@/components/content/GoogleReviewsSlider";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { ContactCta } from "@/components/content/ContactCta";
import { HomeZoneGrid } from "@/components/content/HomeZoneGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { TextLink } from "@/components/ui/TextLink";

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

      <Section variant="hero" className="pb-0">
        <FadeIn>
          <div className="max-w-3xl">
            <Badge className="text-accent/90">Gzimmo Sàrl · Romont (FR) · Suisse romande</Badge>
            <h1 className="mt-5 font-display text-display-xl font-semibold text-foreground">
              Nettoyage professionnel
              <br />
              pour l&apos;immobilier en Suisse romande
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              Fins de bail, régies, chantiers, bureaux — une équipe experte des exigences
              immobilières, basée à Romont. Devis gratuit, réponse sous 24 h.
            </p>

            <ConversionCta className="mt-10" />
            <ReassuranceBand className="mt-8" />

            <AccentLine className="mt-14" />
          </div>
        </FadeIn>
      </Section>

      <Section variant="accent">
        <ServiceCardGrid />
      </Section>

      <Section variant="surface">
        <WhyList />
      </Section>

      <Section variant="inverse">
        <StatsBand />
      </Section>

      <Section variant="default">
        <HomeZoneGrid />
      </Section>

      <Section variant="accent">
        <RealisationGrid />
      </Section>

      <Section variant="surface">
        <FadeIn>
          <Badge>Avis clients</Badge>
          <h2 className="mt-4 font-display text-display-md text-foreground">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Retours authentiques recueillis sur Google — nettoyage professionnel en Suisse romande.
          </p>
        </FadeIn>
        <div className="mt-10">
          <GoogleReviewsSlider reviews={googleReviews} />
        </div>
        <div className="mt-8 text-center">
          <TextLink href="/avis">Tous les avis clients</TextLink>
        </div>
      </Section>

      <Section variant="default">
        <FadeIn>
          <FaqSectionHeader />
        </FadeIn>
        <div className="mt-10">
          <FaqList items={homepageFaq} />
        </div>
        <ConversionCta className="mt-10" />
        <div className="mt-6">
          <TextLink href="/faq">Toutes les questions</TextLink>
        </div>
      </Section>

      <Section variant="surface" className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
