import { AccentLine } from "@/components/ui/Badge";
import { ContactActions } from "@/components/ui/ContactActions";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactCta() {
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

        <ContactActions className="mt-10" />
      </div>
    </FadeIn>
  );
}
