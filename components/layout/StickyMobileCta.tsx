"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function StickyMobileCta() {
  const callHref = formatPhoneHref(company.phone);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
    const hero = document.getElementById("home-hero");

    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIsVisible(!entry.isIntersecting);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-[#ffffff] px-container pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label="Actions rapides"
    >
      <div className="mx-auto flex max-w-[1200px] min-w-0 gap-2">
        <Button
          variant="secondary"
          href={callHref}
          external
          className="min-w-0 flex-1 px-2 text-sm sm:px-3"
        >
          Appeler
        </Button>
        <Button href="/contact" className="min-w-0 flex-1 px-2 text-sm sm:px-3">
          Devis gratuit
        </Button>
      </div>
    </div>
  );
}
