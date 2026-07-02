import Link from "next/link";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

export function ServiceCardGrid() {
  return (
    <div>
      <FadeIn>
        <Badge className="text-accent/90">Nos prestations</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Des solutions adaptées à chaque besoin immobilier
        </h2>
        <p className="mt-4 max-w-xl text-muted leading-relaxed">
          Fins de bail, chantiers, bureaux, locaux — une expertise dédiée à l&apos;immobilier,
          pas une agence de vente ou de location.
        </p>
      </FadeIn>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.04}>
            <li>
              <Link
                href={getServicePath(service.slug)}
                className="group flex h-full flex-col rounded-xl border border-border/80 bg-white/70 p-6 transition-[border-color,box-shadow,transform] duration-300 hover:border-accent/25 hover:shadow-[0_12px_40px_rgba(65,152,142,0.08)] hover:-translate-y-0.5"
              >
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  En savoir plus →
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>

      <div className="mt-10">
        <TextLink href="/services">Voir toutes nos prestations</TextLink>
      </div>
    </div>
  );
}
