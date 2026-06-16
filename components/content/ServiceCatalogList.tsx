import Link from "next/link";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

export function ServiceCatalogList() {
  return (
    <ol className="mt-16 border-t border-border/80">
      {services.map((service, index) => (
        <FadeIn key={service.slug} delay={index * 0.04}>
          <li className="list-none border-b border-border/70 last:border-b-0">
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "group relative flex min-h-[4.75rem] flex-col gap-4 overflow-hidden py-8",
                "transition-colors duration-500 hover:bg-white/50 md:flex-row md:items-center md:gap-10",
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-y-0 right-0 hidden md:block",
                  "left-[36%] transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                  "group-hover:left-[20%]",
                )}
              >
                <div className="relative h-full w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image.src}
                    alt=""
                    width={service.image.width}
                    height={service.image.height}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full scale-[1.06] object-cover opacity-80 transition-all duration-[600ms] group-hover:scale-100 group-hover:opacity-100"
                    style={{ objectPosition: service.image.objectPosition }}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-surface via-surface/45 to-transparent transition-all duration-500 group-hover:via-accent-muted/25" />
                </div>
              </div>

              <span className="relative z-10 font-display text-sm font-medium tabular-nums text-muted/70 transition-colors group-hover:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 min-w-0 flex-1">
                <h2 className="font-display text-display-sm text-foreground transition-colors group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="mt-2 max-w-xl text-muted leading-relaxed">{service.description}</p>
              </div>

              <div className="relative z-10 mt-2 h-12 w-full overflow-hidden rounded-md md:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image.src}
                  alt=""
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: service.image.objectPosition }}
                />
              </div>

              <span
                aria-hidden="true"
                className="relative z-10 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

export function ServiceCatalogFooter() {
  return (
    <div className="mt-10">
      <TextLink href="/contact">Demander un devis pour votre projet</TextLink>
    </div>
  );
}
