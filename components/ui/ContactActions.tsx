import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactActionsProps = {
  className?: string;
  showDevis?: boolean;
  devisLabel?: string;
};

export function ContactActions({
  className,
  showDevis = true,
  devisLabel = "Demander un devis",
}: ContactActionsProps) {
  const callHref = formatPhoneHref(company.phone);
  const mailHref = `mailto:${company.email}`;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      {showDevis ? <Button href="/contact">{devisLabel}</Button> : null}
      <Button variant="secondary" href={callHref} external>
        Appeler
      </Button>
      <Button variant="secondary" href={mailHref} external>
        Écrire un e-mail
      </Button>
    </div>
  );
}
