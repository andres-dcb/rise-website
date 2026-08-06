"use client";
import { ArrowDownRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_ASSETS } from "@/lib/site-assets";
import { useEffect, useRef } from "react";
import { fadeUp } from "@/lib/animations/reveal";
import { WhatWeTransform } from "@/components/sections/what-we-transform";
import { OurWork } from "@/components/sections/our-work";
import { WhyChooseRise } from "@/components/sections/why-choose-rise";
import { Process } from "@/components/sections/process";
import { Financing } from "@/components/sections/financing";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!headlineLine1Ref.current) return;

fadeUp(headlineLine1Ref.current, {
  delay: 0.30,
  duration: 0.9,
});

fadeUp(headlineLine2Ref.current, {
  delay: 0.65,
  duration: 0.9,
});

fadeUp(descriptionRef.current, {
  delay: 0.90,
  duration: 0.8,
});

fadeUp(locationRef.current, {
  delay: 1.05,
  duration: 0.8,
});

fadeUp(buttonsRef.current, {
  delay: 1.20,
  duration: 0.8,
});
}, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-ivory">
          <video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
>
  <source src={SITE_ASSETS.hero.video} type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div
  className="absolute inset-0 bg-black/55"
  aria-hidden="true"
/>

<div
  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(186,145,72,0.18),transparent_35%)]"
  aria-hidden="true"
/>
          <Container
  className="relative z-10 pb-16 pt-36 md:pb-24 lg:pb-28"
>
            <p className="mb-6 text-label text-gold">RISE Remodeling & Renovations</p>
<h1 className="max-w-[18ch] text-display-xl">
  <span
    ref={headlineLine1Ref}
    className="block"
  >
    Constructed to Last.
  </span>

  <span
    ref={headlineLine2Ref}
    className="mt-2 block text-[0.96em] text-gold"
  >
    Designed to Impress.
  </span>
</h1>
            <p
  ref={descriptionRef}
  className="mt-8 max-w-2xl text-body-lg text-ivory/76"
>
              Beautiful kitchens and bathrooms, designed around the way you
              live.
            </p>
            <p
  ref={locationRef}
  className="mt-3 text-sm tracking-[0.14em] text-ivory/60 uppercase"
>
              Serving Greater San Antonio
            </p>
            <div
  ref={buttonsRef}
  className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
>
  <ButtonLink href="#contact">Get a Free Estimate</ButtonLink>

<ButtonLink href="#what-we-transform" variant="text">
  What We Transform
  <ArrowDownRight aria-hidden="true" />
</ButtonLink>
</div>
          </Container>
        </section>

       <WhatWeTransform />

       <OurWork />

       <WhyChooseRise />

       <Process />

       <Financing />

       <FAQ />

       <Contact />

       </main>

       <Footer />
    </>
  );
}
