import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type ContactCtaProps = {
  className?: string;
};

/** CTA final — un message, un bouton. */
export function ContactCta({ className }: ContactCtaProps) {
  const callHref = formatPhoneHref(company.phone);

  return (
    <section className={cn("bg-inverse text-white", className)}>
      <div className="mx-auto grid w-full max-w-[1200px] min-w-0 gap-8 px-container py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-24">
        <div className="lg:col-span-8">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            Prochaine fin de bail,<br className="hidden sm:block" /> on s&apos;en charge.
          </h2>
          <p className="mt-4 max-w-md text-white/65 leading-relaxed">
            Décrivez le bien — on revient sous 24 h avec un devis clair.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-start lg:col-span-4 lg:items-end">
          <Button
            href="/contact"
            className="w-full bg-white text-foreground shadow-none hover:bg-white/90 sm:w-auto"
          >
            Demander un devis
          </Button>
          <a
            href={callHref}
            className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
          >
            {company.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
