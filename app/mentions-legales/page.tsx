import { company, formatAddress } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain } from "@/components/layout/PageLayout";
import { LegalSection } from "@/components/content/LegalSection";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContentCard } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${company.url} — ${company.legalName}, nettoyage professionnel à Romont (FR).`,
  path: "/mentions-legales",
  keywords: ["mentions légales", "Gzimmo", "Romont"],
});

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ])}
      />

      <PageHero>
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
        />
        <PageIntro badge="Légal" title="Mentions légales" />
      </PageHero>

      <PageMain variant="surface">
        <ContentCard className="max-w-3xl">
          <LegalSection title="Éditeur du site">
            <p>
              <strong className="text-foreground">{company.legalName}</strong>
              <br />
              {formatAddress()}
              <br />
              Suisse
            </p>
            <p>
              E-mail :{" "}
              <a href={`mailto:${company.email}`} className="text-foreground hover:text-accent">
                {company.email}
              </a>
              <br />
              Téléphone :{" "}
              <a href={`tel:${company.phone}`} className="text-foreground hover:text-accent">
                {company.phoneDisplay}
              </a>
            </p>
            <p>Forme juridique : société à responsabilité limitée (Sàrl)</p>
          </LegalSection>

          <LegalSection title="Responsable du contenu">
            <p>
              Le responsable du contenu de ce site est {company.legalName}, joignable à
              l&apos;adresse {company.email}.
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Ce site est hébergé par :
              <br />
              <strong className="text-foreground">Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                vercel.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des éléments composant ce site (textes, visuels, structure,
              logo, marque) est protégé par le droit de la propriété intellectuelle. Toute
              reproduction, représentation ou exploitation sans autorisation écrite préalable
              de {company.legalName} est interdite.
            </p>
          </LegalSection>

          <LegalSection title="Limitation de responsabilité">
            <p>
              {company.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des
              informations publiées sur ce site. Toutefois, elle ne saurait garantir
              l&apos;absence d&apos;erreurs ou d&apos;omissions, ni être tenue responsable
              des dommages résultant de l&apos;utilisation du site ou de liens externes.
            </p>
          </LegalSection>

          <LegalSection title="Liens externes">
            <p>
              Ce site peut contenir des liens vers des sites tiers (notamment Google Maps).
              {company.legalName} n&apos;exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu.
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>
              Le présent site et les présentes mentions légales sont soumis au droit suisse.
              Le for juridique est celui du canton de Fribourg, sous réserve d&apos;un for
              impératif.
            </p>
          </LegalSection>
        </ContentCard>
      </PageMain>
    </>
  );
}
