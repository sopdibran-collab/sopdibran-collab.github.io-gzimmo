import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { company } from "@/data/company";
import {
  contactAfterParagraphs,
  contactAfterTitle,
  contactPageFaqs,
  contactQuoteIntro,
  contactQuoteMessageItems,
  contactQuoteMessageLead,
  contactQuoteRest,
  contactQuoteTitle,
} from "@/data/contact-page";
import { formatPhoneHref } from "@/lib/utils";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContactForm } from "@/components/content/ContactForm";
import { ContactInfoCard } from "@/components/content/ContactInfoCard";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { GoogleMap, GoogleMapsLink } from "@/components/seo/GoogleMap";
import { SectionDivider } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/Button";
import { HashScroll } from "@/components/ui/HashScroll";

export const metadata = createMetadata({
  title: "Devis de nettoyage à Romont | Gzimmo",
  description:
    "Demande de devis de nettoyage. Gzimmo Sàrl, Route de Raboud 8, 1680 Romont. Réponse sous 24 h. 076 214 23 42.",
  absoluteTitle: true,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; ville?: string }>;
}) {
  const params = await searchParams;
  const callHref = formatPhoneHref(company.phone);

  return (
    <>
      <HashScroll />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqPageSchema(contactPageFaqs),
        ]}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-contact.jpg",
          alt: "Rue de village sous un ciel gris",
          position: "center 40%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        <PageIntro
          onDark
          badge="Contact"
          title="Devis de nettoyage à Romont"
          description="Appelez-nous ou envoyez le formulaire — un échange suffit pour un devis sur mesure, sans engagement. Réponse sous 24 h."
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Button
              href="#formulaire"
              className="w-full bg-white text-foreground shadow-none hover:bg-white/90 sm:w-auto"
            >
              Remplir le formulaire
            </Button>
            <a
              href={callHref}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
            >
              {company.phoneDisplay}
            </a>
          </div>
        </PageIntro>
      </PageHero>

      <PageMain variant="surface">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
          <div id="formulaire" className="scroll-mt-28 lg:col-span-7 lg:scroll-mt-24">
            <ContactForm defaultService={params.service} defaultCommune={params.ville} />
          </div>
        </div>

        <SectionDivider title={contactQuoteTitle} className="mt-20">
          {contactQuoteIntro.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-reading leading-relaxed text-muted">{contactQuoteMessageLead}</p>
          <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-reading leading-relaxed text-muted">
            {contactQuoteMessageItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {contactQuoteRest.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </SectionDivider>

        <SectionDivider title={contactAfterTitle} className="mt-20">
          {contactAfterParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
        </SectionDivider>

        <div className="mt-20">
          <FaqSectionHeader
            title="Questions pour un devis"
            description="Informations à fournir, suite de l'envoi, téléphone ou formulaire, devis gratuit."
          />
          <div className="mt-8">
            <FaqList items={contactPageFaqs} />
          </div>
        </div>

        <SectionDivider title="Nous trouver" className="mt-20">
          <p className="text-muted">Route de Raboud 8, 1680 Romont FR</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <GoogleMapsLink className="text-sm font-medium text-foreground transition-colors hover:text-accent-ink">
              Ouvrir dans Google Maps →
            </GoogleMapsLink>
          </div>
          <div className="mt-8">
            <GoogleMap />
          </div>
        </SectionDivider>
      </PageMain>

      <PageCta />
    </>
  );
}
