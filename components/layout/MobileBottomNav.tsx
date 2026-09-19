"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  Home,
  Images,
  MessageSquare,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/data/company";
import {
  mobileBottomNav,
  type MobileBottomNavIcon,
} from "@/data/navigation";
import { cn, formatPhoneHref } from "@/lib/utils";

const iconMap: Record<MobileBottomNavIcon, LucideIcon> = {
  home: Home,
  services: BriefcaseBusiness,
  work: Images,
  contact: MessageSquare,
};

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Navigation mobile native-style : barre basse ultra-compacte,
 * icônes Lucide fines + labels text-[10px], blur + bordure légère.
 */
export function MobileBottomNav() {
  const pathname = usePathname();
  const callHref = formatPhoneHref(company.phone);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "border-t border-border/70 bg-[#ffffff]/80 backdrop-blur-md",
        "pb-[env(safe-area-inset-bottom)]",
      )}
      aria-label="Navigation mobile"
    >
      <ul className="mx-auto flex max-w-[1200px] items-stretch justify-between px-1 py-1">
        {mobileBottomNav.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isNavActive(pathname, item.href);

          return (
            <li key={item.href} className="min-w-0 flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md px-1 py-2",
                  "transition-colors duration-200",
                  active ? "text-accent" : "text-muted hover:text-foreground",
                )}
              >
                <Icon className="size-[18px] stroke-[1.5]" aria-hidden />
                <span className="max-w-full truncate text-[10px] font-medium leading-none tracking-[-0.01em]">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}

        <li className="min-w-0 flex-1">
          <a
            href={callHref}
            aria-label={`Appeler le ${company.phoneDisplay}`}
            className={cn(
              "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md px-1 py-2",
              "text-muted transition-colors duration-200 hover:text-accent",
            )}
          >
            <Phone className="size-[18px] stroke-[1.5]" aria-hidden />
            <span className="text-[10px] font-medium leading-none tracking-[-0.01em]">
              Appel
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
