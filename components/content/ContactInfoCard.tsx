import { company, formatAddress } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { ContactActions } from "@/components/ui/ContactActions";
import { ContentCard } from "@/components/ui/ContentCard";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";

export function ContactInfoCard() {
  return (
    <ContentCard>
      <div id="appeler" className="space-y-6 text-sm">
        <div>
          <p className="font-medium text-foreground">E-mail</p>
          <a href={`mailto:${company.email}`} className="mt-1 block text-muted hover:text-accent">
            {company.email}
          </a>
        </div>
        <div>
          <p className="font-medium text-foreground">Téléphone</p>
          <a
            href={formatPhoneHref(company.phone)}
            className="mt-1 block text-muted hover:text-accent"
          >
            {company.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="font-medium text-foreground">Adresse</p>
          <GoogleMapsLink className="mt-1 block text-muted hover:text-accent">
            {formatAddress()}
          </GoogleMapsLink>
        </div>
        <div>
          <p className="font-medium text-foreground">Zone</p>
          <p className="mt-1 text-muted">{company.areaServed}</p>
        </div>
        <ContactActions className="pt-2" showDevis={false} />
      </div>
    </ContentCard>
  );
}
