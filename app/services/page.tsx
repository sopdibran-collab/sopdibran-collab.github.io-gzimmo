import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { TextLink } from "@/components/ui/TextLink";
import { ContactCta } from "@/components/content/ContactCta";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = createMetadata({
  title: "Services de nettoyage",
  description:
    "Découvrez les services de nettoyage professionnel Gzimmo : entretien de locaux, appartements, bureaux, fin de bail, après chantier et vitres en Suisse romande.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
        <PageIntro
          badge="Services"
          title="Des prestations précises, adaptées à chaque espace"
          description="Chaque intervention est planifiée avec soin — du nettoyage régulier aux remises en état ponctuelles."
        />

        <div className="mt-16 divide-y divide-border border-t border-border">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <article className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                <p className="font-display text-sm text-muted md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-7">
                  <h2 className="font-display text-display-sm text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted">{service.description}</p>
                </div>
                <div className="md:col-span-4 md:flex md:justify-end md:self-center">
                  <TextLink href={`/services/${service.slug}`}>En savoir plus</TextLink>
                </div>
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
