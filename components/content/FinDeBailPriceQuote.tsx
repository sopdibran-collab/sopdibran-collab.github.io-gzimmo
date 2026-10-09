import { cn } from "@/lib/utils";

type FinDeBailPriceQuoteProps = {
  className?: string;
};

/**
 * Intention « prix » : devis sur mesure au téléphone, pas de calculateur.
 */
export function FinDeBailPriceQuote({ className }: FinDeBailPriceQuoteProps) {
  return (
    <div className={cn("border-t-2 border-accent pt-8", className)}>
      <h2 className="font-display text-display-sm text-foreground">
        Prix d&apos;un nettoyage de fin de bail
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Chaque logement est différent : nombre de pièces, état, exigences de la régie,
        date de l&apos;état des lieux. Un tarif affiché en ligne passerait à côté de votre
        situation. Appelez-nous, expliquez le bien et le délai. Nous établissons un
        devis gratuit, sur mesure, avant d&apos;intervenir.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Ce premier échange permet aussi de vérifier la checklist de remise des clés et
        de caler l&apos;intervention. Le tarif convenu est le tarif final.
      </p>
    </div>
  );
}
