"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav({ callHref }: { callHref: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="flex h-10 w-10 items-center justify-center"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-transform",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-foreground transition-transform",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-background px-container py-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src="/icon_only.svg" alt="" fill className="object-contain" />
            </div>
            <span className="font-display text-lg font-semibold">{company.name}</span>
          </div>

          <nav className="flex flex-col gap-6" aria-label="Navigation mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-2xl font-semibold text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-3">
            <Button href="/contact" onClick={() => setOpen(false)}>
              Demander un devis
            </Button>
            <Button
              variant="secondary"
              href={callHref}
              external={callHref.startsWith("tel:")}
              onClick={() => setOpen(false)}
            >
              Appeler
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
