import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GarantieRemiseBail } from "@/components/ui/GarantieRemiseBail";

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
            Après travaux ou fin de bail,<br className="hidden sm:block" /> on s&apos;en charge.
          </h2>
          <p className="mt-4 max-w-md text-white/65 leading-relaxed">
            Décrivez le bien ou le chantier. Devis clair sous 24 h, sans engagement.
          </p>
          <GarantieRemiseBail
            variant="inline"
            tone="dark"
            className="mt-6 max-w-xl border-white/15 bg-white/[0.06]"
          />
        </div>
        <div className="flex flex-col gap-3 sm:items-start lg:col-span-4 lg:items-end">
          <Button href="/contact" className="w-full sm:w-auto">
            Demander un devis gratuit
          </Button>
          <Button
            href={callHref}
            external
            variant="secondary"
            className="w-full border-white/75 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Appeler · {company.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
