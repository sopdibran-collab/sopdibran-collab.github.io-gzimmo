import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { TextLink } from "@/components/ui/TextLink";
import { ContactCta } from "@/components/content/ContactCta";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return createMetadata({
    title: location.title,
    description: location.description,
    path: `/seo/${location.slug}`,
  });
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: location.city, path: `/seo/${location.slug}` },
          ]),
        ]}
      />

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: location.city }]} />
        <PageIntro badge={location.city} title={location.title} description={location.intro} />

        <div className="mt-16 max-w-2xl space-y-6 text-muted">
          <p>
            Vous recherchez une entreprise de nettoyage professionnel à {location.city} ?
            Gzimmo intervient avec la même exigence qu&apos;à Romont : travail minutieux,
            produits de qualité et devis gratuit sous 24 heures.
          </p>
          <p>
            Que ce soit pour l&apos;entretien régulier de bureaux, un nettoyage de fin de bail
            ou une remise en état après chantier, notre équipe s&apos;adapte à vos besoins et
            à votre planning.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-display-sm text-foreground">
            Nos prestations à {location.city}
          </h2>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <TextLink href={`/services/${service.slug}`} showArrow={false}>
                  {service.title}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
