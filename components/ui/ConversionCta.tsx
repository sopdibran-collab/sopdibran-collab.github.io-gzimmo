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
};

export function ConversionCta({
  className,
  devisHref = "/contact",
  devisLabel = "Demander un devis gratuit",
  callLabel = `Appeler le ${company.phoneDisplay}`,
  compact = false,
}: ConversionCtaProps) {
  const callHref = formatPhoneHref(company.phone);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <Button href={devisHref}>{devisLabel}</Button>
      <Button variant="secondary" href={callHref} external>
        {callLabel}
      </Button>
    </div>
  );
}

export function InlineCta({ className, devisHref = "/contact" }: { className?: string; devisHref?: string }) {
  return <ConversionCta className={className} devisHref={devisHref} compact />;
}
