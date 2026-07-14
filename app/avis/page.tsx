import { GoogleReviewsList } from "@/components/content/GoogleReviewsList";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd, PageIntro } from "@/components/seo/JsonLd";
import { company } from "@/data/company";
import { googleReviews, googleReviewsProfileUrl } from "@/data/google-reviews";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, googleReviewsLocalBusinessSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Avis clients",
  description:
    "Avis Google de clients Gzimmo Sàrl : nettoyage d'appartements, locaux commerciaux et fin de chantier en Suisse romande. Ponctualité, rigueur et résultat irréprochable.",
  path: "/avis",
  keywords: ["avis Google", "témoignages clients", "nettoyage professionnel Romont"],
});

export default function AvisPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Avis clients", path: "/avis" },
          ]),
          googleReviewsLocalBusinessSchema(googleReviews),
        ]}
      />

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Avis clients" }]} />
        <PageIntro
          badge="Avis clients"
          title="Ce que disent nos clients"
          description={`Des retours authentiques recueillis sur Google — interventions de nettoyage professionnel par ${company.name}, en Suisse romande.`}
        />
      </PageHero>

      <PageMain variant="default">
        <GoogleReviewsList reviews={googleReviews} />
        <p className="mx-auto mt-12 max-w-[760px] text-center text-sm text-muted">
          <a
            href={googleReviewsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-border underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent/40"
          >
            Tous les avis {company.name} sur Google Maps
          </a>
        </p>
      </PageMain>

      <PageCta />
    </>
  );
}
