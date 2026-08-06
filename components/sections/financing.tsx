"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Fast Approval",
    description:
      "Begin your renovation sooner with financing options designed to help you move forward without unnecessary delays.",
  },
  {
    title: "Flexible Terms",
    description:
      "Solutions tailored to your project, budget, and long-term goals.",
  },
  {
    title: "Projects of Every Size",
    description:
      "From kitchens and bathrooms to complete home remodels, financing can help bring your vision to life.",
  },
  {
    title: "Trusted Lending Partners",
    description:
      "We'll help connect you with experienced financing professionals who understand remodeling projects.",
  },
];

export function Financing() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        eyebrowRef.current,
        titleRef.current,
        textRef.current,
        buttonRef.current,
        ...cardsRef.current,
      ];

      elements.forEach((element, index) => {
        if (!element) return;

        const isCard = index >= 4;

        gsap.set(element, {
          opacity: 0,
          y: isCard ? 28 : 36,
          scale: isCard ? 0.98 : 1,
        });

        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 70%",
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="financing"
      className="overflow-hidden bg-ivory py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="text-center">
          <p
            ref={eyebrowRef}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-gold"
          >
            Financing
          </p>

          <h2
            ref={titleRef}
            className="mx-auto mt-5 max-w-4xl text-display-lg text-charcoal"
          >
            Make Your Dream Home Possible.
          </h2>

          <div ref={textRef}>
  <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
    Flexible financing can help you begin your renovation sooner without
    compromising your vision. Through our preferred financing partner,
    HFS, you can explore options for kitchen remodels, bathroom
    renovations, and complete home transformations that fit your goals
    and budget.
  </p>
</div>

          <a
            ref={buttonRef}
            href="https://www.hfsfinancial.net/promo/69ce9f75b096b4d505ef344c"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-full
              bg-gold
              px-7
              text-sm
              font-semibold
              text-charcoal
              shadow-gold
              transition
              duration-250
              hover:-translate-y-0.5
              hover:bg-gold-light
            "
          >
            Explore Financing Options
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              key={feature.title}
              className="
                group
                relative
                flex
                min-h-[350px]
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.06]
                bg-[linear-gradient(145deg,#2A2A2A_0%,#1A1A1A_55%,#171717_100%)]
                p-12
                text-center
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-[linear-gradient(145deg,#303030_0%,#1E1E1E_55%,#1A1A1A_100%)]
                hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
              "
            >
              {/* Soft highlight */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.09),transparent_38%)]
                  opacity-70
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                aria-hidden="true"
              />

              {/* Material finish */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.025)_48%,transparent_80%)]
                "
                aria-hidden="true"
              />

              <div className="relative -translate-y-4 max-w-sm">
                <div
                  className="mx-auto h-px w-16 bg-gold/45"
                  aria-hidden="true"
                />

                <h3 className="mt-10 font-display text-4xl leading-tight text-ivory">
                  {feature.title}
                </h3>

                <p className="mt-6 text-base leading-8 text-ivory/70">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}