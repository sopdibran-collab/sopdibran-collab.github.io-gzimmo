"use client";

import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function StickyMobileCta() {
  const callHref = formatPhoneHref(company.phone);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-[#ffffff] px-container py-3 shadow-[0_-8px_32px_rgba(30,34,39,0.08)] lg:hidden"
      role="region"
      aria-label="Actions rapides"
    >
      <div className="mx-auto flex max-w-[1200px] gap-2">
        <Button
          variant="secondary"
          href={callHref}
          external
          className="flex-1 px-3"
        >
          Appeler maintenant
        </Button>
        <Button href="/contact" className="flex-1 px-3">
          Devis gratuit
        </Button>
      </div>
    </div>
  );
}
