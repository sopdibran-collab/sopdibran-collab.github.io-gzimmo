"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type HeaderNavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  overDark?: boolean;
};

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNavLink({
  href,
  label,
  onClick,
  className,
  overDark = false,
}: HeaderNavLinkProps) {
  const pathname = usePathname();
  const active = isNavActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      data-active={active ? "" : undefined}
      className={cn(
        /* Zone tactile ≥ 44×24 : padding généreux, layout header desktop inchangé */
        "relative inline-flex min-h-11 items-center whitespace-nowrap px-2.5 py-2 text-sm font-medium transition-colors duration-200",
        overDark
          ? active
            ? "text-white"
            : "text-white/80 hover:text-white"
          : active
            ? "text-foreground"
            : "text-muted hover:text-foreground",
        className,
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-2.5 -bottom-px h-px origin-center transition-transform duration-200",
          overDark ? "bg-white" : "bg-accent",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}
