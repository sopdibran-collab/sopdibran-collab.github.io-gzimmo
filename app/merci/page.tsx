import { company, formatAddress } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { formatPhoneHref } from "@/lib/utils";
import { PageHero, PageMain } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Devis de nettoyage reçu | Gzimmo",
  description:
    "Gzimmo a reçu votre demande de devis. Réponse sous 24 heures, sans frais de déplacement. Urgence : 076 214 23 42, info@gzimmo.ch.",
  absoluteTitle: true,
  path: "/merci",
  noindex: true,
});

export default function MerciPage() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
          { name: "Demande reçue", path: "/merci" },
        ])}
      />
      <PageHero>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Contact", href: "/contact" },
            { label: "Demande reçue" },
          ]}
        />
        <PageIntro
          title="Demande de devis de nettoyage reçue"
          description={`Nous vous répondons sous 24 heures à l'adresse indiquée. Sans frais de déplacement. Pour une urgence, appelez le ${company.phoneDisplay}.`}
        />
      </PageHero>

      <PageMain variant="surface">
        <ContentCard className="max-w-xl">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="font-medium text-foreground">Téléphone</dt>
              <dd className="mt-1">
                <a href={callHref} className="text-muted transition-colors duration-200 hover:text-accent-ink">
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${company.email}`}
                  className="text-muted transition-colors duration-200 hover:text-accent-ink"
                >
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Adresse</dt>
              <dd className="mt-1 text-muted">{formatAddress()}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={callHref} external>
              Appeler {company.phoneDisplay}
            </Button>
            <Button href="/" variant="secondary">
              Retour à l&apos;accueil
            </Button>
          </div>
        </ContentCard>
      </PageMain>
    </>
  );
}
