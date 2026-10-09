import Image from "next/image";
import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";

/**
 * Full-bleed home hero: soft photo + dark gray veil + white copy.
 * Height: shared `--hero-photo-min-height` / `.min-h-hero-photo` with image PageHero.
 */
export function HomeHero() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section
      id="home-hero"
      className="relative isolate min-h-hero-photo overflow-hidden bg-inverse"
    >
      <Image
        src="/images/realisations/fin-de-bail.jpg"
        alt="Remise en état fin de bail, nettoyage fin de bail à Fribourg"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#1e2227]/85 to-[#1e2227]/15"
      />

      <div className="relative z-10 mx-auto flex min-h-hero-photo w-full max-w-[1200px] min-w-0 flex-col justify-end px-container pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
        <div className="min-w-0 max-w-3xl animate-fade-in-up motion-reduce:animate-none">
          <h1 className="max-w-3xl text-balance font-display text-[clamp(1.85rem,6.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
            Nettoyage fin de bail et après chantier. On remet le logement comme la régie l&apos;attend.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Gzimmo Sàrl, Route de Raboud 8 à Romont. Toute la Suisse romande. Devis sous 24 h.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" className="w-full sm:w-auto">
              Demander un devis gratuit
            </Button>
            <Button
              href={callHref}
              external
              variant="secondary"
              className="w-full border-white/75 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Appeler · {company.phoneDisplay}
            </Button>
          </div>
        </div>

        <p className="mt-12 max-w-lg text-[13px] leading-relaxed text-white/75 sm:mt-16">
          <GoogleMapsLink className="inline-flex min-h-11 items-center transition-colors hover:text-white">
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
