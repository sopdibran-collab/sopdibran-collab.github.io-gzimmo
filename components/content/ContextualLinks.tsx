import Link from "next/link";

type ContextualLink = {
  href: string;
  label: string;
};

/** Liens de contexte entre services, villes, réalisations et avis. */
export function ContextualLinks({ links }: { links: ContextualLink[] }) {
  return (
    <nav aria-label="Pages liées" className="mt-10 border-t border-border/80 pt-10">
      <p className="text-sm font-medium text-foreground">Pages liées</p>
      <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors duration-200 hover:text-accent-ink"
            >
              {link.label}
              <span aria-hidden="true"> →</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
