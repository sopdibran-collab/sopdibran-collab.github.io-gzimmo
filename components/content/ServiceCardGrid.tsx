import Image from "next/image";
import Link from "next/link";
import { services, type Service } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type ServiceCardGridProps = {
  /** Filter / reorder by slug. Defaults to full catalog order. */
  slugs?: string[];
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
  /** Hide the section header (badge / title / description). */
  hideHeader?: boolean;
};

function resolveServices(slugs?: string[]): Service[] {
  if (!slugs?.length) return services;
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}

export function ServiceCardGrid({
  slugs,
  badge,
  title,
  description,
  className,
  hideHeader = false,
}: ServiceCardGridProps) {
  const list = resolveServices(slugs);
  const cols =
    list.length <= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <div className={className}>
      {!hideHeader && (badge || title || description) ? (
        <FadeIn>
          {badge ? <Badge className="text-accent/90">{badge}</Badge> : null}
          {title ? (
            <h2
              className={cn(
                "font-display text-display-md text-foreground",
                badge ? "mt-4" : undefined,
              )}
            >
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 max-w-xl text-muted leading-relaxed">{description}</p>
          ) : null}
        </FadeIn>
      ) : null}

      <ul
        className={cn(
          "grid gap-4",
          cols,
          !hideHeader && (badge || title || description) ? "mt-10" : undefined,
        )}
      >
        {list.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.04}>
            <li className="h-full">
              <Link
                href={getServicePath(service.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/85 shadow-[0_8px_32px_rgba(30,34,39,0.05)] transition-[border-color,box-shadow] duration-200 hover:border-accent/25"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-surface">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
                    style={{ objectPosition: service.image.objectPosition }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-accent">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-accent">
                    En savoir plus
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
