import { teamExperienceLabel } from "@/data/company";
import { homepageFaq } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { AccentLine } from "@/components/ui/Badge";
import { Badge } from "@/components/ui/Badge";
import { ContactActions } from "@/components/ui/ContactActions";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceList } from "@/components/content/ServiceList";
import { WhyList } from "@/components/content/WhyList";
import { StatsBand } from "@/components/content/StatsBand";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { Testimonial } from "@/components/content/Testimonial";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { ContactCta } from "@/components/content/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(homepageFaq)} />

      <Section variant="hero" className="pb-0">
        <FadeIn>
          <div className="max-w-3xl">
            <Badge className="text-accent/90">Gzimmo Sàrl · Suisse romande</Badge>
            <h1 className="mt-5 font-display text-display-xl font-semibold text-foreground">
              Nettoyage professionnel
              <br />
              en Suisse romande
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              {teamExperienceLabel(true)}. Intervention rapide. Un espace parfaitement
              entretenu, à chaque passage.
            </p>

            <ContactActions className="mt-10" />

            <AccentLine className="mt-14" />
          </div>
        </FadeIn>
      </Section>

      <Section variant="accent">
        <ServiceList />
      </Section>

      <Section variant="surface">
        <WhyList />
      </Section>

      <Section variant="inverse">
        <StatsBand />
      </Section>

      <Section variant="default">
        <RealisationGrid />
      </Section>

      <Section variant="accent">
        <Testimonial />
      </Section>

      <Section variant="surface">
        <FadeIn>
          <FaqSectionHeader />
        </FadeIn>
        <div className="mt-10">
          <FaqList items={homepageFaq} />
        </div>
        <div className="mt-6">
          <TextLink href="/faq">Toutes les questions</TextLink>
        </div>
      </Section>

      <Section variant="default" className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
