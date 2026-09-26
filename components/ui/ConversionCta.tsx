import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ConversionCtaProps = {
  className?: string;
  devisHref?: string;
  devisLabel?: string;
  callLabel?: string;
  compact?: boolean;
  /** Phone first — devis sur mesure après un échange, pas un calculateur. */
  preferCall?: boolean;
};

export function ConversionCta({
  className,
  devisHref = "/contact",
  devisLabel = "Demander un devis gratuit",
  callLabel = `Appeler le ${company.phoneDisplay}`,
  compact = false,
  preferCall = false,
}: ConversionCtaProps) {
  const callHref = formatPhoneHref(company.phone);

  const callButton = (
    <Button
      href={callHref}
      external
      variant={preferCall ? "primary" : "secondary"}
      className="w-full sm:w-auto"
    >
      {callLabel}
    </Button>
  );
  const devisButton = (
    <Button href={devisHref} variant={preferCall ? "secondary" : "primary"} className="w-full sm:w-auto">
      {devisLabel}
    </Button>
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      {preferCall ? (
        <>
          {callButton}
          {devisButton}
        </>
      ) : (
        <>
          {devisButton}
          {callButton}
        </>
      )}
    </div>
  );
}

export function InlineCta({ className, devisHref = "/contact" }: { className?: string; devisHref?: string }) {
  return <ConversionCta className={className} devisHref={devisHref} compact />;
}
