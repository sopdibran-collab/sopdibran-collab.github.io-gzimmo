"use client";

import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/ContactIcons";
import { Logo } from "@/components/ui/Logo";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";

export function Header() {
  const callHref = formatPhoneHref(company.phone);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border/80 bg-[#ffffff]/80 backdrop-blur-md"
          : "border-border/50 bg-[#ffffff]/70 backdrop-blur-md",
      )}
    >
      {/* Mobile : barre logo seule, ultra-compacte — nav = bottom bar */}
      <div className="mx-auto flex h-12 max-w-[1200px] min-w-0 items-center px-container lg:hidden">
        <Logo priority className="max-h-8" />
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden h-[4.5rem] max-w-[1200px] min-w-0 items-center gap-3 px-container lg:flex xl:gap-6">
        <div className="min-w-0 shrink">
          <Logo priority className="lg:w-[220px] xl:w-[270px] 2xl:w-[300px]" />
        </div>

        <nav
          className="min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <HeaderNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button
            href={callHref}
            external
            variant="secondary"
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className="h-10 whitespace-nowrap border-border/90 bg-white px-3 text-[13px] text-foreground shadow-none hover:border-accent/35 hover:bg-accent-muted/45 hover:text-accent-hover"
          >
            <PhoneIcon className="size-4 shrink-0" />
            {company.phoneDisplay}
          </Button>
          <Button href="/contact" className="h-10 whitespace-nowrap px-4 shadow-none">
            Devis gratuit
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </div>
      </div>
    </header>
  );
}
