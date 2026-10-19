import Link from "next/link";
import { publishedCities } from "@/data/published-cities";
import { cn } from "@/lib/utils";

type CityInterventionLineProps = {
  className?: string;
  /** Current city page path — never linked. */
  excludeHref?: string;
  /** City and zone pages omit the siège so « Romont » does not appear. */
  hideRomont?: boolean;
};

export function CityInterventionLine({
  className,
  excludeHref,
  hideRomont = false,
}: CityInterventionLineProps) {
  const links = publishedCities.filter((city) => {
    if (city.href === excludeHref) return false;
    if (hideRomont && city.href === "/nettoyage-romont") return false;
    return true;
  });

  if (links.length === 0) return null;

  return (
    <p className={cn("text-[15px] leading-relaxed text-muted", className)}>
      Nous intervenons notamment à :{" "}
      {links.map((city, index) => (
        <span key={city.href}>
          {index > 0 ? (
            <span aria-hidden="true"> · </span>
          ) : null}
          <Link
            href={city.href}
            className="underline decoration-muted/70 underline-offset-4 transition-colors duration-150 ease-out hover:text-accent-ink"
          >
            {city.lineAnchor}
          </Link>
        </span>
      ))}
    </p>
  );
}
