import Image from "next/image";
import Link from "next/link";
import type { ServiceLanding } from "@/data/service-landings";
import { getRelatedServices } from "@/data/service-landings";
import { featuredGoogleReview } from "@/data/google-reviews";
import { StarRating } from "@/components/ui/StarRating";
import { getServiceBySlug } from "@/data/services";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { FaqList } from "@/components/content/FaqList";
import { FinDeBailPriceFaq } from "@/components/content/FinDeBailPriceFaq";
import { FinDeBailPriceQuote } from "@/components/content/FinDeBailPriceQuote";
import { InterventionZones } from "@/components/content/InterventionZones";
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

type BandVariant = "default" | "surface" | "paper" | "soft";

function ProcessSection({
  landing,
  variant,
  rhythm = false,
}: {
  landing: ServiceLanding;
  variant: BandVariant;
  rhythm?: boolean;
}) {
  return (
    <PageMain variant={variant} density={rhythm ? "band" : "default"}>
      <ContentCard
        className={
          rhythm ? "max-w-3xl border-border bg-background shadow-none" : undefined
        }
      >
        <h2
          id={landing.process.id}
          className="scroll-mt-28 font-display text-display-sm text-foreground"
        >
          {landing.process.title}
        </h2>
        {landing.process.numbered ? (
          <ol className="mt-6 space-y-4">
            {landing.process.items.map((item, index) => (
              <li key={item} className="flex gap-4 text-sm text-muted leading-relaxed">
                <span className="font-display text-base font-semibold text-accent" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        ) : (
          <ul className="mt-6 space-y-3">
            {landing.process.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
        <ConversionCta
          className="mt-8"
          devisHref={`/contact?service=${landing.slug}`}
          devisLabel={landing.heroCtaLabel}
          preferCall={landing.preferCallCta}
        />
      </ContentCard>
    </PageMain>
  );
}

/** After soft PageHero (near-white), start muted so the first band reads clearly. */
function rhythmVariant(blockIndex: number): "default" | "surface" {
  return blockIndex % 2 === 0 ? "surface" : "default";
}

export function ServiceLandingPage({ landing }: ServiceLandingPageProps) {
  const service = getServiceBySlug(landing.slug);
  const relatedServices = getRelatedServices(landing.relatedServiceSlugs);
  const path = getServicePath(landing.slug);

  if (!service) return null;

  let block = 0;
  const nextVariant = () => rhythmVariant(block++);
  const rhythm = Boolean(landing.visualRhythm);

  const introVariant: BandVariant = rhythm ? "paper" : nextVariant();
  const inclusVariant: BandVariant = rhythm ? "soft" : introVariant;
  const earlyProcessVariant: BandVariant | null = landing.processBeforeAudience
    ? rhythm
      ? "paper"
      : nextVariant()
    : null;
  const audienceVariant: BandVariant = rhythm ? "soft" : nextVariant();
  const offerVariant: BandVariant | null =
    landing.guarantee || landing.showPriceQuote ? (rhythm ? "paper" : nextVariant()) : null;
  const priceVariant: BandVariant | null = landing.priceSection
    ? rhythm
      ? "paper"
      : nextVariant()
    : null;
  const processVariant: BandVariant | null = landing.processBeforeAudience
    ? null
    : rhythm
      ? "paper"
      : nextVariant();
  const whyVariant: BandVariant = rhythm ? "paper" : nextVariant();
  const faqVariant: BandVariant = rhythm ? "soft" : nextVariant();
  const testimonialsVariant: BandVariant | null =
    landing.testimonials.length > 0 ? (rhythm ? "paper" : nextVariant()) : null;
  const closingVariant: BandVariant = rhythm ? "soft" : nextVariant();
  const localWithPrice = Boolean(landing.priceSection && landing.showInterventionZones);
  const bandDensity = rhythm ? "band" : "default";
  const headingClass = "scroll-mt-28 font-display text-display-sm text-foreground";

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, path, { serviceTypes: landing.schemaServiceTypes }),
          faqPageSchema(landing.faqs),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path },
          ]),
        ]}
      />

      <PageHero tone={rhythm ? "dark" : "soft"}>
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
        />
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <Badge className={rhythm ? "text-white/60" : "text-accent/90"}>
                {service.shortTitle}
              </Badge>
              <h1
                className={
                  rhythm
                    ? "mt-5 font-display text-display-lg font-semibold text-white"
                    : "mt-5 font-display text-display-lg font-semibold text-foreground"
                }
              >
                {landing.h1}
              </h1>
              <p
                className={
                  rhythm
                    ? "mt-5 max-w-xl text-lg text-white/75 leading-relaxed"
                    : "mt-5 text-lg text-muted leading-relaxed"
                }
              >
                {landing.subtitle}
              </p>
              <ConversionCta
                className="mt-8"
                devisHref={`/contact?service=${landing.slug}`}
                devisLabel={landing.heroCtaLabel}
                preferCall={landing.preferCallCta}
              />
              <ReassuranceBand className="mt-8" tone={rhythm ? "dark" : "default"} />
            </div>
            <div
              className={
                rhythm
                  ? "relative aspect-[2/1] overflow-hidden rounded-2xl border border-white/15 sm:aspect-[3/2] lg:aspect-[4/3]"
                  : "relative aspect-[3/2] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(30,34,39,0.1)] lg:aspect-[4/3]"
              }
            >
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
              {rhythm ? null : (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent"
                />
              )}
            </div>
          </div>
        </FadeIn>
      </PageHero>

      <PageMain variant={introVariant} density={bandDensity}>
        <FadeIn>
          <p className="max-w-2xl text-muted leading-relaxed">{landing.intro}</p>
        </FadeIn>

        {landing.slug === "nettoyage-fin-de-bail" ? (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {landing.relatedLocalLinks.slice(0, 2).map((item) => (
              <TextLink key={item.href} href={item.href}>
                {item.label}
              </TextLink>
            ))}
          </div>
        ) : null}

        {landing.relatedNote ? (
          <p className="mt-6 max-w-2xl text-sm text-muted leading-relaxed">
            {landing.relatedNote.text}{" "}
            <TextLink href={landing.relatedNote.href}>
              {landing.relatedNote.linkLabel}
            </TextLink>
          </p>
        ) : null}

        {landing.sections?.length ? (
          landing.sectionLayout === "grid" ? (
            <div className="mt-10">
              <h2 className={headingClass}>Dans quelles situations ?</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {landing.sections.map((section) => {
                  const card = (
                    <>
                      <h3 id={section.id} className="scroll-mt-28 font-medium text-foreground">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{section.body}</p>
                      {section.href ? (
                        <span className="mt-3 inline-block text-sm font-medium text-accent">Voir →</span>
                      ) : null}
                    </>
                  );
                  const cardFrame = rhythm
                    ? "h-full rounded-xl border border-border bg-background p-5"
                    : "h-full rounded-xl border border-border/80 bg-white/70 p-5";
                  return (
                    <li key={section.title}>
                      {section.href ? (
                        <Link
                          href={section.href}
                          className={`${cardFrame} block transition-colors duration-200 hover:border-accent/40`}
                        >
                          {card}
                        </Link>
                      ) : (
                        <div className={cardFrame}>{card}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="mt-12 space-y-8">
              {landing.sections.map((section) => (
                <ContentCard key={section.title}>
                  <h2 id={section.id} className={headingClass}>
                    {section.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">{section.body}</p>
                </ContentCard>
              ))}
            </div>
          )
        ) : null}

      </PageMain>

      {landing.inclusionGroups?.length ? (
        <PageMain variant={inclusVariant} density={bandDensity}>
          <h2 id="inclus" className={headingClass}>
            Ce qui est inclus
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {landing.inclusionGroups.map((group, index) => (
              <div
                key={group.title}
                className={
                  index > 0
                    ? "border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8"
                    : undefined
                }
              >
                <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </PageMain>
      ) : null}

      {earlyProcessVariant ? (
        <ProcessSection landing={landing} variant={earlyProcessVariant} rhythm={rhythm} />
      ) : null}

      <PageMain variant={audienceVariant} density={bandDensity}>
        <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <span className="mb-5 block h-px w-10 bg-accent" aria-hidden="true" />
            <h2 id="publics" className={headingClass}>
              {landing.audienceHeading ?? "À qui s'adresse ce service ?"}
            </h2>
          </div>
          <ul className="divide-y divide-border/80 border-t border-border/80 lg:border-t-0">
            {landing.forWho.map((item) => (
              <li
                key={item.profile}
                className="grid gap-2 py-5 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-8 lg:first:pt-0"
              >
                <h3 className="text-sm font-medium text-foreground">{item.profile}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.situation}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageMain>

      {offerVariant ? (
        <PageMain variant={offerVariant} density={bandDensity}>
          {landing.guarantee ? (
            <ContentCard className="border-accent/20 bg-accent-muted/30">
              <h2 className="font-display text-display-sm text-foreground">
                {landing.guarantee.title}
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                {landing.guarantee.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </ContentCard>
          ) : null}

          {landing.showPriceQuote ? (
            <FinDeBailPriceQuote className={landing.guarantee ? "mt-8" : undefined} />
          ) : null}
        </PageMain>
      ) : null}

      {priceVariant && landing.priceSection ? (
        <PageMain variant={priceVariant} density={bandDensity}>
          <ContentCard
            className={
              rhythm ? "max-w-3xl border-border bg-background shadow-none" : undefined
            }
          >
            <h2 id={landing.priceSection.id} className={headingClass}>
              {landing.priceSection.title}
            </h2>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">{landing.priceSection.body}</p>
            <ul className="mt-6 space-y-3">
              {landing.priceSection.factors.map((factor) => (
                <li key={factor} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {factor}
                </li>
              ))}
            </ul>
            <TextLink className="mt-8" href={`/contact?service=${landing.slug}`}>
              Demander un devis gratuit
            </TextLink>
          </ContentCard>

          {localWithPrice && !rhythm ? (
            <>
              <div className="mt-12">
                <h2 id="local" className={headingClass}>
                  Où intervenons-nous ?
                </h2>
                <ul className="mt-5 flex flex-wrap gap-x-1 gap-y-2">
                  {landing.relatedLocalLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-flex min-h-9 items-center rounded-md px-2.5 py-2 text-sm text-muted transition-colors duration-200 hover:bg-surface hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Vevey, Crissier, Montreux et les autres communes sans page propre sont
                  indiquées dans les zones. Le siège est à Romont.
                </p>
              </div>
              <InterventionZones
                className="mt-8 border-t-0 pt-0"
                compact
                servicePhrase="nettoyage après chantier"
              />
            </>
          ) : null}
        </PageMain>
      ) : null}

      {rhythm && localWithPrice ? (
        <PageMain variant="soft" density="band">
          <h2 id="local" className={headingClass}>
            Où intervenons-nous ?
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-1 gap-y-2">
            {landing.relatedLocalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center rounded-md px-2.5 py-2 text-sm text-muted transition-colors duration-200 hover:bg-background hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">
            Vevey, Crissier, Montreux et les autres communes sans page propre sont
            indiquées dans les zones. Le siège est à Romont.
          </p>
          <InterventionZones
            className="mt-8 border-t-0 pt-0"
            compact
            onSoft
            servicePhrase="nettoyage après chantier"
          />
        </PageMain>
      ) : null}

      {processVariant ? (
        <ProcessSection landing={landing} variant={processVariant} rhythm={rhythm} />
      ) : null}

      <PageMain variant={whyVariant} density={bandDensity}>
        <h2 className={headingClass}>
          {landing.whyHeading ?? "Pourquoi choisir Gzimmo ?"}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {landing.whyGzimmo.map((item) => (
            <li
              key={item.title}
              className={
                rhythm
                  ? "rounded-xl border border-border bg-surface p-6"
                  : "rounded-xl border border-border/80 bg-white/70 p-6"
              }
            >
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </PageMain>

      <PageMain variant={faqVariant} density={bandDensity}>
        {landing.useFinDeBailFaq ? (
          <FinDeBailPriceFaq
            devisHref={`/contact?service=${landing.slug}`}
            className="mt-0 border-t-0 pt-0"
          />
        ) : (
          <>
            <Badge className="text-accent/90">FAQ</Badge>
            <h2 className={`mt-4 ${headingClass}`}>
              {landing.faqHeading ?? `Questions fréquentes — ${service.shortTitle.toLowerCase()}`}
            </h2>
            <div className="mt-8">
              <FaqList items={landing.faqs} />
            </div>
            <ConversionCta className="mt-10" devisHref={`/contact?service=${landing.slug}`} />
          </>
        )}
      </PageMain>

      {testimonialsVariant ? (
        <PageMain variant={testimonialsVariant} density={bandDensity}>
          <h2 className={headingClass}>Ce que disent nos clients</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {landing.testimonials.map((item) => (
              <figure
                key={item.author + item.quote.slice(0, 24)}
                className={
                  rhythm
                    ? "rounded-xl border border-border bg-surface p-6"
                    : "rounded-xl border border-border/80 bg-white/70 p-6"
                }
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {featuredGoogleReview.rating ? (
                    <StarRating
                      rating={featuredGoogleReview.rating}
                      className="text-sm tracking-[0.12em]"
                    />
                  ) : null}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 px-2.5 py-1 text-xs font-medium text-foreground">
                    Avis Google
                  </span>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted transition-colors hover:text-accent"
                    >
                      Voir sur Google →
                    </a>
                  ) : null}
                </div>
                <blockquote className="whitespace-pre-line text-sm text-muted leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-foreground">
                  — {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
          {landing.proofLink ? (
            <Link
              href={landing.proofLink.href}
              className={
                rhythm
                  ? "mt-6 block rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/40"
                  : "mt-6 block rounded-xl border border-border/80 bg-white/70 p-5 transition-colors duration-200 hover:border-accent/40"
              }
            >
              <p className="text-sm font-medium text-foreground">{landing.proofLink.label}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{landing.proofLink.detail}</p>
            </Link>
          ) : null}
        </PageMain>
      ) : null}

      <PageMain variant={closingVariant} density={bandDensity}>
        <div className={localWithPrice ? "grid gap-8" : "grid gap-8 lg:grid-cols-2"}>
          <ContentCard className={rhythm ? "border-border bg-background shadow-none" : undefined}>
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
          {localWithPrice ? null : (
            <ContentCard className={rhythm ? "border-border bg-background shadow-none" : undefined}>
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
          )}
        </div>

        {landing.showInterventionZones && !localWithPrice ? (
          <InterventionZones
            className="mt-16 border-t-0 pt-0"
            servicePhrase="nettoyage fin de bail"
          />
        ) : null}

        <ContentCard className={rhythm ? "mt-8 border-border bg-background shadow-none" : "mt-8"}>
          <NapBlock />
        </ContentCard>
      </PageMain>

      <PageCta />
    </>
  );
}
