import Image from "next/image";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const trustItems = [
  "Romont (FR)",
  "Réponse sous 24 h",
  "Devis gratuit",
  "Suisse romande",
] as const;

export function HomeHero() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <>
      <section className="relative isolate min-h-[min(88svh,780px)] overflow-hidden bg-inverse">
        <Image
          src="/images/hero/appartement-suisse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#1e2227]/78 via-[#1e2227]/42 to-[#1e2227]/12"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#1e2227]/45 via-transparent to-[#1e2227]/20"
        />

        <div className="relative z-10 mx-auto flex min-h-[min(88svh,780px)] w-full max-w-[1200px] min-w-0 flex-col justify-end px-container pb-14 pt-28 sm:pb-16 lg:pb-20">
          <FadeIn className="min-w-0 max-w-2xl">
            <p className="font-display text-[clamp(1.75rem,8vw,3.5rem)] font-semibold tracking-[-0.03em] text-white">
              {company.name.replace(" Sàrl", "")}
            </p>
            <h1 className="mt-4 max-w-2xl text-balance break-words font-display text-[clamp(1.35rem,5.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
              Nettoyage professionnel pour l&apos;immobilier en Suisse romande
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Fins de bail, régies, chantiers, bureaux — équipe basée à Romont, priorité Fribourg
              et Vaud.
            </p>

            <div className="mt-9 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/contact" className="w-full shadow-none sm:w-auto">
                Demander un devis
              </Button>
              <Button
                href={callHref}
                external
                variant="secondary"
                className="w-full border-white/35 bg-white/10 text-white hover:border-white/55 hover:bg-white/15 sm:w-auto"
              >
                {company.phoneDisplay}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="border-b border-border/80 bg-background">
        <ul
          className="mx-auto grid w-full max-w-[1200px] min-w-0 grid-cols-2 divide-x divide-y divide-border/70 px-container sm:grid-cols-4 sm:divide-y-0"
          aria-label="Engagements Gzimmo"
        >
          {trustItems.map((item) => (
            <li
              key={item}
              className="flex min-w-0 items-center justify-center px-3 py-4 text-center text-sm font-medium tracking-[-0.01em] text-foreground/80 sm:px-4 sm:py-6"
            >
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
