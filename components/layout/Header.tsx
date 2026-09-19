"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/ContactIcons";
import { Logo } from "@/components/ui/Logo";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";

/**
 * Taille logo fixe — même échelle home / pages intérieures (évite saut + squash).
 * Mobile un peu plus compact pour laisser respirer la barre.
 */
const logoDesktopClass = "h-9 w-auto max-w-[200px]";
const logoMobileClass = "h-7 w-auto max-w-[148px]";

export function Header() {
  const pathname = usePathname();
  const callHref = formatPhoneHref(company.phone);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  /**
   * Identité unique : chrome sombre partout (home + intérieures).
   * Home en haut de page reste transparent sur le hero ; au scroll / ailleurs = fond gris.
   */
  const solidChrome = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        solidChrome
          ? "border-b border-white/10 bg-[#1e2227]/96 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Mobile : logo seule — nav = bottom bar */}
      <div className="mx-auto flex h-12 max-w-[1200px] min-w-0 items-center px-container lg:hidden">
        <Logo priority variant="onDark" className={logoMobileClass} />
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden h-14 max-w-[1200px] min-w-0 items-center gap-3 px-container lg:flex xl:gap-6">
        <div className="min-w-0 shrink-0">
          <Logo priority variant="onDark" className={logoDesktopClass} />
        </div>

        <nav
          className="min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <HeaderNavLink
              key={item.href}
              href={item.href}
              label={item.label}
              overDark
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {/* Secondaire calme — pas de verre / glow */}
          <Button
            href={callHref}
            external
            variant="secondary"
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className="h-11 whitespace-nowrap border-white/25 bg-transparent px-3 text-[13px] text-white shadow-none hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
          >
            <PhoneIcon className="size-4 shrink-0" />
            {company.phoneDisplay}
          </Button>
          {/* Primaire : accent solide — un seul CTA fort */}
          <Button
            href="/contact"
            className="h-11 whitespace-nowrap border-transparent bg-accent px-4 text-white shadow-none hover:bg-accent-hover hover:text-white"
          >
            Devis
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}
