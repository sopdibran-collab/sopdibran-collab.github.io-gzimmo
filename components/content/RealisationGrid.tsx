import Image from "next/image";
import Link from "next/link";
import type { Realisation } from "@/data/realisations";
import { featuredRealisations, realisations } from "@/data/realisations";
import { TextLink } from "@/components/ui/TextLink";

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

  if (!showHeader) {
    return (
      <div className="flex flex-col gap-8">
        {list.map((item) => (
          <RealisationRow key={item.id} item={item} />
        ))}
      </div>
    );
  }

  const [featured, ...rest] = list;
  const sideItems = rest.slice(0, 2);

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <h2 className="font-display text-display-md text-foreground lg:col-span-8">
          Du terrain, pas des slides
        </h2>
        <div className="lg:col-span-4 lg:justify-self-end">
          <TextLink href="/realisations">Toutes les réalisations</TextLink>
        </div>
      </div>

      {featured ? (
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <RealisationFeatured item={featured} />
          </div>
          <div className="flex flex-col justify-between gap-10 lg:col-span-4">
            {sideItems.map((item) => (
              <RealisationSide key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function realisationAlt(item: Realisation) {
  return `${item.title} — ${item.service} à ${item.location}`;
}

function RealisationFeatured({ item }: { item: Realisation }) {
  return (
    <article className="group">
      {item.image ? (
        <div className="relative aspect-[16/11] overflow-hidden bg-surface sm:aspect-[16/10]">
          <Image
            src={item.image}
            alt={realisationAlt(item)}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        </div>
      ) : null}
      <div className="pt-6">
        <p className="text-sm text-muted">
          {item.location}
          <span className="mx-2 text-border" aria-hidden="true">
            /
          </span>
          {item.service}
        </p>
        <h3 className="mt-2 max-w-xl font-display text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{item.result}</p>
        <Link
          href="/contact"
          className="mt-5 inline-block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
        >
          Même type d&apos;intervention →
        </Link>
      </div>
    </article>
  );
}

function RealisationSide({ item }: { item: Realisation }) {
  return (
    <article className="group">
      {item.image ? (
        <div className="relative aspect-[5/3] overflow-hidden bg-surface">
          <Image
            src={item.image}
            alt={realisationAlt(item)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 28vw"
          />
        </div>
      ) : null}
      <div className="pt-4">
        <p className="text-xs text-muted">
          {item.location}
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          {item.service}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-semibold tracking-[-0.02em] text-foreground">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{item.result}</p>
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
            alt={realisationAlt(item)}
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
