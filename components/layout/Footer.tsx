import Link from "next/link";
import { company, formatAddress } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { services } from "@/data/services";
import { formatPhoneHref } from "@/lib/utils";
import { romontRegionLocations } from "@/data/locations";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";
import { Logo } from "@/components/ui/Logo";
import { Divider } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-container py-section">
        <div className="mb-12">
          <Logo variant="monochrome" size="footer" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Navigation</p>
            <ul className="space-y-3">
              {footerNav.pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Services</p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Romont &amp; région</p>
            <ul className="space-y-3">
              {romontRegionLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/seo/${loc.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {loc.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/zones"
                  className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-foreground">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={formatPhoneHref(company.phone)}
                  className="transition-colors hover:text-accent"
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <GoogleMapsLink className="transition-colors hover:text-accent">
                  {formatAddress()}
                </GoogleMapsLink>
              </li>
              <li>{company.areaServed}</li>
            </ul>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors hover:text-accent">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="transition-colors hover:text-accent">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
