"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  links: {
    href: string;
    label: string;
  }[];
};

export function MobileMenu({
  open,
  setOpen,
  links,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  if (
    !panelRef.current ||
    !backdropRef.current ||
    !navRef.current ||
    !footerRef.current
  ) {
    return;
  }

  const panel = panelRef.current;
  const backdrop = backdropRef.current;
  const menuItems = Array.from(navRef.current.children);
  const footer = footerRef.current;
  if (!open) {
  gsap.set(backdrop, {
    opacity: 0,
  });

  gsap.set(panel, {
    opacity: 0,
    y: -20,
  });

  gsap.set(menuItems, {
    opacity: 0,
    y: 20,
  });

  gsap.set(footer, {
    opacity: 0,
    y: 20,
  });

  return;
}

  gsap.killTweensOf([panel, backdrop, menuItems, footer]);

  if (open) {
    gsap.set(backdrop, {
      opacity: 0,
    });

    gsap.set(panel, {
      opacity: 0,
      y: -24,
    });

    gsap.set(menuItems, {
      opacity: 0,
      y: 20,
    });

    gsap.set(footer, {
      opacity: 0,
      y: 16,
    });

    const tl = gsap.timeline();

    tl.to(backdrop, {
      opacity: 1,
      duration: 0.25,
      ease: "power2.out",
    })

      .to(
        panel,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0
      )

      .to(
        menuItems,
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.25"
      )

      .to(
        footer,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        },
        "-=0.2"
      );
  } else {
    const tl = gsap.timeline();

    tl.to(footer, {
      opacity: 0,
      y: 12,
      duration: 0.15,
    })

      .to(
        menuItems,
        {
          opacity: 0,
          y: 16,
          stagger: -0.04,
          duration: 0.15,
        },
        0
      )

      .to(
        panel,
        {
          opacity: 0,
          y: -18,
          duration: 0.28,
          ease: "power2.in",
        },
        0.08
      )

      .to(
        backdrop,
        {
          opacity: 0,
          duration: 0.18,
        },
        0.08
      );
  }
}, [open]);

  return (
    <>
      <div
  id="mobile-navigation"
className={cn(
  "fixed inset-0 z-40 min-[1180px]:hidden",
  open
    ? "pointer-events-auto visible"
    : "pointer-events-none invisible"
)}
>
  {/* Background overlay */}
  <div
  ref={backdropRef}
  className="absolute inset-0 bg-black/25 backdrop-blur-sm"
/>

  {/* Floating panel */}
  <div
  ref={panelRef}
  className="
absolute
left-0
right-0
top-header
mx-3
h-[78svh]
min-h-[620px]
max-h-[760px]
overflow-hidden
rounded-b-[42px]
border
border-white/10
bg-charcoal/95
backdrop-blur-xl
shadow-[0_30px_90px_rgba(0,0,0,0.45)]
"
>
    <Container className="flex h-full flex-col justify-between pt-8 pb-10">

      {/* Navigation */}
      <nav
  ref={navRef}
  className="mx-auto flex w-full max-w-xl flex-col"
  aria-label="Mobile"
>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="group border-b border-white/8 py-7"
          >
            <span className="flex items-center justify-between">

<span
  className="
  font-display
  text-[2.5rem]
  leading-none
  tracking-tight
  text-ivory
  transition-all
  duration-300
  group-hover:translate-x-2
  group-hover:text-gold
  "
>
                {link.label}
              </span>

              <span
                className="
                h-px
                w-0
                bg-gold
                transition-all
                duration-300
                group-hover:w-10
                "
              />
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div
  ref={footerRef}
  className="mx-auto w-full max-w-xl text-ivory"
>

        <p className="mb-5 text-sm uppercase tracking-[0.18em] text-ivory/45">
        Let&apos;s build something exceptional.
        </p>

        <a
  href="tel:+12103832159"
  className="
inline-block
text-2xl
font-light
transition-colors
duration-300
hover:text-gold
"
>
          (210) 383-2159
        </a>

        <ButtonLink
          href="/contact"
          className="mt-8 w-full"
        >
          Get a Free Estimate
        </ButtonLink>

      </div>

    </Container>
  </div>
</div>
    </>
  );
}
