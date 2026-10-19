import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";
import { TextLink } from "@/components/ui/TextLink";

const homePrestationSlugs = [
  "nettoyage-fin-de-bail",
  "conciergerie",
  "nettoyage-apres-chantier",
  "nettoyage-bureaux",
  "nettoyage-appartements",
  "nettoyage-vitres",
] as const;

const homePrestations = homePrestationSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function HomePrestationsGrid() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <h2 className="font-display text-display-md text-foreground">
            Fin de bail, après chantier et entretien
          </h2>
        </div>
        <p className="max-w-sm text-muted leading-relaxed lg:col-span-5 lg:justify-self-end lg:text-right">
          Basés à Romont, réponse sous 24 h dans les cantons de Fribourg et de Vaud.
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homePrestations.map((service) => (
          <li key={service.slug} className="min-w-0">
            <Link
              href={getServicePath(service.slug)}
              className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-border bg-background transition-colors duration-150 ease-out hover:border-accent/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: service.image.objectPosition }}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.02em] text-foreground">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Voir le service
                  <span
                    aria-hidden="true"
                    className="hover-slide-arrow inline-block transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <TextLink href="/services">Voir le détail des services</TextLink>
      </div>
    </div>
  );
}
