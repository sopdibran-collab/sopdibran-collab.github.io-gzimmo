"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    plausible?: (event: string) => void;
  }
}

function track(event: string) {
  if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) return;
  window.plausible?.(event);
}

/** Événements Plausible : téléphone, devis, formulaire reçu sur /merci. */
export function PlausibleEvents() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/merci") return;
    track("Formulaire");
  }, [pathname]);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) return;

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        track("Téléphone");
        return;
      }
      if (link.getAttribute("data-analytics") === "devis") {
        track("Devis");
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
