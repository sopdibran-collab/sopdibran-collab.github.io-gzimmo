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
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-4 px-container sm:h-20">
        <Logo priority />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
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

        <div className="hidden items-center gap-2 xl:flex">
          <Button variant="ghost" href={mailHref} external className="px-4">
            E-mail
          </Button>
          <Button variant="secondary" href={callHref} external className="px-4">
            Appeler
          </Button>
          <Button href="/contact">Devis gratuit</Button>
        </div>

        <div className="hidden items-center gap-2 lg:flex xl:hidden">
          <Button variant="secondary" href={callHref} external className="px-4">
            Appeler
          </Button>
          <Button href="/contact">Devis</Button>
        </div>

        <MobileNav callHref={callHref} mailHref={mailHref} />
      </div>
    </header>
  );
}
