import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent shadow-[0_1px_2px_rgba(65,152,142,0.2)]",
  secondary:
    "bg-background text-foreground border border-border hover:border-foreground/20 hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:text-accent border border-transparent",
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
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-200 ease-out",
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
