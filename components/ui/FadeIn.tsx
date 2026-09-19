import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type FadeInProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Polymorphic root — use `li` inside lists so animation wrappers stay valid HTML. */
  as?: T;
};

/** Animation CSS — plus fiable que framer-motion whileInView sur Safari. */
export function FadeIn<T extends ElementType = "div">({
  children,
  className,
  delay = 0,
  as,
}: FadeInProps<T>) {
  const Comp = (as ?? "div") as ElementType;

  return (
    <Comp
      className={cn("animate-fade-in-up motion-reduce:animate-none", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Comp>
  );
}
