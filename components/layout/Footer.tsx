import Link from "next/link";
import { company, formatAddress } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { getServicePath } from "@/lib/service-paths";
import { formatPhoneHref } from "@/lib/utils";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";
import { Logo } from "@/components/ui/Logo";

const linkClass =
  "text-sm text-white/70 transition-colors duration-200 hover:text-white";
const headingClass = "mb-5 text-sm font-medium tracking-[-0.01em] text-white";

const regionLinks = [
  { label: "Romont", href: "/seo/nettoyage-romont" },
  { label: "Fribourg", href: "/seo/nettoyage-fribourg" },
  { label: "Lausanne", href: "/seo/nettoyage-lausanne" },
  { label: "Genève", href: "/seo/nettoyage-geneve" },
  { label: "Morges", href: "/seo/nettoyage-morges" },
  { label: "Yverdon", href: "/seo/nettoyage-yverdon-les-bains" },
] as const;

const footerServices = [
  { slug: "nettoyage-fin-de-bail", label: "Fin de bail" },
  { slug: "conciergerie", label: "Régies" },
  { slug: "nettoyage-apres-chantier", label: "Chantiers" },
  { slug: "nettoyage-bureaux", label: "Bureaux" },
  { slug: "nettoyage-appartements", label: "Appartements" },
  { slug: "nettoyage-vitres", label: "Vitres" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden section-footer text-white border-t border-white/[0.08]">
      <div aria-hidden="true" className="section-footer-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1200px] px-container py-14 md:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo variant="monochromeInverse" size="footer" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              {company.tagline}. Basés à Romont (FR), interventions en Suisse romande.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className={headingClass}>Navigation</p>
              <ul className="space-y-3">
                {footerNav.pages
                  .filter((item) =>
                    ["/", "/a-propos", "/realisations", "/avis", "/contact"].includes(item.href),
                  )
                  .map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass}>
                        {item.label === "Avis clients" ? "Avis" : item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className={headingClass}>Services</p>
              <ul className="space-y-3">
                {footerServices.map((item) => (
                  <li key={item.slug}>
                    <Link href={getServicePath(item.slug)} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={headingClass}>Région</p>
              <ul className="space-y-3">
                {regionLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={headingClass}>Contact</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <GoogleMapsLink className="transition-colors duration-200 hover:text-white">
                    {formatAddress()}
                  </GoogleMapsLink>
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
                  <a
                    href={`mailto:${company.email}`}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-container py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} — Tous droits réservés
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors duration-200 hover:text-white">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="transition-colors duration-200 hover:text-white"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
