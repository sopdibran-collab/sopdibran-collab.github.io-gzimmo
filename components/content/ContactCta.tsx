import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/ui/ContactIcons";
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
      <FadeIn className="mx-auto flex w-full max-w-[1200px] min-w-0 flex-col gap-8 px-container py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-12">
        <div className="min-w-0 max-w-[25rem]">
          <h2 className="font-display text-display-sm text-foreground md:text-display-md">
            Parlons de votre prochain chantier
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            Devis gratuit et réponse sous 24 h.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center lg:max-w-[31rem] lg:justify-end">
          <Button
            href={callHref}
            external
            variant="secondary"
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className="h-11 w-full justify-start border-accent/15 bg-background px-3.5 text-sm shadow-none hover:border-accent/40 hover:bg-background hover:text-accent-hover sm:h-10 sm:w-auto"
          >
            <PhoneIcon className="size-4 shrink-0" />
            {company.phoneDisplay}
          </Button>
          <Button
            href={`mailto:${company.email}`}
            external
            variant="secondary"
            aria-label={`Écrire à ${company.email}`}
            className="h-11 w-full justify-start border-accent/15 bg-background px-3.5 text-sm shadow-none hover:border-accent/40 hover:bg-background hover:text-accent-hover sm:h-10 sm:w-auto"
          >
            <MailIcon className="size-4 shrink-0" />
            {company.email}
          </Button>
          <Button
            href="/contact"
            className="h-11 w-full px-4 shadow-none sm:h-10 sm:w-auto"
          >
            Demander un devis
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
