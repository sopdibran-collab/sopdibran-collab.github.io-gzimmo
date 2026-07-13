import type { GeoServiceLanding } from "@/data/geo-service-landings";
import { getServiceBySlug } from "@/data/services";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { FaqList } from "@/components/content/FaqList";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { ConversionCta } from "@/components/ui/ConversionCta";
import { FadeIn } from "@/components/ui/FadeIn";
import { NapBlock, ReassuranceBand } from "@/components/ui/ReassuranceBand";
import { TextLink } from "@/components/ui/TextLink";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { getGeoServicePath } from "@/data/geo-service-landings";
import { getServicePath } from "@/lib/service-paths";

type GeoServiceLandingPageProps = {
  landing: GeoServiceLanding;
};

export function GeoServiceLandingPage({ landing }: GeoServiceLandingPageProps) {
  const service = getServiceBySlug(landing.serviceSlug);
  const path = getGeoServicePath(landing.path);
  const servicePath = getServicePath(landing.serviceSlug);

  if (!service) return null;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, servicePath),
          faqPageSchema(landing.faqs),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: service.shortTitle, path: servicePath },
            { name: `${service.shortTitle} — ${landing.city}`, path },
          ]),
        ]}
      />

      <PageHero>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: service.shortTitle, href: servicePath },
            { label: landing.city },
          ]}
        />
        <FadeIn>
          <div className="max-w-2xl">
            <Badge className="text-accent/90">
              {service.shortTitle} · {landing.city}
            </Badge>
            <h1 className="mt-5 font-display text-display-lg font-semibold text-foreground">
              {landing.h1}
            </h1>
            <p className="mt-5 text-lg text-muted leading-relaxed">{landing.subtitle}</p>
            <ConversionCta
              className="mt-8"
              devisHref={`/contact?service=${landing.serviceSlug}&ville=${landing.city}`}
            />
            <ReassuranceBand className="mt-8" />
          </div>
        </FadeIn>
      </PageHero>

      <PageMain variant="surface">
        <FadeIn>
          <p className="max-w-3xl text-muted leading-relaxed">{landing.intro}</p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {landing.sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.04}>
              <ContentCard>
                <h2 className="font-display text-display-sm text-foreground">{section.title}</h2>
                <p className="mt-4 text-muted leading-relaxed">{section.body}</p>
              </ContentCard>
            </FadeIn>
          ))}
        </div>

        <ContentCard className="mt-8">
          <h2 className="font-display text-display-sm text-foreground">
            Tout savoir sur notre prestation fin de bail
          </h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Checklist complète, garantie régie et processus détaillé sur notre page dédiée.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            <TextLink href={servicePath}>Nettoyage fin de bail — Suisse romande</TextLink>
            <TextLink href={landing.localPageHref}>{landing.localPageLabel}</TextLink>
          </div>
        </ContentCard>

        <div className="mt-16 border-t border-border/80 pt-16">
          <Badge className="text-accent/90">FAQ</Badge>
          <h2 className="mt-4 font-display text-display-sm text-foreground">
            Questions fréquentes — fin de bail à {landing.city}
          </h2>
          <div className="mt-8">
            <FaqList items={landing.faqs} />
          </div>
          <ConversionCta
            className="mt-10"
            devisHref={`/contact?service=${landing.serviceSlug}&ville=${landing.city}`}
          />
        </div>

        <ContentCard className="mt-12">
          <NapBlock />
        </ContentCard>
      </PageMain>

      <PageCta />
    </>
  );
}
