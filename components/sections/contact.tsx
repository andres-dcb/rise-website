"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  success?: boolean;
  message?: string;
};

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        eyebrowRef.current,
        titleRef.current,
        descriptionRef.current,
        detailsRef.current,
        formRef.current,
      ];

      elements.forEach((element, index) => {
        if (!element) return;

        const isForm = index === 4;

        gsap.set(element, {
          opacity: 0,
          y: isForm ? 28 : 36,
          scale: isForm ? 0.985 : 1,
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
            end: "top 68%",
            scrub: 1.1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("submitting");
    setStatusMessage("");

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Your inquiry could not be sent. Please try again.",
        );
      }

      setFormStatus("success");
      setStatusMessage(
        "Thank you. Your project details were sent successfully. Our team will contact you soon.",
      );

      form.reset();
    } catch (error) {
      setFormStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your inquiry could not be sent. Please try again or call us directly.",
      );
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="overflow-hidden bg-charcoal py-24 text-ivory sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:pt-6">
            <p
              ref={eyebrowRef}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-gold"
            >
              Get a Free Estimate
            </p>

            <h2
              ref={titleRef}
              className="mt-5 max-w-[11ch] text-display-lg text-ivory"
            >
              Let&apos;s build something exceptional.
            </h2>

            <p
              ref={descriptionRef}
              className="mt-7 max-w-xl text-base leading-8 text-ivory/70 sm:text-lg"
            >
              Tell us about your home, your goals, and the project you have in
              mind. We&apos;ll review the details and contact you to discuss the
              next steps.
            </p>

            <div
              ref={detailsRef}
              className="mt-12 space-y-6 border-t border-ivory/15 pt-8"
            >
              <a
                href="tel:+12103832159"
                className="group flex w-fit items-center gap-4 text-ivory/75 transition-colors duration-300 hover:text-gold"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-ivory/15 transition-colors duration-300 group-hover:border-gold/50">
                  <Phone className="size-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-gold">
                    Call Us
                  </span>

                  <span className="mt-1 block text-lg">(210) 383-2159</span>
                </span>
              </a>

              <a
                href="mailto:team@risedevelopersa.com"
                className="group flex w-fit items-center gap-4 text-ivory/75 transition-colors duration-300 hover:text-gold"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-ivory/15 transition-colors duration-300 group-hover:border-gold/50">
                  <Mail className="size-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-gold">
                    Email Us
                  </span>

                  <span className="mt-1 block text-lg">
                    team@risedevelopersa.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-ivory/10 bg-ivory p-7 text-charcoal shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:p-9 lg:p-12"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-charcoal"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-3 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-semibold text-charcoal"
                >
                  Phone
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-3 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
                  placeholder="(210) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-charcoal"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-3 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-project-type"
                  className="text-sm font-semibold text-charcoal"
                >
                  Project Type
                </label>

                <select
                  id="contact-project-type"
                  name="projectType"
                  required
                  defaultValue=""
                  className="mt-3 w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-base text-charcoal outline-none transition-colors focus:border-gold"
                >
                  <option value="" disabled>
                    Select a project
                  </option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="interior">Interior Remodeling</option>
                  <option value="full-home">Full Home Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-charcoal"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-3 w-full resize-none rounded-2xl border border-charcoal/15 bg-white/55 px-5 py-4 text-base leading-7 text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
                placeholder="Share the type of work you are considering, your goals, and any timeline details."
              />
            </div>

            <div className="mt-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm leading-6 text-charcoal/55">
                  We&apos;ll use this information only to respond to your
                  project inquiry.
                </p>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="shrink-0"
                >
                  {formStatus === "submitting"
                    ? "Sending..."
                    : "Get a Free Estimate"}
                </Button>
              </div>

              <div
                aria-live="polite"
                className={`mt-5 min-h-6 text-sm font-medium ${
                  formStatus === "success"
                    ? "text-green-700"
                    : formStatus === "error"
                      ? "text-red-700"
                      : "text-transparent"
                }`}
              >
                {statusMessage || "\u00A0"}
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}