import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, zonesItemListSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ZoneBands } from "@/components/content/ZoneBands";
import { ContextualLinks } from "@/components/content/ContextualLinks";
import { FaqList, FaqSectionHeader } from "@/components/content/FaqList";
import { HashScroll } from "@/components/ui/HashScroll";
import { CtaPair } from "@/components/ui/ConversionCta";
import {
  zonesCantonBullets,
  zonesCantonParagraph,
  zonesCantonSources,
  zonesCantonTitle,
  zonesIntroParagraphs,
  zonesIntroTitle,
  zonesPageFaqs,
} from "@/data/zones-page";

export const metadata = createMetadata({
  title: "Zones de nettoyage | Fribourg et Vaud",
  description:
    "Communes desservies dans les cantons de Fribourg et de Vaud. Pages locales, règles de fin de bail et devis gratuit. Réponse sous 24 h.",
  absoluteTitle: true,
  path: "/zones",
  keywords: ["zones intervention", "Glâne", "Romont", "nettoyage Fribourg", "nettoyage Vaud"],
});

export default function ZonesPage() {
  return (
    <>
      <HashScroll />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Zones d'intervention", path: "/zones" },
          ]),
          zonesItemListSchema(),
          faqPageSchema(zonesPageFaqs),
        ]}
      />

      <PageHero
        image={{
          src: "/images/hero/hero-zones.jpg",
          alt: "Vue sur Romont et environs",
          position: "center 40%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Zones" }]} />
        <PageIntro
          onDark
          title="Entreprise de nettoyage en Suisse romande"
          description="Nous intervenons dans les cantons de Fribourg et de Vaud. Cherchez votre commune dans la liste ci-dessous."
        />
      </PageHero>

      <PageMain>
        <section aria-labelledby="zones-intro">
          <h2 id="zones-intro" className="font-display text-display-sm text-foreground">
            {zonesIntroTitle}
          </h2>
          {zonesIntroParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-reading leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      </PageMain>

      <ZoneBands />

      <div className="border-y border-border bg-background">
        <div className="mx-auto max-w-[1200px] px-container py-8 md:py-10">
          <CtaPair compact />
        </div>
      </div>

      <PageMain variant="default">
        <section aria-labelledby="zones-canton">
          <h2 id="zones-canton" className="font-display text-display-sm text-foreground">
            {zonesCantonTitle}
          </h2>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-reading leading-relaxed text-muted">
            {zonesCantonBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-reading leading-relaxed text-muted">{zonesCantonParagraph}</p>
          <p className="mt-6 text-sm font-medium text-foreground">Sources</p>
          <ul className="mt-2 space-y-2">
            {zonesCantonSources.map((source) => (
              <li key={source.href}>
                {source.href.startsWith("/") ? (
                  <Link
                    href={source.href}
                    className="inline-flex min-h-11 items-center text-sm text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
                  >
                    {source.label}
                  </Link>
                ) : (
                  <a
                    href={source.href}
                    className="inline-flex min-h-11 items-center text-sm text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16">
          <FaqSectionHeader
            title="Questions sur les zones"
            description="Commune, zones principales, pages villes et règles de fin de bail."
          />
          <div className="mt-8">
            <FaqList items={zonesPageFaqs} />
          </div>
        </div>
      </PageMain>

      <div className="mx-auto w-full max-w-[1200px] px-container pb-10">
        <ContextualLinks
          className="mt-0"
          links={[
            { label: "Services de nettoyage", href: "/services" },
            { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
            { label: "Réalisations", href: "/realisations" },
            { label: "Avis clients", href: "/avis" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
      </div>

      <PageCta />
    </>
  );
}
