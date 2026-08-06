import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-site px-gutter-sm md:px-gutter-md lg:px-gutter-lg",
          className,
        )}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";
