import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { localPageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  locationPageSchema,
} from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LocalAreaLinks, LocalSeoBody } from "@/components/seo/LocalSeoContent";
import { TextLink } from "@/components/ui/TextLink";

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
  return localPageMetadata(location);
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  const relatedLocations = locations
    .filter((l) => l.slug !== location.slug && l.canton === location.canton)
    .slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          locationPageSchema(location),
          faqPageSchema(location.faqs),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Zones", path: "/zones" },
            { name: location.city, path: `/seo/${location.slug}` },
          ]),
        ]}
      />

      <Section>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Zones", href: "/zones" },
            { label: location.city },
          ]}
        />
        <PageIntro badge={location.cantonName} title={location.title} description={location.intro} />

        <LocalSeoBody location={location} />

        <div className="mt-16 border-t border-border pt-16">
          <h2 className="font-display text-display-sm text-foreground">
            Tous nos services
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <TextLink href={`/services/${service.slug}`} showArrow={false}>
                  {service.title} — {location.city}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>

        {relatedLocations.length > 0 ? (
          <div className="mt-16 border-t border-border pt-16">
            <LocalAreaLinks
              locations={relatedLocations}
              title={`Autres communes en ${location.cantonName}`}
            />
          </div>
        ) : null}
      </Section>
    </>
  );
}
