import Link from "next/link";
import type { Location } from "@/data/locations";
import { FaqList } from "@/components/content/FaqList";
import { ContactCta } from "@/components/content/ContactCta";
import { FadeIn } from "@/components/ui/FadeIn";
import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { GoogleMap, GoogleMapsLink } from "@/components/seo/GoogleMap";

export function LocalSeoBody({ location }: { location: Location }) {
  return (
    <>
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {location.sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.05}>
              <section className={index > 0 ? "mt-10" : undefined}>
                <h2 className="font-display text-display-sm text-foreground">{section.title}</h2>
                <p className="mt-4 text-muted">{section.body}</p>
              </section>
            </FadeIn>
          ))}
        </div>

        <aside className="lg:col-span-5">
          <FadeIn delay={0.1}>
            <div className="border border-border bg-surface p-6">
              <p className="text-sm font-medium text-foreground">Coordonnées</p>
              <address className="mt-4 space-y-2 text-sm not-italic text-muted">
                <p className="font-medium text-foreground">{company.legalName}</p>
                {location.isHeadquarters ? (
                  <GoogleMapsLink className="hover:text-accent">{formatAddress()}</GoogleMapsLink>
                ) : (
                  <p>Siège : {formatAddress()}</p>
                )}
                <p>
                  <a href={`mailto:${company.email}`} className="hover:text-accent">
                    {company.email}
                  </a>
                </p>
                <p>
                  <a href={formatPhoneHref(company.phone)} className="hover:text-accent">
                    {company.phoneDisplay}
                  </a>
                </p>
              </address>
              {location.nearbyCommunes.length > 0 ? (
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm font-medium text-foreground">Communes desservies</p>
                  <p className="mt-2 text-sm text-muted">{location.nearbyCommunes.join(" · ")}</p>
                </div>
              ) : null}
            </div>
            {location.isHeadquarters ? (
              <div className="mt-4">
                <GoogleMap className="aspect-[4/3] md:aspect-square" />
              </div>
            ) : null}
          </FadeIn>
        </aside>
      </div>

      {location.servicesHighlight.length > 0 ? (
        <div className="mt-16">
          <h2 className="font-display text-display-sm text-foreground">
            Prestations à {location.city}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {location.servicesHighlight.map((service) => (
              <li
                key={service}
                className="border border-border px-4 py-2 text-sm text-foreground"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {location.faqs.length > 0 ? (
        <div className="mt-16">
          <h2 className="font-display text-display-sm text-foreground">
            Questions fréquentes — {location.city}
          </h2>
          <div className="mt-8">
            <FaqList items={location.faqs} />
          </div>
        </div>
      ) : null}

      <div className="mt-16">
        <ContactCta />
      </div>
    </>
  );
}

export function LocalAreaLinks({
  locations: locs,
  title = "Zones d'intervention",
}: {
  locations: Location[];
  title?: string;
}) {
  return (
    <nav aria-label={title}>
      <p className="mb-4 text-sm font-medium text-foreground">{title}</p>
      <ul className="columns-2 gap-x-8 text-sm md:columns-3">
        {locs.map((loc) => (
          <li key={loc.slug} className="mb-2 break-inside-avoid">
            <Link
              href={`/seo/${loc.slug}`}
              className="text-muted transition-colors hover:text-accent"
            >
              {loc.city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
