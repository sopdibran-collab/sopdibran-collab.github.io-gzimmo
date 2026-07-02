"use client";

import { useId, useState } from "react";
import type { FaqContent, FaqItem } from "@/data/faq";
import { normalizeFaqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: readonly (FaqItem | FaqContent)[];
  /** Une seule réponse ouverte à la fois sur la page FAQ complète */
  singleOpen?: boolean;
  className?: string;
};

export function FaqAccordion({ items, singleOpen = false, className }: FaqAccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const normalized = normalizeFaqItems(items);

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(singleOpen ? [] : current);
      if (current.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-border/80 border-t border-border/80", className)}>
      {normalized.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}`;

        return (
          <div key={item.id} className="py-1">
            <h3 className="m-0">
              <button
                type="button"
                id={`${panelId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-start justify-between gap-6 py-5 text-left",
                  "text-base font-medium text-foreground md:text-[1.05rem]",
                  "transition-colors duration-200 hover:text-accent",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                )}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${panelId}-trigger`}
              hidden={!isOpen}
              className="pb-5"
            >
              <p className="max-w-2xl text-sm text-muted leading-relaxed md:text-[0.9375rem]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
