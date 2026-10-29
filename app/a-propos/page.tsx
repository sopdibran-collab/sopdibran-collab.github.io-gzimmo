import Link from "next/link";
import { company, teamExperienceLabel } from "@/data/company";
import {
  aboutClientsAfter,
  aboutClientsItems,
  aboutClientsTitle,
  aboutIdentityParagraphs,
  aboutIdentityTitle,
  aboutMethodParagraphs,
  aboutMethodTitle,
  aboutPageFaqs,
  aboutServicesLead,
  aboutServicesTitle,
  aboutValuesTitle,
  aboutZonesParagraphs,
  aboutZonesTitle,
} from "@/data/about-page";
import { CtaPair } from "@/components/ui/ConversionCta";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ValueCards } from "@/components/content/ValueCards";
import { StatsBand } from "@/components/content/StatsBand";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { Section } from "@/components/layout/Section";
import { HashScroll } from "@/components/ui/HashScroll";
import { ContextualLinks } from "@/components/content/ContextualLinks";

export const metadata = createMetadata({
  title: "À propos de Gzimmo, nettoyage à Romont",
  description:
    "Gzimmo Sàrl est basée Route de Raboud 8 à Romont. L'équipe cumule plus de 15 ans d'expérience. Fribourg et Vaud.",
  absoluteTitle: true,
  path: "/a-propos",
});

const values = [
  {
    title: "Précision",
    text: "Chaque surface est traitée avec méthode. Pas de raccourci, pas de compromis sur la finition.",
  },
  {
    title: "Discrétion",
    text: "Nous intervenons avec efficacité et respect de vos espaces, horaires et contraintes.",
  },
  {
    title: "Fiabilité",
    text: "Nous travaillons pour des particuliers, des régies et des entreprises dans les cantons de Fribourg et de Vaud.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HashScroll />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos" },
          ]),
          faqPageSchema(aboutPageFaqs),
        ]}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-a-propos.jpg",
          alt: "Matériel de nettoyage professionnel",
          position: "center 40%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        <PageIntro
          onDark
          badge="À propos"
          title="Gzimmo, entreprise de nettoyage à Romont"
          description={`${company.name} accompagne particuliers et professionnels dans les cantons de Fribourg et de Vaud. Basée à ${company.address.city} (${company.address.region}), ${teamExperienceLabel().toLowerCase()}, avec rigueur, discrétion et le souci du détail. Réponse sous 24 h.`}
        />
      </PageHero>

      <PageMain>
        <section aria-labelledby="a-propos-identite">
          <h2 id="a-propos-identite" className="font-display text-display-lg text-foreground">
            {aboutIdentityTitle}
          </h2>
          {aboutIdentityParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </section>
        <ValueCards
          items={values}
          sectionTitle={aboutValuesTitle}
          sectionId="a-propos-facon"
        />
      </PageMain>

      <PageMain variant="default">
        <section aria-labelledby="a-propos-services">
          <h2 id="a-propos-services" className="font-display text-display-lg text-foreground">
            {aboutServicesTitle}
          </h2>
          <p className="mt-4 text-reading leading-relaxed text-muted">{aboutServicesLead}</p>
          <ul className="mt-8 divide-y divide-border/80 border-y border-border/80">
            {services.map((service) => (
              <li key={service.slug} className="py-5">
                <Link
                  href={getServicePath(service.slug)}
                  className="font-medium text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
                >
                  {service.title}
                </Link>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="a-propos-methode">
          <h2 id="a-propos-methode" className="font-display text-display-lg text-foreground">
            {aboutMethodTitle}
          </h2>
          {aboutMethodParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <CtaPair compact className="mt-8" />
        </section>

        <section className="mt-16" aria-labelledby="a-propos-clients">
          <h2 id="a-propos-clients" className="font-display text-display-lg text-foreground">
            {aboutClientsTitle}
          </h2>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-reading leading-relaxed text-muted">
            {aboutClientsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-reading leading-relaxed text-muted">{aboutClientsAfter}</p>
        </section>

        <section className="mt-16" aria-labelledby="a-propos-zones">
          <h2 id="a-propos-zones" className="font-display text-display-lg text-foreground">
            {aboutZonesTitle}
          </h2>
          {aboutZonesParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </section>

        <ContextualLinks
          links={[
            { label: "Services", href: "/services" },
            { label: "Zones d'intervention", href: "/zones" },
            { label: "Réalisations", href: "/realisations" },
            { label: "Avis clients", href: "/avis" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </PageMain>

      <Section variant="inverse">
        <StatsBand />
      </Section>

      <PageMain>
        <FaqSectionHeader
          title="Questions sur Gzimmo"
          description="Identité, déroulement d'une intervention et clients."
        />
        <div className="mt-8">
          <FaqList items={aboutPageFaqs} />
        </div>
      </PageMain>

      <PageCta />
    </>
  );
}
