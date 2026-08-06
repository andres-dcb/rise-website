"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations/reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
const eyebrowRef = useRef<HTMLParagraphElement>(null);
const titleRef = useRef<HTMLHeadingElement>(null);
const textRef = useRef<HTMLParagraphElement>(null);
const buttonRef = useRef<HTMLAnchorElement>(null);

const cardsRef = useRef<(HTMLElement | null)[]>([]);
const sectionRef = useRef<HTMLElement>(null);

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

  scrollTrigger: {
    trigger: element,
    start: "top 90%",
    end: "top 70%",
    scrub: 1.15,
  },

  delay: index * 0.05,
});
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
     ref={sectionRef}
      id="financing"
      className="bg-ivory py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p
          ref={eyebrowRef}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Financing
          </p>

          <h2
          ref={titleRef}
          className="mt-5 text-display-lg text-charcoal">
            Make Your Dream Home Possible.
          </h2>

          <p
          ref={textRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
            Flexible financing can help you begin your renovation sooner
            without compromising your vision. Whether you're planning a
            kitchen remodel, bathroom renovation, or a complete home
            transformation, we'll help you explore options that fit your
            goals and budget.
          </p>

          <ButtonLink
          ref={buttonRef}
          href="#contact" className="mt-12">
            Let's Discuss Your Project
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
  ref={(el) => {
    cardsRef.current[index] = el;
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
hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
hover:bg-[linear-gradient(145deg,#303030_0%,#1E1E1E_55%,#1A1A1A_100%)]
              "
            >
              {/* Soft highlight */}
<div
  className="
    absolute inset-0
    bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_62%)]
    opacity-90
    transition-opacity
    duration-500
    group-hover:opacity-100
  "
/>

{/* Material finish */}
<div
  className="
    pointer-events-none
    absolute
    inset-[1px]
    rounded-[23px]
    border
    border-white/[0.04]
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),rgba(255,255,255,0.008)_18%,transparent_45%)]
    transition-all
    duration-700
    group-hover:border-white/[0.08]
  "
/>

              <div className="relative -translate-y-4 max-w-sm">

  <div
    className="
      mx-auto
      mb-8
      h-px
      w-16
      bg-gold/35
      transition-all
      duration-500
      group-hover:w-24
      group-hover:bg-gold
    "
  />

  <h3 className="font-display text-[2.3rem] font-medium leading-tight text-ivory transition-colors duration-300 group-hover:text-gold">
    {feature.title}
  </h3>

  <p className="mt-5 text-base leading-8 text-ivory/70 transition-colors duration-300 group-hover:text-ivory/90">
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