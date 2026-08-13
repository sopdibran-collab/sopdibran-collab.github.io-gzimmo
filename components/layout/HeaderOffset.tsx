"use client";

import { usePathname } from "next/navigation";

/** Compense le header `fixed` hors homepage (le hero home passe dessous). */
export function HeaderOffset() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div className="h-12 lg:h-14" aria-hidden="true" />;
}
