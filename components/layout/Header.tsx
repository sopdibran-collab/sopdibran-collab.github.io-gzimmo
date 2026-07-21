"use client";

import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-[18px]">
      <path
        d="M5.5 3.5h2l1.2 3-1.6 1.1a9.5 9.5 0 0 0 4.3 4.3L12.5 10l3 1.2v2a1 1 0 0 1-1 1A12.5 12.5 0 0 1 3.5 5.5a1 1 0 0 1 1-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-container lg:h-[4.5rem]">
        {/* Logo */}
        <div className="shrink-0">
          <Logo priority />
        </div>

        {/* Navigation — centrée sur desktop */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-6"
          aria-label="Navigation principale"
        >
          {mainNav.map((item) => (
            <HeaderNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        {/* CTA desktop — retenu, confiance suisse */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={callHref}
            className="text-sm font-medium text-muted transition-colors duration-200 hover:text-accent"
          >
            {company.phoneDisplay}
          </a>
          <Button href="/contact" variant="ghost" className="px-0 font-medium text-accent hover:text-accent-hover">
            Devis gratuit
          </Button>
        </div>

        {/* Mobile — téléphone + menu */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
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
