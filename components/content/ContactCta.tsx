import { AccentLine } from "@/components/ui/Badge";
import { ContactActions } from "@/components/ui/ContactActions";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCta() {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-accent-muted via-white to-surface px-8 py-12 md:px-12 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
        />
        <AccentLine className="mb-8" />
        <h2 className="max-w-xl font-display text-display-md text-foreground">
          Prêt à retrouver un espace impeccable ?
        </h2>
        <p className="mt-5 max-w-lg text-base text-muted leading-relaxed">
          Demandez votre devis gratuit. Nous vous répondons sous 24 heures.
        </p>

        <ContactActions className="mt-10" />
      </div>
    </FadeIn>
  );
}
