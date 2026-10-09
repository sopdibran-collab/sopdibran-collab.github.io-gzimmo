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

export function ConversionCta({
  className,
  devisHref = "/contact",
  devisLabel = "Demander un devis gratuit",
  callLabel = `Appeler · ${company.phoneDisplay}`,
  preferCall: _preferCall = false,
  tone = "default",
}: ConversionCtaProps) {
  const callHref = formatPhoneHref(company.phone);
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <Button href={devisHref} className="w-full sm:w-auto">
        {devisLabel}
      </Button>
      <Button
        href={callHref}
        external
        variant="secondary"
        className={cn(
          "w-full sm:w-auto",
          onDark &&
            "border-white/75 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white",
        )}
      >
        {callLabel}
      </Button>
    </div>
  );
}

export function InlineCta({ className, devisHref = "/contact" }: { className?: string; devisHref?: string }) {
  return <ConversionCta className={className} devisHref={devisHref} />;
}
