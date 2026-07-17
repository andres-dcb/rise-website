import { ArrowDownRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-ivory">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(186,145,72,0.18),transparent_35%),linear-gradient(135deg,#262522_0%,#161614_100%)]"
            aria-hidden="true"
          />
          <Container className="relative z-10 pb-16 pt-36 md:pb-24 lg:pb-28">
            <p className="mb-6 text-label text-gold">RISE Remodeling & Renovations</p>
            <h1 className="max-w-5xl text-display-xl">
              Constructed to Last.
              <span className="block text-gold">Designed to Impress.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg text-ivory/76">
              Beautiful kitchens and bathrooms, designed around the way you
              live.
            </p>
            <p className="mt-3 text-sm tracking-[0.14em] text-ivory/60 uppercase">
              Serving Greater San Antonio
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
              <ButtonLink href="#portfolio" variant="text">
                Explore Our Work <ArrowDownRight aria-hidden="true" />
              </ButtonLink>
            </div>
          </Container>
        </section>

        <Section>
          <Heading
            eyebrow="The RISE Promise"
            title="A thoughtful remodeling experience, from the first conversation to the final detail."
            description="This foundation establishes the visual system, spacing, typography, navigation, interaction patterns, and reusable components for every page that follows."
          />
        </Section>

        <Section id="portfolio" tone="charcoal">
          <Heading
            eyebrow="Foundation Preview"
            title="The digital showroom is ready to be assembled."
            description="Sprint 2 will replace this preview with the cinematic hero experience and final project imagery."
            inverse
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
