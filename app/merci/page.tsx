import { company, formatAddress } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { formatPhoneHref } from "@/lib/utils";
import { PageHero, PageMain } from "@/components/layout/PageLayout";
import { PageIntro } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Demande préparée",
  description:
    "Votre client mail va s'ouvrir pour transmettre la demande à Gzimmo Sàrl. Réponse sous 24 heures — 076 214 23 42 · info@gzimmo.ch",
  path: "/merci",
  noindex: true,
});

export default function MerciPage() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <>
      <PageHero>
        <PageIntro
          title="Merci — votre message est prêt à partir"
          description={`Votre client mail va s'ouvrir pour envoyer la demande à ${company.email}. Dès réception, nous vous répondons sous 24 heures. Pour une urgence, appelez-nous.`}
        />
      </PageHero>

      <PageMain variant="surface">
        <ContentCard className="max-w-xl">
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="font-medium text-foreground">Téléphone</dt>
              <dd className="mt-1">
                <a href={callHref} className="text-muted transition-colors duration-200 hover:text-accent">
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${company.email}`}
                  className="text-muted transition-colors duration-200 hover:text-accent"
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

          <p className="mt-8 text-sm text-muted">
            Le message ne s&apos;est pas ouvert ?{" "}
            <a
              href={`mailto:${company.email}`}
              className="font-medium text-foreground transition-colors duration-200 hover:text-accent"
            >
              Écrivez-nous directement
            </a>
          </p>
        </ContentCard>
      </PageMain>
    </>
  );
}
