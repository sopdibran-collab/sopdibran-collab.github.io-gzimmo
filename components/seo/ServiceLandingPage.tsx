import Image from "next/image";
import Link from "next/link";
import type { ServiceLanding } from "@/data/service-landings";
import { getRelatedServices } from "@/data/service-landings";
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
import { getServicePath } from "@/lib/service-paths";

type ServiceLandingPageProps = {
  landing: ServiceLanding;
};

export function ServiceLandingPage({ landing }: ServiceLandingPageProps) {
  const service = getServiceBySlug(landing.slug);
  const relatedServices = getRelatedServices(landing.relatedServiceSlugs);
  const path = getServicePath(landing.slug);

  if (!service) return null;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, path),
          faqPageSchema(landing.faqs),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path },
          ]),
        ]}
      />

      <PageHero>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
        />
        <FadeIn>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="max-w-xl">
              <Badge className="text-accent/90">{service.shortTitle}</Badge>
              <h1 className="mt-5 font-display text-display-lg font-semibold text-foreground">
                {landing.h1}
              </h1>
              <p className="mt-5 text-lg text-muted leading-relaxed">{landing.subtitle}</p>
              <ConversionCta className="mt-8" devisHref={`/contact?service=${landing.slug}`} />
              <ReassuranceBand className="mt-8" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(30,34,39,0.1)] lg:aspect-[4/3]">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                className="h-full w-full object-cover"
                style={{ objectPosition: service.image.objectPosition }}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"
              />
            </div>
          </div>
        </FadeIn>
      </PageHero>

      <PageMain>
        <FadeIn>
          <p className="max-w-3xl text-muted leading-relaxed">{landing.intro}</p>
        </FadeIn>

        <ContentCard className="mt-12">
          <h2 className="font-display text-display-sm text-foreground">À qui s&apos;adresse ce service ?</h2>
          <ul className="mt-8 divide-y divide-border/80">
            {landing.forWho.map((item) => (
              <li key={item.profile} className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <span className="text-sm font-medium text-foreground">{item.profile}</span>
                <span className="text-sm text-muted leading-relaxed">{item.situation}</span>
              </li>
            ))}
          </ul>
        </ContentCard>

        {landing.guarantee ? (
          <ContentCard className="mt-8 border-accent/20 bg-accent-muted/30">
            <h2 className="font-display text-display-sm text-foreground">{landing.guarantee.title}</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              {landing.guarantee.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </ContentCard>
        ) : null}

        <ContentCard className="mt-8">
          <h2 className="font-display text-display-sm text-foreground">{landing.process.title}</h2>
          <ul className="mt-6 space-y-3">
            {landing.process.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <ConversionCta className="mt-8" devisHref={`/contact?service=${landing.slug}`} />
        </ContentCard>

        <div className="mt-12">
          <h2 className="font-display text-display-sm text-foreground">Pourquoi choisir Gzimmo ?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {landing.whyGzimmo.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border/80 bg-white/70 p-6"
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-border/80 pt-16">
          <Badge className="text-accent/90">FAQ</Badge>
          <h2 className="mt-4 font-display text-display-sm text-foreground">
            Questions fréquentes — {service.shortTitle.toLowerCase()}
          </h2>
          <div className="mt-8">
            <FaqList items={landing.faqs} />
          </div>
          <ConversionCta className="mt-10" devisHref={`/contact?service=${landing.slug}`} />
        </div>

        {landing.testimonials.length > 0 ? (
          <div className="mt-16 border-t border-border/80 pt-16">
            <h2 className="font-display text-display-sm text-foreground">Ce que disent nos clients</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {landing.testimonials.map((item) => (
                <figure
                  key={item.author}
                  className="rounded-xl border border-border/80 bg-white/70 p-6"
                >
                  <blockquote className="text-muted leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-foreground">
                    — {item.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <ContentCard>
            <h2 className="font-display text-lg font-semibold text-foreground">Nos autres prestations</h2>
            <ul className="mt-6 space-y-3">
              {relatedServices.map((item) => (
                <li key={item.href}>
                  <TextLink href={item.href} showArrow={false}>
                    {item.title}
                  </TextLink>
                </li>
              ))}
            </ul>
          </ContentCard>
          <ContentCard>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Nous intervenons aussi près de chez vous
            </h2>
            <ul className="mt-6 space-y-3">
              {landing.relatedLocalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ContentCard>
        </div>

        <ContentCard className="mt-8">
          <NapBlock />
        </ContentCard>
      </PageMain>

      <PageCta />
    </>
  );
}
