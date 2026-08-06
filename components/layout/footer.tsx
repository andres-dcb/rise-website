import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const links = [
  ["What We Transform", "/#what-we-transform"],
  ["Our Work", "/#our-work"],
  ["Why Choose RISE", "/#about"],
  ["Our Process", "/#process"],
  ["Financing", "/#financing"],
  ["FAQ", "/#faq"],
  ["Get a Free Estimate", "/#contact"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ivory/8 bg-[#171717] py-14 text-ivory md:py-16">
      <Container>
        <div className="grid gap-14 border-b border-ivory/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.55fr_0.65fr_1fr]">
          <div>
            <Link
  href="/#main-content"
  aria-label="Return to the top of the homepage"
  className="inline-flex items-center gap-4 transition-colors duration-300 hover:text-gold"
>
  <span className="font-display text-4xl">RISE</span>

  <span className="border-l border-ivory/15 pl-4 text-[11px] uppercase tracking-[0.14em] text-ivory/55">
    Remodeling &<br />
    Renovations
  </span>
</Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-gold">
  Constructed to Last. Designed to Impress.
</p>

<p className="mt-6 max-w-sm text-sm leading-7 text-ivory">
  Beautiful kitchens and bathrooms, designed around the way you live.
</p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-label text-gold">Explore</p>
            <ul className="space-y-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link className="footer-link" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="mb-4 text-label text-gold">Visit or Contact</p>
            <p className="leading-7 text-ivory">
              4372 N Loop 1604 W, Suite 104-D
              <br />
              Shavano Park, TX 78249
            </p>
            <a
              className="footer-link mt-4 block"
              href="mailto:team@risedevelopersa.com"
            >
              team@risedevelopersa.com
            </a>
            <a className="footer-link mt-2 block" href="tel:+12103832159">
              (210) 383-2159
            </a>
            <a
  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
  href="https://maps.app.goo.gl/RSdZH5QU8UbLf6KZ6"
  target="_blank"
  rel="noopener noreferrer"
>
              Get Directions <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RISE Remodeling & Renovations.</p>
          <p>Serving Greater San Antonio.</p>
        </div>
      </Container>
    </footer>
  );
}
