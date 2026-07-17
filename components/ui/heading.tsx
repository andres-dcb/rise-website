import { cn } from "@/lib/cn";

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-label text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-display-lg">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-body-lg",
            align === "center" && "mx-auto",
            inverse ? "text-ivory/65" : "text-charcoal/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
