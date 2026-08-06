import type { ProcessStep } from "@/lib/process-data";

type ProcessRowProps = {
  step: ProcessStep;
};

export function ProcessRow({ step }: ProcessRowProps) {
  return (
    <article className="process-row py-10 lg:py-14">
      <div className="process-divider relative z-0 h-px w-full origin-left bg-ivory/15" />

      <div className="relative z-10 mt-12 grid gap-8 lg:grid-cols-[0.35fr_0.85fr_1.4fr] lg:gap-12">
        <p className="process-number font-display text-5xl leading-none text-gold lg:text-6xl">
          {step.number}
        </p>

        <h3 className="process-title lg:ml-4 max-w-sm font-display text-[2.5rem] leading-[1.05] text-ivory lg:text-[3rem]">
          {step.title}
        </h3>

        <p className="process-description max-w-2xl text-lg leading-relaxed text-ivory/65">
          {step.description}
        </p>
      </div>
    </article>
  );
}