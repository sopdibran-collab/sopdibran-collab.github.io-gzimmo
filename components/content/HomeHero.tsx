import Image from "next/image";
import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";

export function HomeHero() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section
      id="home-hero"
      className="relative isolate min-h-[min(100svh,860px)] overflow-hidden bg-inverse"
    >
      <Image
        src="/images/realisations/fin-de-bail.jpg"
        alt="Fin de bail réalisée par Gzimmo — appartement remis aux standards d’une régie à Fribourg"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[center_45%] animate-[hero-zoom_18s_ease-out_forwards] motion-reduce:animate-none motion-reduce:scale-100"
      />
      {/* Teal-tinted dark veil — inverse + accent (brand), not neutral gray */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-inverse/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-accent/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-inverse/75 via-accent/20 to-inverse/30"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,860px)] w-full max-w-[1200px] min-w-0 flex-col justify-end px-container pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
        <div className="min-w-0 max-w-3xl animate-fade-in-up motion-reduce:animate-none">
          <p className="font-display text-[clamp(2.75rem,12vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-white">
            Gzimmo
          </p>
          <h1 className="mt-5 max-w-xl text-balance font-display text-[clamp(1.25rem,3.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-white/95">
            Nettoyage fin de bail et après chantier — on remet le logement comme la régie l&apos;attend.
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
    </section>
  );
}
