import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ContactForm } from "@/components/content/ContactForm";
import { ContactInfoCard } from "@/components/content/ContactInfoCard";
import { GoogleMap, GoogleMapsLink } from "@/components/seo/GoogleMap";
import { SectionDivider } from "@/components/ui/ContentCard";

export const metadata = createMetadata({
  title: "Contact — devis gratuit sous 24 h",
  description:
    "Devis gratuit de nettoyage à Romont et en Suisse romande. Gzimmo Sàrl — réponse sous 24 h. 076 214 23 42 · info@gzimmo.ch",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        <PageIntro
          badge="Contact"
          title="Demandez votre devis gratuit"
          description="Décrivez votre besoin. Nous vous répondons sous 24 heures, sans engagement."
        />
      </PageHero>

      <PageMain variant="accent">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        <SectionDivider title="Nous trouver" className="mt-20">
          <p className="text-muted">Route de Raboud 8, 1680 Romont FR</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <GoogleMapsLink className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              Ouvrir dans Google Maps →
            </GoogleMapsLink>
          </div>
          <div className="mt-8">
            <GoogleMap />
          </div>
        </SectionDivider>
      </PageMain>

      <PageCta />
    </>
  );
}
