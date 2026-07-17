"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

const links = [
  { href: "/kitchen", label: "Kitchen" },
  { href: "/bathroom", label: "Bathroom" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-header border-b transition-[background-color,border-color,color] duration-400",
        scrolled
          ? "border-charcoal/10 bg-ivory/94 text-charcoal backdrop-blur-xl"
          : "border-transparent bg-transparent text-ivory",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="RISE Remodeling & Renovations home"
        >
          <span className="font-display text-2xl leading-none font-semibold tracking-[0.12em]">
            RISE
          </span>
          <span className="hidden h-6 w-px bg-current/25 sm:block" />
          <span className="hidden max-w-28 text-[0.58rem] leading-tight tracking-[0.13em] uppercase opacity-70 sm:block">
            Remodeling & Renovations
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs tracking-[0.08em] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+12103832159"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            <Phone className="size-4" aria-hidden="true" />
            (210) 383-2159
          </a>
          <ButtonLink href="/contact" size="sm">
            Get a Free Estimate
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 top-header bg-charcoal text-ivory transition duration-400 lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
      >
        <Container className="flex h-full flex-col py-10">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/12 py-4 font-display text-3xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-5">
            <a href="tel:+12103832159" className="block text-lg">
              (210) 383-2159
            </a>
            <ButtonLink href="/contact" className="w-full">
              Get a Free Estimate
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
