import { company } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ValueCards } from "@/components/content/ValueCards";
import { StatsBand } from "@/components/content/StatsBand";
import { Section } from "@/components/layout/Section";

export const metadata = createMetadata({
  title: "À propos de Gzimmo, nettoyage à Romont",
  description:
    "Gzimmo Sàrl est basée Route de Raboud 8 à Romont. Fribourg, Vaud et Neuchâtel.",
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
    text: "Particuliers, régies et entreprises, depuis le siège de Romont. Cantons de Fribourg, de Vaud et de Neuchâtel.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ])}
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
          description={`${company.name} accompagne particuliers et professionnels dans les cantons de Fribourg, de Vaud et de Neuchâtel. Le siège est à ${company.address.city} (${company.address.region}), Route de Raboud 8.`}
        />
      </PageHero>

      <PageMain>
        <ValueCards items={values} />
      </PageMain>

      <Section variant="inverse">
        <StatsBand />
      </Section>

      <PageCta />
    </>
  );
}
