"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Kitchen Remodel",
    location: "Stone Oak",
    image: "/images/projects/project-kitchen.jpg",
  },
  {
    title: "Kitchen Remodel",
    location: "Shavano Park",
    image: "/images/projects/project-kitchen-2.jpg",
  },
  {
    title: "Primary Bathroom Remodel",
    location: "Alamo Heights",
    image: "/images/projects/project-bathroom.jpg",
  },
  {
    title: "Primary Bathroom Remodel",
    location: "The Dominion",
    image: "/images/projects/project-bathroom-2.jpg",
  },
  {
    title: "Open Kitchen & Living Remodel",
    location: "San Antonio",
    image: "/images/projects/project-open-concept.jpg",
  },
  {
    title: "Living Room Remodel",
    location: "Shavano Park",
    image: "/images/projects/project-living-room.JPEG",
  },
];

export function OurWork() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const locationRefs = useRef<(HTMLParagraphElement | null)[]>([]);

useLayoutEffect(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    const image = card.querySelector("img");
    if (!image) return;

    const title = titleRefs.current[index];
    const location = locationRefs.current[index];

    if (!title || !location) return;

    gsap.set(image, {
      scale: 1.1,
      opacity: 0.75,
    });

    gsap.set([title, location], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.2,
      },
    });

    tl.to(image, {
      scale: 1,
      opacity: 1,
      ease: "power3.out",
    })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        0.15
      )
      .to(
        location,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        0.22
      );
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <section
      id="our-work"
      className="bg-charcoal py-36 lg:py-44 text-ivory"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Our Work
          </p>

          <h2 className="mt-5 text-display-lg text-ivory">
            Craftsmanship you can see in every detail.
          </h2>

          <p className="mt-7 text-body-lg text-ivory/70">
            Every project reflects our commitment to thoughtful design,
            quality materials, and exceptional craftsmanship. From kitchens
            and bathrooms to complete interior transformations, we build
            spaces that feel timeless, functional, and beautifully lived in.
          </p>
        </div>

        <div className="mt-32 space-y-32">
          {projects.map((project, index) => (
            <article key={index}>
              <div
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative aspect-[16/9] overflow-hidden rounded-[36px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-8">
                <h3
  ref={(el) => {
    titleRefs.current[index] = el;
  }}
  className="font-display text-5xl text-ivory"
>
                  {project.title}
                </h3>

                <p
  ref={(el) => {
    locationRefs.current[index] = el;
  }}
  className="mt-3 text-sm uppercase tracking-[0.20em] text-gold"
>
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}