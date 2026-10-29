import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary hover-lift bg-accent text-white border border-transparent shadow-none",
  secondary: "btn-secondary bg-background text-foreground border border-border",
  ghost: "bg-transparent text-foreground hover:text-accent-ink border border-transparent",
};

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
} & ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a">;

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-[15px] font-semibold leading-[1.2] sm:text-base transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out motion-reduce:transition-[color,background-color,border-color,box-shadow] motion-reduce:hover:translate-y-0",
    variants[variant],
    className,
  );

  if (href) {
    const anchorProps = props as ComponentPropsWithoutRef<"a">;
    if (external) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }
    const { onClick, ...linkRest } = anchorProps;
    return (
      <Link href={href} className={classes} onClick={onClick} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
