"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { HeaderNavLink } from "@/components/layout/HeaderNavLink";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  callHref: string;
};

export function MobileNav({ callHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.inset = "";
      document.body.style.width = "";
      document.body.style.top = "";
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.inset = "0 0 auto 0";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.inset = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const menu = open ? (
    <>
      <button
        type="button"
        aria-label="Fermer le menu"
        className="fixed inset-0 z-[200] bg-[#1e2227]/20 backdrop-blur-[1px]"
        onClick={() => setOpen(false)}
      />
      <div
        id="mobile-menu"
        className="fixed inset-x-0 top-16 z-[210] max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-[#ffffff] px-container py-8"
      >
        <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
          {mainNav.map((item) => (
            <HeaderNavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setOpen(false)}
              className="py-3.5 font-display text-lg font-semibold"
            />
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-2.5 border-t border-border pt-8">
          <Button href="/contact" onClick={() => setOpen(false)}>
            Devis gratuit
          </Button>
          <Button
            variant="secondary"
            href={callHref}
            external
            onClick={() => setOpen(false)}
          >
            Appeler
          </Button>
        </div>
      </div>
    </>
  ) : null;

  return (
    <>
      <nav className="sr-only lg:hidden" aria-label="Navigation mobile">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact">Devis gratuit</Link>
        <a href={callHref}>Appeler</a>
      </nav>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="relative z-[220] flex h-10 w-10 items-center justify-center rounded-md border border-border bg-[#ffffff] text-foreground transition-colors hover:border-foreground/15 hover:bg-surface"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "block h-0.5 w-5 bg-current transition-transform duration-200",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-current transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-current transition-transform duration-200",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </span>
      </button>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </>
  );
}
