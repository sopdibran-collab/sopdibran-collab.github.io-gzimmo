import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceAccordion } from "@/components/content/ServiceAccordion";

export function ServiceList({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <div>
      <FadeIn>
        <Badge className="text-accent/90">Nos services</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Ce que nous prenons en charge
        </h2>
        {showIntro ? (
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Survolez un service pour l&apos;aperçu, cliquez pour en savoir plus.
          </p>
        ) : null}
      </FadeIn>

      <ServiceAccordion />

      <div className="mt-10">
        <TextLink href="/services">Voir tous les services</TextLink>
      </div>
    </div>
  );
}
