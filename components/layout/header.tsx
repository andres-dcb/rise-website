"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { MobileMenu } from "@/components/navigation/mobile-menu";

const links = [
  { href: "#our-work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#financing", label: "Financing" },
  { href: "#about", label: "Why RISE" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const update = () => setScrolled(window.scrollY > 80);
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
  <>
    <header
      className={cn(
        "fixed inset-x-0 z-50 h-header border-b transition-all duration-500 ease-out",
        scrolled ? "top-0" : "top-3",
        scrolled
          ? "rounded-b-xl border border-charcoal/6 bg-ivory text-charcoal backdrop-blur-2xl shadow-[0_14px_44px_rgba(0,0,0,0.11)]"
          : "border-transparent bg-transparent text-ivory",
      )}
    >
    <Container
      className={cn(
        "h-full flex items-center justify-between transition-all duration-500",
        scrolled ? "rounded-b-xl" : "rounded-2xl"
      )}
    >
<Link
  href="/"
  className="group inline-flex items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-[2px]"
  aria-label="RISE Remodeling & Renovations home"
>
          <span className="font-display text-2xl leading-none font-semibold tracking-[0.12em] transition-all duration-500">
            RISE
          </span>
          <span className="hidden h-6 w-px bg-current/25 sm:block" />
          <span className="hidden max-w-28 text-[0.58rem] leading-tight tracking-[0.13em] uppercase opacity-70 sm:block">
            Remodeling & Renovations
          </span>
        </Link>

        <nav className="hidden items-center gap-8 min-[1180px]:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
nav-link
text-xs
tracking-[0.08em]
uppercase
transition-all
duration-300
hover:-translate-y-[1px]
hover:opacity-100
"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 min-[1180px]:flex">
<a
  href="tel:+12103832159"
  className="group inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 ease-out hover:-translate-y-[2px]"
>
  <Phone
    className="size-4"
    aria-hidden="true"
  />

  <span>(210) 383-2159</span>
</a>
          <ButtonLink href="/#contact" size="sm">
  Get a Free Estimate
</ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center min-[1180px]:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
    </header>

    <MobileMenu
      open={open}
      setOpen={setOpen}
      links={links}
    />
  </>
);
}