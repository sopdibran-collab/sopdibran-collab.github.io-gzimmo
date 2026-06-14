"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function MobileNav({
  callHref,
  mailHref,
}: {
  callHref: string;
  mailHref: string;
}) {
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
        className="fixed inset-0 z-[200] bg-[#1e2227]/25"
        onClick={() => setOpen(false)}
      />
      <div
        id="mobile-menu"
        className="fixed inset-x-0 top-[4.5rem] z-[210] max-h-[calc(100vh-4.5rem)] max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-[#ffffff] px-container py-8 shadow-[0_24px_48px_rgba(30,34,39,0.14)] sm:top-20 sm:max-h-[calc(100vh-5rem)] sm:max-h-[calc(100dvh-5rem)]"
      >
        <div className="mb-8">
          <Logo className="h-12 max-w-[240px] sm:max-w-[260px]" />
        </div>

        <nav className="flex flex-col gap-5" aria-label="Navigation mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xl font-semibold text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8">
          <Button href="/contact" onClick={() => setOpen(false)}>
            Demander un devis
          </Button>
          <Button
            variant="secondary"
            href={callHref}
            external
            onClick={() => setOpen(false)}
          >
            Appeler
          </Button>
          <Button
            variant="secondary"
            href={mailHref}
            external
            onClick={() => setOpen(false)}
          >
            Écrire un e-mail
          </Button>
        </div>
      </div>
    </>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="relative z-[220] flex h-11 w-11 items-center justify-center rounded-md border border-border bg-[#ffffff]"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "block h-0.5 w-5 bg-foreground transition-transform duration-200",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-foreground transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-foreground transition-transform duration-200",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </span>
      </button>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </div>
  );
}
