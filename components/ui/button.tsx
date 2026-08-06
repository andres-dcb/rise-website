import Link, { type LinkProps } from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "text";
type Size = "sm" | "md";

const styles = {
  base: "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition duration-250 disabled:pointer-events-none disabled:opacity-45",
  variants: {
    primary:
      "bg-gold px-7 text-charcoal shadow-gold hover:-translate-y-0.5 hover:bg-gold-light",
    secondary:
      "border border-current/30 px-7 hover:border-current hover:bg-current/5",
    text: "min-h-0 rounded-none py-2 text-gold hover:gap-3",
  },
  sizes: {
    sm: "min-h-10 px-5 text-xs tracking-[0.05em] uppercase",
    md: "text-sm",
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    variant?: Variant;
    size?: Size;
  };

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.base,
        styles.variants[variant],
        styles.sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      className,
      variant = "primary",
      size = "md",
      ...props
    },
    ref,
  ) {
    return (
      <Link
        ref={ref}
        className={cn(
          styles.base,
          styles.variants[variant],
          styles.sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);