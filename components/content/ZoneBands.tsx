import Link from "next/link";
import { zoneBands, type ZonePlace } from "@/data/intervention-zones";

function orderedPlaces(places: ZonePlace[]) {
  return [...places].sort((a, b) => Number(Boolean(b.href)) - Number(Boolean(a.href)));
}

/** Bandes verticales : bassin à gauche, communes à droite. Sur mobile, le bassin est au-dessus. */
export function ZoneBands() {
  return (
    <div>
      {zoneBands.map((band, index) => (
        <section
          key={band.id}
          className={index % 2 === 0 ? "bg-background" : "bg-surface"}
          aria-labelledby={`zone-${band.id}`}
        >
          <div className="mx-auto grid max-w-[1200px] gap-4 px-container py-8 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start md:gap-12 md:py-10">
            <div>
              <h2
                id={`zone-${band.id}`}
                className="font-display text-xl font-semibold text-foreground"
              >
                {band.timeLabel}
              </h2>
              {band.detail ? <p className="mt-2 text-sm text-muted">{band.detail}</p> : null}
            </div>
            <div>
              {band.note ? (
                <p className="max-w-prose text-sm leading-relaxed text-muted">{band.note}</p>
              ) : null}
              <ul
                className={
                  band.note
                    ? "mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }
              >
                {orderedPlaces(band.places).map((place) => (
                  <li key={place.name}>
                    {place.href ? (
                      <Link
                        href={place.href}
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-ink underline decoration-accent-ink/70 underline-offset-4 transition-colors duration-200 hover:text-accent-hover"
                      >
                        {place.name}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-11 items-center text-sm text-foreground">
                        {place.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
