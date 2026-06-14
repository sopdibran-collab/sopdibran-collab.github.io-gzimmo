"use client";

import Link from "next/link";
import { useState } from "react";
import { services, type Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { TextLink } from "@/components/ui/TextLink";

function ServiceImage({
  service,
  priority,
  className,
  imageClassName,
  fadeClassName,
}: {
  service: Service;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  fadeClassName?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.image.src}
        alt=""
        width={service.image.width}
        height={service.image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        aria-hidden="true"
        className={cn("h-full w-full object-cover", imageClassName)}
        style={{ objectPosition: service.image.objectPosition }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-[70%]",
          "bg-gradient-to-r from-surface via-surface/55 to-transparent",
          fadeClassName,
        )}
      />
    </div>
  );
}

function ServiceRow({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `service-panel-${service.slug}`;

  return (
    <li className="list-none">
      <article
        className={cn(
          "border-b border-border last:border-b-0",
          isOpen && "md:grid md:grid-cols-[minmax(0,1fr)_minmax(16rem,42%)] md:items-start md:gap-x-12",
        )}
      >
        <div className={cn(!isOpen && "md:contents")}>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            className={cn(
              "group relative w-full cursor-pointer overflow-hidden text-left",
              "py-6 transition-colors duration-300",
              !isOpen && "md:col-span-2 md:min-h-[4.5rem]",
            )}
          >
            {/* Desktop : bandeau image avec fondu (visible au survol, ou si ouvert en transition) */}
            {!isOpen ? (
              <div className="pointer-events-none absolute inset-y-0 right-0 left-[32%] hidden md:block">
                <ServiceImage
                  service={service}
                  priority={index === 0}
                  imageClassName="scale-[1.04]"
                />
              </div>
            ) : null}

            <div className="relative z-10 flex items-center justify-between gap-6">
              <div className="flex min-w-0 items-baseline gap-5 md:gap-10">
                <span
                  className={cn(
                    "font-display text-sm font-medium tabular-nums transition-colors duration-300",
                    isOpen ? "text-accent" : "text-muted/70",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={cn(
                    "font-medium leading-snug transition-colors duration-300",
                    !isOpen && "group-hover:text-accent",
                  )}
                >
                  {service.shortTitle}
                </h3>
              </div>

              <span
                aria-hidden="true"
                className={cn(
                  "shrink-0 text-muted transition-all duration-300 md:hidden",
                  "group-hover:translate-x-0.5",
                  isOpen && "opacity-0",
                )}
              >
                →
              </span>
            </div>

            {/* Mobile : bandeau toujours visible sous le titre */}
            {!isOpen ? (
              <div className="relative z-10 mt-4 h-11 w-full md:hidden">
                <ServiceImage service={service} priority={index === 0} />
              </div>
            ) : null}
          </button>

          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "pb-6 md:pb-8 md:pl-[3.25rem] lg:pl-[4.5rem]",
                  "transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                  isOpen ? "translate-y-0" : "-translate-y-2",
                )}
              >
                <p className="max-w-xl text-muted leading-relaxed">{service.intro}</p>
                <div className="mt-5">
                  <TextLink href={`/services/${service.slug}`}>En savoir plus</TextLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ouvert : image complète à droite */}
        <div
          className={cn(
            "overflow-hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            isOpen
              ? "mt-4 opacity-100 md:mt-0 md:translate-y-0"
              : "pointer-events-none h-0 opacity-0 md:h-auto md:-translate-y-1",
          )}
        >
          {isOpen ? (
            <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 scale-100"
                style={{ objectPosition: service.image.objectPosition }}
              />
            </div>
          ) : null}
        </div>

        <Link href={`/services/${service.slug}`} className="sr-only" tabIndex={-1}>
          {service.title}
        </Link>
      </article>
    </li>
  );
}

export function ServiceAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <ol className="mt-12 border-t border-border">
      {services.map((service, index) => (
        <ServiceRow
          key={service.slug}
          service={service}
          index={index}
          isOpen={openSlug === service.slug}
          onToggle={() => setOpenSlug((current) => (current === service.slug ? null : service.slug))}
        />
      ))}
    </ol>
  );
}
