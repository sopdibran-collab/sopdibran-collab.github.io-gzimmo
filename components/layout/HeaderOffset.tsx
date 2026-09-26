"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Pages dont le hero est DARK (`visualRhythm`). Le spacer reprend l’inverse, pas le blanc du body. */
const darkHeroPaths = new Set(["/nettoyage-apres-chantier"]);

/** Compense le header `fixed` hors homepage (le hero home passe dessous). */
export function HeaderOffset() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div
      className={cn("h-12 lg:h-14", darkHeroPaths.has(pathname) && "bg-inverse")}
      aria-hidden="true"
    />
  );
}
