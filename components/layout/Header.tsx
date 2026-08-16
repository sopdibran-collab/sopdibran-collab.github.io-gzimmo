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

/** Taille logo fixe — évite le « saut » au scroll. */
const logoDesktopClass = "w-[200px] max-w-[200px] max-h-10";
const logoMobileClass = "max-h-8 w-auto max-w-[148px]";

export function Header() {
  const pathname = usePathname();
  const callHref = formatPhoneHref(company.phone);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  /** Home = toujours le même langage (logo blanc) ; le scroll ne change que l’opacité du fond. */
  const onDark = isHome;

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
        onDark
          ? scrolled
            ? "border-b border-white/10 bg-[#1e2227]/92 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
          : "border-b border-border/80 bg-[#ffffff]/90 backdrop-blur-md",
      )}
    >
      {/* Mobile : logo seule — nav = bottom bar */}
      <div className="mx-auto flex h-12 max-w-[1200px] min-w-0 items-center px-container lg:hidden">
        <Logo
          priority
          variant={onDark ? "monochromeInverse" : "horizontal"}
          className={logoMobileClass}
        />
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden h-14 max-w-[1200px] min-w-0 items-center gap-3 px-container lg:flex xl:gap-6">
        <div className="min-w-0 shrink-0">
          <Logo
            priority
            variant={onDark ? "monochromeInverse" : "horizontal"}
            className={logoDesktopClass}
          />
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
              overDark={onDark}
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button
            href={callHref}
            external
            variant="secondary"
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className={cn(
              "h-9 whitespace-nowrap px-3 text-[13px] shadow-none",
              onDark
                ? "border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 hover:text-white"
                : "border-border/90 bg-white text-foreground hover:border-accent/35 hover:bg-accent-muted/45 hover:text-accent-hover",
            )}
          >
            <PhoneIcon className="size-4 shrink-0" />
            {company.phoneDisplay}
          </Button>
          <Button
            href="/contact"
            className={cn(
              "h-9 whitespace-nowrap px-4 shadow-none",
              onDark && "bg-white text-foreground hover:bg-white/90",
            )}
          >
            Devis
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}
