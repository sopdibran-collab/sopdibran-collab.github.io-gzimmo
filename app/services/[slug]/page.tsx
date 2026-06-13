import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContactCta } from "@/components/content/ContactCta";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <Section>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
        <PageIntro badge="Service" title={service.title} description={service.intro} />

        <FadeIn>
          <div className="mt-16 max-w-2xl">
            <h2 className="font-display text-display-sm text-foreground">
              Ce que comprend notre prestation
            </h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-4 before:shrink-0 before:text-accent before:content-['—']"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div className="mt-16">
          <ContactCta />
        </div>
      </Section>
    </>
  );
}
