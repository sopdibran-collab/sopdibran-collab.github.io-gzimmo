import { GoogleReviewsList } from "@/components/content/GoogleReviewsList";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd, PageIntro } from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { googleReviews, googleReviewsProfileUrl } from "@/data/google-reviews";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { ContextualLinks } from "@/components/content/ContextualLinks";

export const metadata = createMetadata({
  title: "Avis clients | nettoyage Gzimmo à Romont",
  description:
    "Avis Google publiés sur la fiche Gzimmo Sàrl, entreprise de nettoyage à Romont. Fribourg et Vaud.",
  absoluteTitle: true,
  path: "/avis",
  keywords: ["avis Google", "témoignages clients", "nettoyage professionnel Romont"],
});

export default function AvisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Avis clients", path: "/avis" },
        ])}
      />

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Avis clients" }]} />
        <PageIntro
          badge="Avis clients"
          title="Avis clients sur le nettoyage Gzimmo"
          description={`Textes publiés sur la fiche Google de ${company.name}, entreprise de nettoyage à Romont.`}
        />
      </PageHero>

      <PageMain variant="surface">
        <GoogleReviewsList reviews={googleReviews} />
        <p className="mx-auto mt-12 max-w-[760px] text-center text-sm text-muted">
          <a
            href={googleReviewsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-border underline-offset-[3px] transition-colors hover:text-accent-ink hover:decoration-accent/40"
          >
            Tous les avis {company.name} sur Google Maps
          </a>
        </p>
        <ContextualLinks
          links={[
            { label: "Réalisations", href: "/realisations" },
            { label: "Nettoyage fin de bail", href: "/nettoyage-fin-de-bail" },
            { label: "Nettoyage à Romont", href: "/nettoyage-romont" },
          ]}
        />
      </PageMain>

      <PageCta />
    </>
  );
}
