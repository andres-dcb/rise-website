import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

const links = [
  ["Kitchen", "/kitchen"],
  ["Bathroom", "/bathroom"],
  ["Portfolio", "/portfolio"],
  ["Financing", "/financing"],
  ["About", "/about"],
  ["FAQ", "/faq"],
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-ivory md:py-20">
      <Container>
        <div className="grid gap-12 border-b border-ivory/12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
          <div>
            <p className="font-display text-4xl">RISE</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ivory/62">
              Constructed to Last. Designed to Impress.
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
            <p className="leading-7 text-ivory/72">
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
              href="https://maps.google.com/?q=4372+N+Loop+1604+W+Suite+104-D+Shavano+Park+TX+78249"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RISE Remodeling & Renovations.</p>
          <p>Serving Greater San Antonio.</p>
        </div>
      </Container>
    </footer>
  );
}
