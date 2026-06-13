import { company, teamExperienceLabel } from "@/data/company";
import { homepageFaq } from "@/data/faq";
import { formatPhoneHref } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";
import { faqPageSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { AccentLine } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceList } from "@/components/content/ServiceList";
import { WhyList } from "@/components/content/WhyList";
import { StatsBand } from "@/components/content/StatsBand";
import { RealisationGrid } from "@/components/content/RealisationGrid";
import { Testimonial } from "@/components/content/Testimonial";
import { FaqList } from "@/components/content/FaqList";
import { ContactCta } from "@/components/content/ContactCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = createMetadata();

export default function HomePage() {
  const callHref = company.phone
    ? formatPhoneHref(company.phone)
    : "/contact#appeler";

  return (
    <>
      <JsonLd data={faqPageSchema(homepageFaq)} />

      <Section className="pb-0">
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="font-display text-display-xl font-semibold text-foreground">
              Nettoyage professionnel
              <br />
              en Suisse romande
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              {teamExperienceLabel(true)}. Intervention rapide. Un espace parfaitement
              entretenu, à chaque passage.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Demander un devis</Button>
              <Button
                variant="secondary"
                href={callHref}
                external={callHref.startsWith("tel:")}
              >
                {company.phoneDisplay || "Appeler"}
              </Button>
            </div>

            <AccentLine className="mt-14" />
          </div>
        </FadeIn>
      </Section>

      <Section variant="surface">
        <ServiceList />
      </Section>

      <Section>
        <WhyList />
      </Section>

      <Section variant="inverse">
        <StatsBand />
      </Section>

      <Section>
        <RealisationGrid />
      </Section>

      <Section variant="surface">
        <Testimonial />
      </Section>

      <Section>
        <div>
          <h2 className="font-display text-display-md text-foreground">
            Questions fréquentes
          </h2>
          <div className="mt-10">
            <FaqList items={homepageFaq} />
          </div>
          <div className="mt-6">
            <TextLink href="/faq">Toutes les questions</TextLink>
          </div>
        </div>
      </Section>

      <Section>
        <ContactCta />
      </Section>
    </>
  );
}
