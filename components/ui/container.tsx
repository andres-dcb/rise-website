import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-site px-gutter-sm md:px-gutter-md lg:px-gutter-lg",
        className,
      )}
      {...props}
    />
  );
}
