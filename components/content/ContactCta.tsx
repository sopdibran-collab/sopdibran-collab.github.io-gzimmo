import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AccentLine } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCta() {
  const callHref = company.phone
    ? formatPhoneHref(company.phone)
    : "/contact#appeler";

  return (
    <FadeIn>
      <div className="border-t border-border pt-section">
        <AccentLine className="mb-8" />
        <h2 className="max-w-xl font-display text-display-md text-foreground">
          Prêt à retrouver un espace impeccable ?
        </h2>
        <p className="mt-5 max-w-lg text-muted">
          Demandez votre devis gratuit. Nous vous répondons sous 24 heures.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/contact">Demander un devis</Button>
          <Button
            variant="secondary"
            href={callHref}
            external={callHref.startsWith("tel:")}
          >
            {company.phoneDisplay || "Appeler"}
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted">
          <a
            href={`mailto:${company.email}`}
            className="transition-colors hover:text-accent"
          >
            {company.email}
          </a>
        </p>
      </div>
    </FadeIn>
  );
}
