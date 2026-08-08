"use client";

import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/ContactIcons";
import { Logo } from "@/components/ui/Logo";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

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
          ? "border-border bg-[#ffffff]/95 backdrop-blur-sm"
          : "border-border/60 bg-[#ffffff]/85 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] min-w-0 items-center gap-3 px-container sm:gap-6 lg:h-[4.5rem] lg:gap-3 xl:gap-6">
        {/* Logo */}
        <div className="min-w-0 shrink">
          <Logo priority className="lg:w-[220px] xl:w-[270px] 2xl:w-[300px]" />
        </div>

        {/* Navigation — centrée sur desktop */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <HeaderNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* CTA desktop — actions identifiables, une seule priorité visuelle */}
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
          <Button
            href="/contact"
            className="h-10 whitespace-nowrap px-4 shadow-none"
          >
            Devis gratuit
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </div>

        {/* Mobile — téléphone + menu */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={callHref}
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-[#ffffff] text-foreground transition-colors hover:border-foreground/15 hover:bg-surface hover:text-accent"
          >
            <PhoneIcon />
          </a>
          <MobileNav callHref={callHref} />
        </div>
      </div>
    </header>
  );
}
