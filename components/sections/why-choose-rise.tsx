"use client";

import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";
import { fadeUp } from "@/lib/animations/reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Thoughtful Planning",
    description:
      "Every successful remodel begins with careful planning, realistic timelines, and attention to every detail.",
  },
  {
    title: "Transparent Communication",
    description:
      "You'll always know what comes next, how your project is progressing, and who to contact throughout the entire process.",
  },
  {
    title: "Exceptional Craftsmanship",
    description:
      "Quality isn't just in the finishes you see. It's reflected in the care, precision, and workmanship behind every decision.",
  },
  {
    title: "Built to Last",
    description:
      "We create spaces that combine timeless design, durable materials, and functionality that serves your family for years.",
  },
];

export function WhyChooseRise() {
  const introRef = useRef<HTMLDivElement>(null);

  const dividerRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (introRef.current) {
      fadeUp(introRef.current, {
        duration: 0.9,
      });
    }

    rowRefs.current.forEach((row, index) => {
      const divider = dividerRefs.current[index];
      const title = titleRefs.current[index];
      const paragraph = paragraphRefs.current[index];

      if (!divider || !title || !paragraph) return;

      gsap.set(divider, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set([title, paragraph], {
        opacity: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(divider, {
        scaleX: 1,
        duration: 0.75,
        ease: "power3.out",
      })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          paragraph,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.40"
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-ivory py-36 lg:py-44"
    >
      <Container>
        <div
          ref={introRef}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Why Choose RISE
          </p>

          <h2 className="mt-5 text-display-lg text-charcoal">
            A remodeling experience built around trust.
          </h2>

          <p className="mt-7 text-body-lg text-charcoal/70">
            From the first consultation to the final walkthrough, every
            decision is guided by thoughtful planning, transparent
            communication, and craftsmanship designed to stand the test of
            time.
          </p>
        </div>

        <div className="mt-20">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
              className="py-12"
            >
              <div
                ref={(el) => {
                  if (el) dividerRefs.current[index] = el;
                }}
                className="h-px w-full bg-charcoal/10"
              />

              <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <h3
                  ref={(el) => {
                    if (el) titleRefs.current[index] = el;
                  }}
                  className="font-display text-4xl text-charcoal"
                >
                  {value.title}
                </h3>

                <p
                  ref={(el) => {
                    if (el) paragraphRefs.current[index] = el;
                  }}
                  className="max-w-2xl text-lg leading-relaxed text-charcoal/70"
                >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}