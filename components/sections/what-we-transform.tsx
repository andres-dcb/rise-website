"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";

const services = [
  {
    id: "kitchens",
    title: "Kitchens",
    subtitle: "Designed for the way you live.",
    description:
      "From custom cabinetry and countertops to thoughtful layouts and premium finishes, we create kitchens made for cooking, gathering, and everyday living.",
    image: "/images/services/kitchen-remodel.JPEG",
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    subtitle: "Comfort meets everyday luxury.",
    description:
      "From guest bathroom updates to complete primary suite transformations, every detail is designed for lasting comfort, function, and style.",
    image: "/images/services/bathroom-remodel.JPEG",
  },
  {
    id: "interior-remodeling",
    title: "Interior Remodeling",
    subtitle: "Beautiful spaces in your home.",
    description:
      "Living areas, offices, flooring, trim, drywall, painting, and complete interior transformations managed with care from start to finish.",
    image: "/images/services/interior-remodeling.JPEG",
  },
];

export function WhatWeTransform() {
  return (
    <section
      id="what-we-transform"
      className="bg-ivory py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            What We Transform
          </p>

          <h2 className="mt-5 text-display-lg text-charcoal">
            Spaces designed for everyday living.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">
            From complete kitchen renovations to refined bathrooms and
            thoughtful interior remodeling, every project is planned around
            craftsmanship, communication, and long-term value.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              id={service.id}
              key={service.id}
              className="group relative min-h-[580px] overflow-hidden rounded-3xl bg-charcoal shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={service.image}
                alt={`${service.title} remodeling by RISE Remodeling & Renovations`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 transition-colors duration-500 group-hover:from-black/95 group-hover:via-black/45" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-7 text-ivory sm:p-8">
                <p className="text-sm font-medium text-gold">
                  {service.subtitle}
                </p>

                <h3 className="mt-3 font-display text-4xl font-medium leading-none tracking-[-0.02em]">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-6 text-ivory/80">
                  {service.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}