import type { HTMLAttributes } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  tone = "ivory",
  contained = true,
  ...props
}: HTMLAttributes<HTMLElement> & {
  tone?: "ivory" | "white" | "charcoal";
  contained?: boolean;
}) {
  const content = contained ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn(
        "section-space",
        tone === "ivory" && "bg-ivory text-charcoal",
        tone === "white" && "bg-white text-charcoal",
        tone === "charcoal" && "bg-charcoal text-ivory",
        className,
      )}
      {...props}
    >
      {content}
    </section>
  );
}
