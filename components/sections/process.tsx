"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/container";
import { ProcessRow } from "@/components/ui/process-row";
import { processSteps } from "@/lib/process-data";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(introRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      });

      const rows = gsap.utils.toArray<HTMLElement>(".process-row");

      function activate(activeIndex: number) {
        rows.forEach((r, i) => {
          const divider = r.querySelector(".process-divider");
          const number = r.querySelector(".process-number");
          const title = r.querySelector(".process-title");
          const description = r.querySelector(".process-description");

          const active = i === activeIndex;

          gsap.to(r, {
            opacity: active ? 1 : 0.28,
            scale: active ? 1 : 0.96,
            y: active ? 0 : 8,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto",
          });

          gsap.to(divider, {
            scaleX: active ? 1 : 0.35,
            opacity: active ? 1 : 0.35,
            duration: 0.6,
            ease: "power2.out",
          });

          gsap.to(number, {
            color: active ? "#C9A14A" : "#7C7159",
            duration: 0.6,
          });

          gsap.to(title, {
            opacity: active ? 1 : 0.55,
            duration: 0.6,
          });

          gsap.to(description, {
            opacity: active ? 0.72 : 0.28,
            duration: 0.6,
          });
        });
      }

      rows.forEach((row, index) => {
        const divider = row.querySelector(".process-divider");

        // Initial state
        gsap.set(row, {
          opacity: index === 0 ? 1 : 0.3,
          scale: index === 0 ? 1 : 0.97,
        });

        gsap.set(divider, {
          scaleX: index === 0 ? 1 : 0.35,
          transformOrigin: "left center",
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 35%",
          end: "bottom 35%",
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  id="process"
  className="overflow-hidden bg-charcoal py-24 lg:py-32"
>
      <Container>
        <div
  ref={introRef}
  className="max-w-[900px]"
>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Our Process
          </p>

          <h2 className="mt-5 max-w-[1280px] text-display-lg text-ivory">
          Every Great Remodel Starts with a Plan.
          </h2>

          <p className="mt-6 max-w-[560px] text-body-lg text-ivory/70">
            A clear, carefully managed process keeps every phase organized and
            gives you confidence from planning through completion.
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          {processSteps.map((step) => (
            <ProcessRow key={step.number} step={step} />
          ))}

          <div className="mt-10 lg:mt-14 h-px w-full bg-ivory/15" />
        </div>
      </Container>
    </section>
  );
}