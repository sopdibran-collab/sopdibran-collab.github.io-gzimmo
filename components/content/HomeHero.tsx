import Image from "next/image";
import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";

/**
 * Split home hero: inverse text column | sharp photo.
 * No full-bleed veil — photo stays crisp and visible.
 */
export function HomeHero() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section
      id="home-hero"
      className="relative isolate overflow-hidden bg-inverse text-white"
    >
      <div className="mx-auto grid min-h-[min(100svh,860px)] w-full max-w-[1400px] lg:grid-cols-2">
        <div className="relative z-10 flex min-w-0 flex-col justify-end px-container pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pr-12">
          <div className="min-w-0 max-w-xl animate-fade-in-up motion-reduce:animate-none">
            <p className="font-display text-[clamp(2.75rem,12vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-white">
              Gzimmo
            </p>
            <h1 className="mt-5 max-w-xl text-balance font-display text-[clamp(1.25rem,3.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-white/95">
              Nettoyage fin de bail et après chantier — on remet le logement comme la régie
              l&apos;attend.
            </h1>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
              Gzimmo Sàrl, Route de Raboud 8 à Romont. Fribourg, Vaud, Neuchâtel — Valais jusqu&apos;à
              Martigny. Devis sous 24 h.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <Button
                href="/contact"
                className="w-full bg-white text-foreground shadow-none hover:bg-white/90 sm:w-auto"
              >
                Demander un devis
              </Button>
              <a
                href={callHref}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>

          <p className="mt-12 max-w-lg text-[11px] leading-relaxed text-white/45 sm:mt-16">
            <GoogleMapsLink className="transition-colors hover:text-white/70">
              {formatAddress()}
            </GoogleMapsLink>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {company.areaServed}
          </p>
        </div>

        <div className="relative min-h-[min(42vw,280px)] overflow-hidden sm:min-h-[320px] lg:min-h-full">
          <Image
            src="/images/realisations/fin-de-bail.jpg"
            alt="Fin de bail réalisée par Gzimmo — appartement remis aux standards d’une régie à Fribourg"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_45%]"
          />
        </div>
      </div>
    </section>
  );
}
