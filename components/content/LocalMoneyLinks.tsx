import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { TextLink } from "@/components/ui/TextLink";

const moneyLinks = [
  {
    label: "Entreprise de nettoyage à Romont",
    href: "/seo/nettoyage-romont",
    note: "Siège",
  },
  {
    label: "Fin de bail à Romont",
    href: "/nettoyage-fin-de-bail-romont",
  },
  {
    label: "Fin de bail à Fribourg",
    href: "/nettoyage-fin-de-bail-fribourg",
  },
] as const;

export function LocalMoneyLinks() {
  return (
    <div className="mt-10 border-t border-border/80 pt-10">
      <p className="text-sm font-medium text-foreground">Recherches fréquentes</p>
      <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
        {moneyLinks.map((link, index) => (
          <FadeIn key={link.href} delay={index * 0.03}>
            <li>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
                {"note" in link && link.note ? (
                  <span className="ml-1.5 text-xs text-accent">({link.note})</span>
                ) : null}
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
      <div className="mt-6">
        <TextLink href="/nettoyage-fin-de-bail">Tout sur le nettoyage fin de bail</TextLink>
      </div>
    </div>
  );
}
