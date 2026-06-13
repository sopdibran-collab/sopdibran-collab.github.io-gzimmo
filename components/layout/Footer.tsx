import Image from "next/image";
import Link from "next/link";
import { company, formatAddress } from "@/data/company";
import { footerNav } from "@/data/navigation";
import { services } from "@/data/services";
import { formatPhoneHref } from "@/lib/utils";
import { Divider } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-container py-section">
        <div className="relative mb-12 h-9 w-[148px]">
          <Image
            src="/monochrome_noir.svg"
            alt={company.name}
            fill
            className="object-contain object-left"
            sizes="148px"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-3">
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
              <li>{formatAddress()}</li>
              <li>{company.areaServed}</li>
            </ul>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <p>Nettoyage professionnel — Suisse romande</p>
        </div>
      </div>
    </footer>
  );
}
