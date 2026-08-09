import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, formatAddress } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { getServicePath } from "@/lib/service-paths";
import { formatPhoneHref } from "@/lib/utils";
import { GoogleMapsLink } from "@/components/seo/GoogleMap";
import { Logo } from "@/components/ui/Logo";

const navLinks = footerNav.pages.filter((item) =>
  ["/", "/realisations", "/avis", "/a-propos", "/contact"].includes(item.href),
);

const footerServices = [
  { slug: "nettoyage-fin-de-bail", label: "Fin de bail" },
  { slug: "conciergerie", label: "Régies" },
  { slug: "nettoyage-apres-chantier", label: "Chantiers" },
  { slug: "nettoyage-bureaux", label: "Bureaux" },
  { slug: "nettoyage-appartements", label: "Appartements" },
  { slug: "nettoyage-vitres", label: "Vitres" },
] as const;

const regionLinks = [
  { label: "Romont", href: "/seo/nettoyage-romont" },
  { label: "Fribourg", href: "/seo/nettoyage-fribourg" },
  { label: "Lausanne", href: "/seo/nettoyage-lausanne" },
  { label: "Genève", href: "/seo/nettoyage-geneve" },
] as const;

const chipClass =
  "inline-flex items-center rounded-md px-1.5 py-1 text-[11px] font-medium leading-none text-white/70 transition-colors hover:bg-white/10 hover:text-white";

const labelClass =
  "mb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/45";

function LinkRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className={labelClass}>{label}</p>
      <div className="flex flex-wrap gap-x-0.5 gap-y-0.5">{children}</div>
    </div>
  );
}

/**
 * Pied de page (footer) — compact, pas de colonnes pleine hauteur.
 * Sur mobile : chips serrés ; desktop : rangées horizontales.
 */
export function Footer() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <footer
      className="relative border-t border-white/10 bg-[#1a4f4a]/95 text-white backdrop-blur-md"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] space-y-3 px-container py-3 sm:py-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Logo variant="monochromeInverse" size="footer" className="max-h-7 max-w-[140px]" />
          <p className="max-w-md text-[11px] leading-snug text-white/55">
            {company.tagline} · Romont (FR) · Suisse romande
          </p>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          <LinkRow label="Navigation">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={chipClass}>
                {item.label === "Avis clients" ? "Avis" : item.label}
              </Link>
            ))}
          </LinkRow>

          <LinkRow label="Services">
            {footerServices.map((item) => (
              <Link
                key={item.slug}
                href={getServicePath(item.slug)}
                className={chipClass}
              >
                {item.label}
              </Link>
            ))}
          </LinkRow>

          <LinkRow label="Région">
            {regionLinks.map((item) => (
              <Link key={item.href} href={item.href} className={chipClass}>
                {item.label}
              </Link>
            ))}
          </LinkRow>

          <div className="min-w-0">
            <p className={labelClass}>Contact</p>
            <ul className="space-y-1 text-[11px] text-white/70">
              <li>
                <GoogleMapsLink className="inline-flex items-start gap-1.5 transition-colors hover:text-white">
                  <MapPin className="mt-0.5 size-3 shrink-0 stroke-[1.5]" aria-hidden />
                  <span>{formatAddress()}</span>
                </GoogleMapsLink>
              </li>
              <li>
                <a
                  href={callHref}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Phone className="size-3 stroke-[1.5]" aria-hidden />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <Mail className="size-3 stroke-[1.5]" aria-hidden />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-container py-2 text-[10px] text-white/45">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <div className="flex flex-wrap gap-x-3">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
