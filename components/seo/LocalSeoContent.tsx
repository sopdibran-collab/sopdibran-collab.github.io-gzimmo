import Link from "next/link";
import type { Location, SourceLink } from "@/data/locations";
import { getLocationPath } from "@/lib/location-paths";
import { FaqList } from "@/components/content/FaqList";
import { RomontFinDeBailRealisation } from "@/components/content/RomontFinDeBailRealisation";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { GoogleMap, GoogleMapsLink } from "@/components/seo/GoogleMap";

function buildingFigure(body: string) {
  return body.match(/59,8 %/)?.[0] ?? body.match(/82 321/)?.[0] ?? null;
}

function SourceList({ sources }: { sources: SourceLink[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {sources.map((source) => (
        <li key={source.href}>
          {source.href.startsWith("/") ? (
            <Link
              href={source.href}
              className="inline-flex min-h-11 items-center text-sm text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
            >
              {source.label}
            </Link>
          ) : (
            <a
              href={source.href}
              className="inline-flex min-h-11 items-center text-sm text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
              rel="noopener noreferrer"
              target="_blank"
            >
              {source.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export function LocalSeoBody({ location }: { location: Location }) {
  const figure = location.building ? buildingFigure(location.building.body) : null;

  return (
    <>
      <div className="mx-auto max-w-prose">
        <section aria-labelledby="communes">
          <h2 id="communes" className="font-display text-display-sm text-foreground">
            Communes du bassin
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {location.communeGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {group.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 border border-accent p-6" aria-labelledby="regles">
          <h2 id="regles" className="font-display text-lg font-semibold text-foreground">
            {location.rules.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{location.rules.body}</p>
          <SourceList sources={location.rules.sources} />
          <h3 className="mt-6 font-display text-base font-semibold text-foreground">
            {location.remoteHandover.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted">{location.remoteHandover.body}</p>
        </section>

        {location.building ? (
          <section className="mt-10" aria-labelledby="bati">
            <h2 id="bati" className="font-display text-display-sm text-foreground">
              Un chiffre de bâti
            </h2>
            {figure ? (
              <p className="mt-4 font-display text-display-lg font-semibold leading-none text-accent-ink">
                {figure}
              </p>
            ) : null}
            <p className="mt-3 text-reading leading-relaxed text-muted">{location.building.body}</p>
            <SourceList sources={location.building.sources} />
          </section>
        ) : null}

        <section
          className="mt-10"
          aria-labelledby="exemple"
          id={location.slug === "nettoyage-romont" ? "realisation-romont" : undefined}
        >
          <h2 id="exemple" className="font-display text-display-sm text-foreground">
            Exemple fait à Romont
          </h2>
          {location.example.body ? (
            <p className="mt-4 text-reading leading-relaxed text-muted">{location.example.body}</p>
          ) : null}
          {location.slug === "nettoyage-romont" ? (
            <RomontFinDeBailRealisation heading={false} />
          ) : (
            <SourceList sources={location.example.sources} />
          )}
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-prose border-t border-border pt-10">
        <ContentCard>
          <Badge className="text-accent-ink">Contact</Badge>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted">
            <p className="font-medium text-foreground">{company.legalName}</p>
            {location.isHeadquarters ? (
              <GoogleMapsLink className="inline-flex min-h-11 items-center hover:text-accent-ink">
                {formatAddress()}
              </GoogleMapsLink>
            ) : (
              <p>Siège : {formatAddress()}</p>
            )}
            <p>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-11 items-center hover:text-accent-ink"
              >
                {company.email}
              </a>
            </p>
            <p>
              <a
                href={formatPhoneHref(company.phone)}
                className="inline-flex min-h-11 items-center hover:text-accent-ink"
              >
                {company.phoneDisplay}
              </a>
            </p>
          </address>
        </ContentCard>
        {location.isHeadquarters ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <GoogleMap className="aspect-[4/3] border-0 md:aspect-square" />
          </div>
        ) : null}
      </div>

      {location.priorityLinks && location.priorityLinks.length > 0 ? (
        <div className="mx-auto mt-10 max-w-prose">
          <p className="text-sm font-medium text-foreground">Pages utiles</p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-y-3">
            {location.priorityLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {location.faqs.length > 0 ? (
        <div className="mx-auto mt-16 max-w-prose border-t border-border pt-16">
          <Badge className="text-accent-ink">FAQ</Badge>
          <h2 className="mt-4 font-display text-display-sm text-foreground">
            Questions — {location.city}
          </h2>
          <div className="mt-8">
            <FaqList items={location.faqs} />
          </div>
        </div>
      ) : null}
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
      <h2 className="font-display text-display-sm text-foreground">{title}</h2>
      <ul className="mt-6 columns-2 gap-x-8 text-sm md:columns-3">
        {locs.map((loc) => (
          <li key={loc.slug} className="mb-2 break-inside-avoid">
            <Link
              href={getLocationPath(loc.slug)}
              className="text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
            >
              {loc.city}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
