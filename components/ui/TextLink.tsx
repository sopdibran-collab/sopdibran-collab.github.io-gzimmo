import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  analytics?: "devis";
};

export function TextLink({ href, children, className, showArrow = true, analytics }: TextLinkProps) {
  return (
    <Link
      href={href}
      data-analytics={analytics}
      className={cn(
        "group inline-flex min-h-11 items-center gap-2 py-2 text-base font-medium text-foreground transition-colors duration-150 ease-out hover:text-accent-ink",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className="hover-slide-arrow inline-block transition-transform duration-150 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
