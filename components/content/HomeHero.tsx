import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { HeroPhotoBackdrop } from "@/components/layout/HeroPhotoBackdrop";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";

/**
 * Full-bleed home hero: décor photo + specified veil + white copy.
 * Height: shared `--hero-photo-min-height` / `.min-h-hero-photo` with image PageHero.
 */
export function HomeHero() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section
      id="home-hero"
      className="relative isolate min-h-hero-photo overflow-hidden bg-inverse"
    >
      <HeroPhotoBackdrop
        src="/images/realisations/fin-de-bail.jpg"
        alt="Remise en état fin de bail, nettoyage fin de bail à Fribourg"
        position="center 45%"
      />

      <div className="relative z-10 mx-auto flex min-h-hero-photo w-full max-w-[1200px] min-w-0 flex-col justify-end px-container pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
        <div className="min-w-0 max-w-4xl animate-fade-in-up motion-reduce:animate-none">
          <h1 className="max-w-[32ch] text-balance font-display text-hero font-semibold tracking-[-0.03em] text-white">
            Entreprise de nettoyage à Fribourg et dans le canton de Vaud
          </h1>
          <p className="mt-5 max-w-[60ch] text-lead text-white">
            Basés à Romont, nous intervenons dans toute la Suisse romande.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" data-analytics="devis" className="w-full sm:w-auto">
              Demander un devis gratuit
            </Button>
            <Button
              href={callHref}
              external
              variant="secondary"
              className="w-full border-white/75 bg-transparent text-white sm:w-auto"
            >
              Appeler · {company.phoneDisplay}
            </Button>
          </div>
        </div>

        <p className="mt-12 max-w-lg text-[13px] leading-relaxed text-white sm:mt-16">
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
