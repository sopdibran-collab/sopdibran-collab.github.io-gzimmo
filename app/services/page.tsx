import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero, PageMain, PageCta } from "@/components/layout/PageLayout";
import { PageIntro, JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ServiceCatalogList, ServiceCatalogFooter } from "@/components/content/ServiceCatalogList";

export const metadata = createMetadata({
  title: "Services de nettoyage",
  description:
    "Découvrez les services Gzimmo : entretien de locaux, conciergerie, fin de bail, après chantier, bureaux et vitres — priorité Fribourg et Vaud.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero>
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
        <PageIntro
          badge="Services"
          title="Des prestations précises, adaptées à chaque espace"
          description="Chaque intervention est planifiée avec soin — du nettoyage régulier aux remises en état ponctuelles."
        />
      </PageHero>

      <PageMain variant="accent">
        <ServiceCatalogList />
        <ServiceCatalogFooter />
      </PageMain>

      <PageCta />
    </>
  );
}
