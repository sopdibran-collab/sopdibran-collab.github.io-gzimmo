import Link from "next/link";
import { homepageZones } from "@/data/homepage-zones";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

export function HomeZoneGrid() {
  return (
    <div>
      <FadeIn>
        <Badge className="text-accent/90">Zones d&apos;intervention</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Nous intervenons dans toute la Suisse romande
        </h2>
        <p className="mt-4 max-w-xl text-muted leading-relaxed">
          Depuis notre siège à Romont (FR), nos équipes couvrent en priorité le canton de Fribourg
          et le canton de Vaud, puis la Suisse romande.
        </p>
      </FadeIn>

      <ul className="mt-10 grid gap-0 border-t border-border/80 sm:grid-cols-2 lg:grid-cols-3">
        {homepageZones.map((zone, index) => (
          <FadeIn key={zone.city} delay={index * 0.03}>
            <li className="border-b border-border/80">
              <Link
                href={zone.href}
                className="group flex items-center justify-between px-1 py-4 transition-colors duration-200 hover:text-accent"
              >
                <span>
                  <span className="font-medium text-foreground transition-colors group-hover:text-accent">
                    {zone.label}
                  </span>
                  {"note" in zone && zone.note ? (
                    <span className="ml-2 text-xs text-accent">{zone.note}</span>
                  ) : null}
                </span>
                <span className="text-muted transition-colors group-hover:text-accent" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>

      <div className="mt-10">
        <TextLink href="/zones">Toutes nos zones</TextLink>
      </div>
    </div>
  );
}
