import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const callHref = company.phone
    ? formatPhoneHref(company.phone)
    : "/contact#appeler";

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-container">
        <Link href="/" className="relative block h-8 w-[140px] shrink-0" aria-label={`${company.name} — Accueil`}>
          <Image
            src="/horizontal.svg"
            alt=""
            fill
            className="object-contain object-left"
            priority
            sizes="140px"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" href="/contact">
            Devis gratuit
          </Button>
        </div>

        <MobileNav callHref={callHref} />
      </div>
    </header>
  );
}
