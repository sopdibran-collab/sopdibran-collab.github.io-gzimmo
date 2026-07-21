import Link from "next/link";
import { company, formatAddress } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { services } from "@/data/services";
import { getServicePath } from "@/lib/service-paths";
import { formatPhoneHref } from "@/lib/utils";
import { romontRegionLocations } from "@/data/locations";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";
import { Logo } from "@/components/ui/Logo";
import { Divider } from "@/components/ui/Badge";

const linkClass =
  "text-sm text-white/70 transition-colors duration-200 hover:text-white";
const headingClass = "mb-4 text-sm font-medium text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden section-footer text-white border-t border-white/10">
      <div aria-hidden="true" className="section-footer-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1200px] px-container py-section">
        <div className="mb-12">
          <Logo variant="monochromeInverse" size="footer" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={headingClass}>Navigation</p>
            <ul className="space-y-3">
              {footerNav.pages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Services</p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={getServicePath(service.slug)} className={linkClass}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Romont &amp; région</p>
            <ul className="space-y-3">
              <li>
                <Link href="/seo/nettoyage-romont" className={linkClass}>
                  Entreprise de nettoyage Romont
                </Link>
              </li>
              <li>
                <Link href="/conciergerie" className={linkClass}>
                  Conciergerie régies
                </Link>
              </li>
              <li>
                <Link href="/nettoyage-fin-de-bail-romont" className={linkClass}>
                  Fin de bail Romont
                </Link>
              </li>
              <li>
                <Link href="/nettoyage-fin-de-bail-fribourg" className={linkClass}>
                  Fin de bail Fribourg
                </Link>
              </li>
              {romontRegionLocations
                .filter((loc) => !loc.isHeadquarters)
                .map((loc) => (
                  <li key={loc.slug}>
                    <Link href={`/seo/${loc.slug}`} className={linkClass}>
                      {loc.city}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/seo/nettoyage-fribourg" className={linkClass}>
                  Fribourg
                </Link>
              </li>
              <li>
                <Link href="/seo/nettoyage-lausanne" className={linkClass}>
                  Lausanne
                </Link>
              </li>
              <li>
                <Link href="/seo/nettoyage-geneve" className={linkClass}>
                  Genève
                </Link>
              </li>
              <li>
                <Link href="/seo/nettoyage-morges" className={linkClass}>
                  Morges
                </Link>
              </li>
              <li>
                <Link href="/seo/nettoyage-yverdon-les-bains" className={linkClass}>
                  Yverdon-les-Bains
                </Link>
              </li>
              <li>
                <Link
                  href="/zones"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-white/85"
                >
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={headingClass}>Contact</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={formatPhoneHref(company.phone)}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <GoogleMapsLink className="transition-colors duration-200 hover:text-white">
                  {formatAddress()}
                </GoogleMapsLink>
              </li>
              <li>{company.areaServed}</li>
            </ul>
          </div>
        </div>

        <Divider className="my-10 bg-white/20" />

        <div className="flex flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors duration-200 hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="transition-colors duration-200 hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
