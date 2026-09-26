"use client";

import { useLayoutEffect, useState } from "react";
import type { FaqContent, FaqItem } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type FaqListProps = {
  items: readonly (FaqItem | FaqContent)[];
  /** Désactive l'animation d'entrée quand la liste est déjà dans un bloc animé. */
  animated?: boolean;
};

function faqRowKey(item: FaqItem | FaqContent, index: number) {
  return "id" in item ? item.id : `${item.question}-${index}`;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={cn(
        "mt-1 size-4 shrink-0 text-muted transition-[transform,color] duration-200 ease-out group-hover:text-foreground motion-reduce:transition-none",
        open && "rotate-180 text-foreground",
      )}
    >
      <path
        d="M3.5 6 8 10.5 12.5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqRow({
  item,
  index,
  animated,
}: {
  item: FaqItem | FaqContent;
  index: number;
  animated: boolean;
}) {
  const anchorId = "id" in item ? item.id : undefined;
  const panelId = `${anchorId ?? `faq-${index}`}-reponse`;
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!anchorId) return;
    const sync = () => {
      if (window.location.hash === `#${anchorId}`) setOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [anchorId]);

  return (
    <div
      id={anchorId}
      className={cn(
        "scroll-mt-28 border-b border-border/80",
        animated && "animate-fade-in-up motion-reduce:animate-none",
      )}
      style={animated ? { animationDelay: `${index * 0.05}s` } : undefined}
    >
      <dt>
        <button
          type="button"
          className="group flex w-full items-start justify-between gap-6 py-5 text-left text-lg font-medium text-foreground"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{item.question}</span>
          <Chevron open={open} />
        </button>
      </dt>
      {/*
        La réponse reste dans le HTML (repliée, pas retirée du DOM) pour le
        référencement. Le JSON-LD FAQPage est émis par la page.
      */}
      <dd
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <p className="pb-6 text-reading text-muted">{item.answer}</p>
        </div>
      </dd>
    </div>
  );
}

/**
 * Accordéon FAQ. Questions toujours visibles, réponses dans le DOM,
 * masquées tant que la question n'est pas activée.
 */
export function FaqList({ items, animated = true }: FaqListProps) {
  return (
    <dl className="border-t border-border/80">
      {items.map((item, index) => (
        <FaqRow
          key={faqRowKey(item, index)}
          item={item}
          index={index}
          animated={animated}
        />
      ))}
    </dl>
  );
}

export function FaqSectionHeader({
  title = "Questions fréquentes",
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      <Badge>FAQ</Badge>
      <h2 className="mt-4 font-display text-display-md text-foreground">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{description}</p>
      ) : null}
    </>
  );
}
