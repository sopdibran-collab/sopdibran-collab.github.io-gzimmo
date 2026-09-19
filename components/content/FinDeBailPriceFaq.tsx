import { finDeBailPriceFaqs } from "@/data/fin-de-bail-faq";
import { FaqList } from "@/components/content/FaqList";
import { Badge } from "@/components/ui/Badge";
import { ConversionCta } from "@/components/ui/ConversionCta";
import { cn } from "@/lib/utils";

type FinDeBailPriceFaqProps = {
  devisHref?: string;
  /** When rendered as its own page section, drop the top hairline separator. */
  className?: string;
};

/**
 * FAQ prix / fin de bail (4 questions GSC) — le JSON-LD FAQPage est émis par la page.
 */
export function FinDeBailPriceFaq({
  devisHref = "/contact?service=nettoyage-fin-de-bail",
  className,
}: FinDeBailPriceFaqProps) {
  return (
    <div className={cn("mt-16 border-t border-border/80 pt-16", className)}>
      <Badge className="text-accent/90">FAQ</Badge>
      <h2 className="mt-4 font-display text-display-sm text-foreground">
        Prix, devis et garantie d&apos;état des lieux
      </h2>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Vous vous demandez le prix d&apos;un nettoyage fin de bail ? Le plus juste est
        d&apos;en parler au téléphone : nous posons les questions utiles et vous recevez
        un devis sur mesure.
      </p>
      <div className="mt-8">
        <FaqList items={finDeBailPriceFaqs} />
      </div>
      <ConversionCta
        className="mt-10"
        devisHref={devisHref}
        devisLabel="Préférer nous écrire"
        preferCall
      />
    </div>
  );
}
