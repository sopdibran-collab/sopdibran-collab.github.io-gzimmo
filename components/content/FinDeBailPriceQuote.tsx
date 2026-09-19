import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/ContentCard";

type FinDeBailPriceQuoteProps = {
  className?: string;
};

/**
 * Intention « prix » — devis sur mesure au téléphone, pas de calculateur.
 */
export function FinDeBailPriceQuote({ className }: FinDeBailPriceQuoteProps) {
  const callHref = formatPhoneHref(company.phone);

  return (
    <ContentCard className={cn("border-accent/20 bg-accent-muted/30", className)}>
      <h2 className="font-display text-display-sm text-foreground">
        Prix d&apos;un nettoyage de fin de bail
      </h2>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Chaque logement est différent : nombre de pièces, état, exigences de la régie,
        date de l&apos;état des lieux. Un tarif affiché en ligne passerait à côté de votre
        situation. Appelez-nous, expliquez le bien et le délai — nous établissons un
        devis gratuit, sur mesure, avant d&apos;intervenir.
      </p>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Ce premier échange permet aussi de vérifier la checklist de remise des clés et
        de caler l&apos;intervention. Le tarif convenu est le tarif final.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href={callHref} external>
          Appeler le {company.phoneDisplay}
        </Button>
        <Button href="/contact?service=nettoyage-fin-de-bail" variant="secondary">
          Préférer nous écrire
        </Button>
      </div>
    </ContentCard>
  );
}
