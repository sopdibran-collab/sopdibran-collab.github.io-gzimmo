import Link from "next/link";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextLink({ href, children, className, showArrow = true }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center gap-2 py-2 text-base font-medium text-foreground transition-colors hover:text-accent-ink",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <span
          aria-hidden="true"
          className=""
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
