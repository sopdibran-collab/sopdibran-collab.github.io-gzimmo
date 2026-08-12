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
        "relative whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors duration-200",
        overDark
          ? active
            ? "text-white"
            : "text-white/75 hover:text-white"
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
          "absolute inset-x-1 -bottom-px h-px origin-center transition-transform duration-200",
          overDark ? "bg-white" : "bg-accent",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}
