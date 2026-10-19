import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type ConversionCtaProps = {
  className?: string;
  devisHref?: string;
  devisLabel?: string;
  callLabel?: string;
  compact?: boolean;
  /** Conservé pour les appelants. Le devis reste le bouton plein. */
  preferCall?: boolean;
  tone?: "default" | "dark";
};

/** Paire devis + appel. `compact` resserre boutons et gouttière. */
export function ConversionCta({
  className,
  devisHref = "/contact",
  devisLabel = "Demander un devis gratuit",
  callLabel = `Appeler · ${company.phoneDisplay}`,
  compact = false,
  preferCall: _preferCall = false,
  tone = "default",
}: ConversionCtaProps) {
  const callHref = formatPhoneHref(company.phone);
  const onDark = tone === "dark";
  const size = compact ? "min-h-11 px-4 py-2" : undefined;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:flex-wrap sm:items-center",
        compact ? "gap-2" : "gap-3",
        className,
      )}
    >
      <Button href={devisHref} data-analytics="devis" className={cn("w-full sm:w-auto", size)}>
        {devisLabel}
      </Button>
      <Button
        href={callHref}
        external
        variant="secondary"
        className={cn(
          "w-full sm:w-auto",
          size,
          onDark &&
            "border-white/75 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white",
        )}
      >
        {callLabel}
      </Button>
    </div>
  );
}

export const CtaPair = ConversionCta;

export function InlineCta({ className, devisHref = "/contact" }: { className?: string; devisHref?: string }) {
  return <ConversionCta className={className} devisHref={devisHref} />;
}
