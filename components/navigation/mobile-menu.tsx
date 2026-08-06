"use client";

import Link from "next/link";
import {
  type Dispatch,
  type SetStateAction,
  useLayoutEffect,
  useRef,
} from "react";
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

    gsap.killTweensOf([panel, backdrop, menuItems, footer]);

    if (!open) {
      gsap.set(backdrop, {
        opacity: 0,
      });

      gsap.set(panel, {
        opacity: 0,
        y: -18,
      });

      gsap.set(menuItems, {
        opacity: 0,
        y: 16,
      });

      gsap.set(footer, {
        opacity: 0,
        y: 14,
      });

      return;
    }

    gsap.set(backdrop, {
      opacity: 0,
    });

    gsap.set(panel, {
      opacity: 0,
      y: -20,
    });

    gsap.set(menuItems, {
      opacity: 0,
      y: 16,
    });

    gsap.set(footer, {
      opacity: 0,
      y: 14,
    });

    const timeline = gsap.timeline();

    timeline
      .to(backdrop, {
        opacity: 1,
        duration: 0.22,
        ease: "power2.out",
      })
      .to(
        panel,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        },
        0,
      )
      .to(
        menuItems,
        {
          opacity: 1,
          y: 0,
          stagger: 0.055,
          duration: 0.32,
          ease: "power3.out",
        },
        "-=0.2",
      )
      .to(
        footer,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.12",
      );

    return () => {
      timeline.kill();
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 z-40 min-[1180px]:hidden",
        open
          ? "pointer-events-auto visible"
          : "pointer-events-none invisible",
      )}
    >
      {/* Background overlay */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        ref={panelRef}
        className="
          absolute
          inset-x-3
          top-header
          max-h-[calc(100svh-6.5rem)]
          overflow-y-auto
          rounded-b-[32px]
          border
          border-white/10
          bg-charcoal/95
          shadow-[0_24px_70px_rgba(0,0,0,0.42)]
          backdrop-blur-xl
        "
      >
        <Container className="flex flex-col px-6 pb-7 pt-5 sm:px-8">
          {/* Navigation */}
          <nav
            ref={navRef}
            className="flex w-full flex-col"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group border-b border-white/8 py-5"
              >
                <span className="flex items-center justify-between gap-5">
                  <span
                    className="
                      font-display
                      text-[2rem]
                      leading-[1.05]
                      tracking-[-0.02em]
                      text-ivory
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-gold
                      sm:text-[2.2rem]
                    "
                  >
                    {link.label}
                  </span>

                  <span
                    className="
                      h-px
                      w-0
                      shrink-0
                      bg-gold
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div
            ref={footerRef}
            className="mt-6 w-full text-ivory"
          >
            <p className="mb-3 text-xs uppercase leading-5 tracking-[0.18em] text-ivory/50">
              Let&apos;s build something exceptional.
            </p>

            <a
              href="tel:+12103832159"
              className="
                inline-block
                text-xl
                font-light
                transition-colors
                duration-300
                hover:text-gold
              "
            >
              (210) 383-2159
            </a>

            <ButtonLink
              href="/#contact"
              onClick={closeMenu}
              className="mt-5 w-full"
            >
              Get a Free Estimate
            </ButtonLink>
          </div>
        </Container>
      </div>
    </div>
  );
}