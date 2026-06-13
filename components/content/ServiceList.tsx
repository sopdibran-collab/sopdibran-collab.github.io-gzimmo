import Link from "next/link";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServiceList() {
  return (
    <div>
      <Badge>Nos services</Badge>
      <h2 className="mt-4 font-display text-display-md text-foreground">
        Ce que nous prenons en charge
      </h2>

      <ol className="mt-12 divide-y divide-border border-t border-border">
        {services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.04}>
            <li>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-baseline justify-between gap-6 py-6 transition-colors"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-display text-sm font-medium text-muted/70 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-foreground transition-colors group-hover:text-accent">
                    {service.shortTitle}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ol>

      <div className="mt-10">
        <TextLink href="/services">Voir tous les services</TextLink>
      </div>
    </div>
  );
}
