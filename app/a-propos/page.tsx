import { company } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContactCta } from "@/components/content/ContactCta";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Gzimmo Sàrl : plus de 15 ans d'expérience en nettoyage professionnel, basée à Romont (FR), active dans toute la Suisse romande.",
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
    text: "Plus de 15 ans d'expérience auprès de particuliers, régies et entreprises en Suisse romande.",
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

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        <PageIntro
          badge="À propos"
          title="La maîtrise d'un espace parfaitement entretenu"
          description={`${company.name} accompagne particuliers et professionnels en Suisse romande depuis plus de ${company.experienceYears} ans. Basée à ${company.address.city} (${company.address.region}), notre équipe intervient avec rigueur, discrétion et le souci du détail.`}
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.08}>
              <article>
                <h2 className="font-display text-display-sm text-foreground">{value.title}</h2>
                <p className="mt-4 text-muted">{value.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
