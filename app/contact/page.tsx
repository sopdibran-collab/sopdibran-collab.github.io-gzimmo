import { company, formatAddress } from "@/data/company";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { formatPhoneHref } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContactForm } from "@/components/content/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez Gzimmo pour un devis gratuit de nettoyage professionnel en Suisse romande. Réponse sous 24 heures.",
  path: "/contact",
});

export default function ContactPage() {
  const callHref = company.phone
    ? formatPhoneHref(company.phone)
    : `mailto:${company.email}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Section>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <PageIntro
              badge="Contact"
              title="Demandez votre devis gratuit"
              description="Décrivez votre besoin. Nous vous répondons sous 24 heures, sans engagement."
            />

            <div id="appeler" className="mt-10 space-y-4 text-sm text-muted">
              <p>
                <span className="font-medium text-foreground">E-mail</span>
                <br />
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Téléphone</span>
                <br />
                <a href={formatPhoneHref(company.phone)} className="hover:text-accent">
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Adresse</span>
                <br />
                {formatAddress()}
              </p>
              <p>
                <span className="font-medium text-foreground">Zone</span>
                <br />
                {company.areaServed}
              </p>
              <Button variant="secondary" href={callHref} external>
                Appeler
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
