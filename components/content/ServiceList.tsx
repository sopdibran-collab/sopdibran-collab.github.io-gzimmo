import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceAccordion } from "@/components/content/ServiceAccordion";

export function ServiceList() {
  return (
    <div>
      <FadeIn>
        <Badge>Nos services</Badge>
        <h2 className="mt-4 font-display text-display-md text-foreground">
          Ce que nous prenons en charge
        </h2>
      </FadeIn>

      <ServiceAccordion />

      <div className="mt-10">
        <TextLink href="/services">Voir tous les services</TextLink>
      </div>
    </div>
  );
}
