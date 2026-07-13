import { company, formatAddress } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain } from "@/components/layout/PageLayout";
import { LegalSection } from "@/components/content/LegalSection";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité de ${company.legalName} — protection des données personnelles (nLPD).`,
  path: "/politique-confidentialite",
  keywords: ["confidentialité", "données personnelles", "nLPD", "Gzimmo"],
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/politique-confidentialite" },
        ])}
      />

      <PageHero>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Politique de confidentialité" },
          ]}
        />
        <PageIntro
          badge="Légal"
          title="Politique de confidentialité"
          description="Comment nous traitons vos données personnelles, conformément à la législation suisse (nLPD)."
        />
      </PageHero>

      <PageMain variant="surface">
        <ContentCard className="max-w-3xl">
          <LegalSection title="Responsable du traitement">
            <p>
              <strong className="text-foreground">{company.legalName}</strong>
              <br />
              {formatAddress()}
              <br />
              <a href={`mailto:${company.email}`} className="text-foreground hover:text-accent">
                {company.email}
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Données collectées">
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Formulaire de contact</strong> : prénom,
                nom, e-mail, téléphone, localité, type de prestation et message.
              </li>
              <li>
                <strong className="text-foreground">Données techniques</strong> : adresse IP
                anonymisée, type de navigateur, pages visitées, via notre outil d&apos;analyse
                (Plausible Analytics).
              </li>
              <li>
                <strong className="text-foreground">Communication directe</strong> : données
                transmises par e-mail ou téléphone.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="Finalités du traitement">
            <ul className="list-disc space-y-2 pl-5">
              <li>Répondre à vos demandes de devis et de contact</li>
              <li>Assurer la relation commerciale et la planification des interventions</li>
              <li>Améliorer le site et comprendre son utilisation (statistiques anonymisées)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </LegalSection>

          <LegalSection title="Base légale">
            <p>
              Le traitement repose sur l&apos;exécution de mesures précontractuelles (demande de
              devis), notre intérêt légitime (amélioration du service, sécurité du site) et,
              le cas échéant, votre consentement.
            </p>
          </LegalSection>

          <LegalSection title="Durée de conservation">
            <p>
              Les données de contact sont conservées pendant la durée nécessaire au traitement
              de votre demande et à la relation commerciale, puis archivées conformément aux
              délais légaux applicables.
            </p>
          </LegalSection>

          <LegalSection title="Destinataires et transferts">
            <p>
              Vos données sont traitées par {company.legalName} et nos prestataires techniques
              strictement nécessaires :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Vercel Inc.</strong> — hébergement du site
              </li>
              <li>
                <strong className="text-foreground">Plausible Insights OÜ</strong> — statistiques
                de visite (données anonymisées, sans cookies de suivi)
              </li>
            </ul>
            <p>
              Certains prestataires peuvent être situés hors de Suisse. Des garanties appropriées
              sont mises en place par ces fournisseurs conformément à la nLPD.
            </p>
          </LegalSection>

          <LegalSection title="Vos droits">
            <p>Conformément à la nLPD, vous disposez des droits suivants :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit de suppression, dans les limites légales</li>
              <li>Droit de vous opposer à un traitement fondé sur l&apos;intérêt légitime</li>
            </ul>
            <p>
              Pour exercer vos droits :{" "}
              <a href={`mailto:${company.email}`} className="text-foreground hover:text-accent">
                {company.email}
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Cookies et analytics">
            <p>
              Ce site utilise Plausible Analytics, un outil respectueux de la vie privée qui ne
              dépose pas de cookies de suivi et ne collecte pas de données personnelles
              identifiables. Aucun bandeau cookie n&apos;est requis dans cette configuration.
            </p>
          </LegalSection>

          <LegalSection title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre l&apos;accès non autorisé, la perte ou la
              divulgation.
            </p>
          </LegalSection>

          <LegalSection title="Modifications">
            <p>
              Cette politique peut être mise à jour. La version en vigueur est toujours
              disponible sur cette page. Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-CH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              .
            </p>
          </LegalSection>
        </ContentCard>
      </PageMain>
    </>
  );
}
