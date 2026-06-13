import Image from "next/image";
import Link from "next/link";
import type { Realisation } from "@/data/realisations";
import { featuredRealisations, realisations } from "@/data/realisations";
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
          <h2 className="font-display text-display-md text-foreground">Nos réalisations</h2>
          <p className="mt-4 max-w-xl text-muted">
            Des interventions concrètes, partout en Suisse romande — toujours avec la même
            exigence de finition.
          </p>
        </FadeIn>
      ) : null}

      <div
        className={
          showHeader
            ? "mt-12 divide-y divide-border border-t border-border"
            : "divide-y divide-border border-t border-border"
        }
      >
        {list.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <RealisationRow item={item} />
          </FadeIn>
        ))}
      </div>

      {showHeader ? (
        <div className="mt-10">
          <TextLink href="/realisations">Voir toutes nos réalisations</TextLink>
        </div>
      ) : null}
    </div>
  );
}

function RealisationRow({ item }: { item: Realisation }) {
  return (
    <article className="grid gap-6 py-8 md:grid-cols-12 md:items-start md:gap-10">
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
          <span>{item.service}</span>
          <span aria-hidden="true">·</span>
          <span>{item.location}</span>
        </div>
        <h3 className="mt-3 font-display text-display-sm text-foreground">{item.title}</h3>
        <p className="mt-3 max-w-prose text-muted">{item.description}</p>
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
