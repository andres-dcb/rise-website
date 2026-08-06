"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { faqs } from "@/data/faq";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
  const media = gsap.matchMedia();

  const ctx = gsap.context(() => {
    const elements = [
      eyebrowRef.current,
      titleRef.current,
      descriptionRef.current,
      ...rowsRef.current,
    ];

    elements.forEach((element, index) => {
      if (!element) return;

      const isRow = index >= 3;

      gsap.set(element, {
        opacity: 0,
        y: isRow ? 24 : 36,
      });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "top 70%",
          scrub: 1.1,
        },
      });
    });

    media.add("(min-width: 1024px)", () => {
      if (
        !gridRef.current ||
        !leftColumnRef.current ||
        !rightColumnRef.current
      ) {
        return;
      }

      ScrollTrigger.create({
        trigger: gridRef.current,
        pin: leftColumnRef.current,
        start: "top top+=128",
        endTrigger: rightColumnRef.current,
        end: "bottom bottom-=128",
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });
  }, sectionRef);

  return () => {
    media.revert();
    ctx.revert();
  };
}, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-white py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div
          ref={gridRef}
          className="grid items-start gap-20 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left Side */}

          <div ref={leftColumnRef} className="h-fit self-start">
            <p
              ref={eyebrowRef}
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#B08A47]"
            >
              Frequently Asked Questions
            </p>

            <h2
              ref={titleRef}
              className="font-serif text-4xl leading-tight text-zinc-900 sm:text-5xl"
            >
              Everything you need to know before starting your remodel.
            </h2>

            <p
              ref={descriptionRef}
              className="mt-6 max-w-md text-lg leading-8 text-zinc-600"
            >
              We believe great remodeling begins with clear communication.
              Here are answers to some of the questions homeowners ask us most
              often.
            </p>
          </div>

          {/* Right Side */}

          <div ref={rightColumnRef}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <div
                  key={faq.question}
                  ref={(element) => {
                    rowsRef.current[index] = element;
                  }}
                  className="border-b border-zinc-200 py-8"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[1.3rem] font-semibold leading-snug text-zinc-900">
                      {faq.question}
                    </span>

                    <span className="relative ml-6 mr-1 h-5 w-5 flex-shrink-0">
                      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-[#B08A47]" />

                      <span
                        className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-[#B08A47] transition-all duration-300 ${
                          open ? "rotate-90 opacity-0" : "opacity-100"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      open ? "grid-rows-[1fr] pt-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}