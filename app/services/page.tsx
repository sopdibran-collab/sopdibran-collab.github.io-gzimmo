import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ServiceCardGrid } from "@/components/content/ServiceCardGrid";
import { ValueCards } from "@/components/content/ValueCards";
import { ConversionCta } from "@/components/ui/ConversionCta";
import { GarantieRemiseBail } from "@/components/ui/GarantieRemiseBail";
import { TextLink } from "@/components/ui/TextLink";

export const metadata = createMetadata({
  title: "Services de nettoyage",
  description:
    "Services de nettoyage Gzimmo : fin de bail, après chantier, entretien de locaux, bureaux et vitres — Fribourg, Vaud, Neuchâtel. Devis sous 24 h.",
  path: "/services",
});

const prioritySlugs = [
  "nettoyage-fin-de-bail",
  "nettoyage-apres-chantier",
  "entretien-locaux",
] as const;

const reassurance = [
  {
    title: "Devis sous 24 h",
    text: "Réponse claire et chiffrée — sans engagement, avant toute intervention.",
  },
  {
    title: "Zones FR / VD / NE",
    text: "Basés à Romont : Fribourg en priorité, puis Vaud et Neuchâtel selon le chantier.",
  },
  {
    title: "Garantie régie",
    text: "Si la régie tique sur une fin de bail, on revient sans frais.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        image={{
          src: "/images/services/nettoyage-fin-de-bail.webp",
          alt: "Nettoyage de fin de bail prêt pour l'état des lieux",
          position: "center 45%",
        }}
      >
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
        <PageIntro
          badge="Services"
          title="Des prestations précises, adaptées à chaque espace"
          description="Chaque intervention est planifiée avec soin — du nettoyage régulier aux remises en état ponctuelles."
        >
          <div className="flex flex-col gap-4 sm:gap-5">
            <ConversionCta devisLabel="Demander un devis" />
            <TextLink href="/nettoyage-fin-de-bail">
              Priorité : nettoyage fin de bail
            </TextLink>
          </div>
        </PageIntro>
      </PageHero>

      <GarantieRemiseBail />

      <PageMain variant="surface">
        <ServiceCardGrid
          slugs={[...prioritySlugs]}
          badge="Prioritaires"
          title="Les demandes les plus fréquentes"
          description="Fin de bail, après chantier et entretien de locaux — les trois prestations qui structurent notre activité."
        />

        <ServiceCardGrid
          className="mt-16 border-t border-border pt-16"
          badge="Catalogue"
          title="Toutes les prestations"
          description="Chaque service mène à une page dédiée : périmètre, bénéfices et demande de devis."
        />

        <ValueCards className="mt-16 border-t border-border pt-16" items={reassurance} />
      </PageMain>

      <PageCta />
    </>
  );
}
