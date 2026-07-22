import Image from "next/image";
import Link from "next/link";
import type { Realisation } from "@/data/realisations";
import { featuredRealisations, realisations } from "@/data/realisations";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { FadeIn } from "@/components/ui/FadeIn";

type RealisationGridProps = {
  showHeader?: boolean;
  items?: Realisation[];
  limit?: number;
};

export function RealisationGrid({
  showHeader = true,
  items = showHeader ? featuredRealisations : realisations,
  limit,
}: RealisationGridProps) {
  const list = limit ? items.slice(0, limit) : items;

  return (
    <div>
      {showHeader ? (
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <Badge>Réalisations</Badge>
              <h2 className="mt-4 font-display text-display-md text-foreground">
                Des interventions concrètes, des résultats mesurables
              </h2>
            </div>
            <TextLink href="/realisations">Voir plus de réalisations</TextLink>
          </div>
        </FadeIn>
      ) : null}

      <div
        className={
          showHeader
            ? "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            : "flex flex-col gap-8"
        }
      >
        {list.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            {showHeader ? <RealisationCard item={item} /> : <RealisationRow item={item} />}
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function RealisationCard({ item }: { item: Realisation }) {
  return (
    <article className="group flex h-full flex-col">
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-[opacity] duration-300 group-hover:opacity-95"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col border-b border-border/80 pt-5 pb-6">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span>{item.location}</span>
          <span aria-hidden="true">·</span>
          <span>{item.service}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{item.result}</p>
        <Link
          href="/contact"
          className="mt-4 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
        >
          Demander un devis similaire
        </Link>
      </div>
    </article>
  );
}

function RealisationRow({ item }: { item: Realisation }) {
  return (
    <article className="grid gap-6 border-b border-border/80 pb-10 last:border-0 md:grid-cols-12 md:items-start md:gap-10">
      {item.image ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-surface md:col-span-5">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      ) : null}

      <div className={item.image ? "md:col-span-7" : "md:col-span-12"}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-muted">
          <span>{item.clientType}</span>
          <span aria-hidden="true">·</span>
          <span>{item.location}</span>
          <span aria-hidden="true">·</span>
          <span>{item.service}</span>
        </div>
        <h3 className="mt-3 font-display text-display-sm text-foreground">{item.title}</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-medium text-foreground">Problème</dt>
            <dd className="mt-1 text-muted">{item.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Résultat</dt>
            <dd className="mt-1 text-muted">{item.result}</dd>
          </div>
        </dl>
        <Link
          href="/contact"
          className="mt-5 inline-block text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Demander un devis similaire
        </Link>
      </div>
    </article>
  );
}
