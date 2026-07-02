import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const callHref = formatPhoneHref(company.phone);
  const mailHref = `mailto:${company.email}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#ffffff] supports-[position:sticky]:top-0">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-container">
        <Logo priority />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={callHref}
            className="hidden text-sm font-medium text-foreground transition-colors hover:text-accent xl:inline"
          >
            {company.phoneDisplay}
          </a>
          <Button variant="ghost" href={mailHref} external className="hidden px-3 xl:inline-flex">
            E-mail
          </Button>
          <Button variant="secondary" href={callHref} external className="px-4">
            Appeler
          </Button>
          <Button href="/contact">Devis gratuit</Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
