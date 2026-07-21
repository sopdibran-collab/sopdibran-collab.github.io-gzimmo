import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type ContactCtaProps = {
  className?: string;
};

/** Bandeau CTA pleine largeur — pas de cadre inset dans une section. */
export function ContactCta({ className }: ContactCtaProps) {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section
      className={cn(
        "border-y border-border/70 bg-accent-muted/55",
        className,
      )}
    >
      <FadeIn className="mx-auto flex max-w-[1200px] flex-col gap-8 px-container py-10 md:flex-row md:items-center md:justify-between md:gap-16 md:py-12">
        <div className="max-w-xl">
          <h2 className="font-display text-display-sm text-foreground md:text-display-md">
            Parlons de votre prochain chantier
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Devis gratuit et réponse sous 24 h.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          <a
            href={callHref}
            className="text-base font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-base font-medium text-foreground transition-colors duration-200 hover:text-accent"
          >
            {company.email}
          </a>
          <Button href="/contact" className="shadow-none sm:ml-2">
            Demander un devis
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
