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
  fadeFrom = "from-surface",
}: {
  service: Service;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  fadeClassName?: string;
  fadeFrom?: string;
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
        className={cn(
          "h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          imageClassName,
        )}
        style={{ objectPosition: service.image.objectPosition }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-[72%]",
          "bg-gradient-to-r to-transparent transition-all duration-500",
          fadeFrom,
          "via-surface/45",
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
          "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isOpen
            ? "my-3 rounded-xl bg-white/90 px-4 py-1 shadow-[0_12px_48px_rgba(30,34,39,0.08)] ring-1 ring-border/70 md:grid md:grid-cols-[minmax(0,1fr)_minmax(16rem,42%)] md:items-start md:gap-x-12 md:px-6"
            : "border-b border-border/70 last:border-b-0",
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
              "py-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
              !isOpen && "md:col-span-2 md:min-h-[4.75rem]",
              !isOpen && "hover:bg-white/40",
              isOpen && "pb-4",
            )}
          >
            {!isOpen ? (
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 right-0 hidden md:block",
                  "left-[36%] transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                  "group-hover:left-[20%]",
                )}
              >
                <ServiceImage
                  service={service}
                  priority={index === 0}
                  fadeFrom="from-accent-muted"
                  imageClassName="scale-[1.06] opacity-80 group-hover:scale-100 group-hover:opacity-100"
                  fadeClassName="group-hover:via-accent-muted/25 group-hover:w-[58%]"
                />
              </div>
            ) : null}

            {!isOpen ? (
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-y-0 left-0 w-0 bg-accent/10 transition-all duration-500",
                  "group-hover:w-1",
                )}
              />
            ) : null}

            <div className="relative z-10 flex items-center justify-between gap-6">
              <div className="flex min-w-0 items-baseline gap-5 transition-transform duration-500 group-hover:translate-x-1 md:gap-10">
                <span
                  className={cn(
                    "font-display text-sm font-medium tabular-nums transition-colors duration-300",
                    isOpen ? "text-accent" : "text-muted/70 group-hover:text-accent",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={cn(
                    "text-[1.05rem] font-medium leading-snug transition-colors duration-300 md:text-lg",
                    !isOpen && "group-hover:text-accent",
                    isOpen && "text-foreground",
                  )}
                >
                  {service.shortTitle}
                </h3>
              </div>

              <span
                aria-hidden="true"
                className={cn(
                  "shrink-0 text-muted transition-all duration-300",
                  "md:opacity-0 md:group-hover:translate-x-1 md:group-hover:opacity-100",
                  isOpen && "opacity-0",
                )}
              >
                →
              </span>
            </div>

            {!isOpen ? (
              <div className="relative z-10 mt-4 h-12 w-full overflow-hidden rounded-md md:hidden">
                <ServiceImage
                  service={service}
                  priority={index === 0}
                  fadeFrom="from-accent-muted"
                  imageClassName="scale-105"
                />
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
                  "border-l-2 border-accent/50 pb-6 pl-5 md:pb-8 md:pl-[3.25rem] lg:pl-[4.5rem]",
                  isOpen && "animate-service-reveal",
                )}
              >
                <p className="max-w-xl text-base text-muted leading-relaxed">{service.intro}</p>
                <div className="mt-6">
                  <TextLink href={`/services/${service.slug}`}>En savoir plus</TextLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            isOpen
              ? "mt-4 opacity-100 md:mt-0 md:translate-y-0"
              : "pointer-events-none h-0 opacity-0 md:h-auto md:-translate-y-2",
          )}
        >
          {isOpen ? (
            <div
              className={cn(
                "relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(30,34,39,0.12)] md:aspect-[4/3]",
                "animate-service-reveal",
              )}
              style={{ animationDelay: "80ms" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: service.image.objectPosition }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent opacity-60"
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
    <ol className="mt-12 border-t border-border/80">
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
