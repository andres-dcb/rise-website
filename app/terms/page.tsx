import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Terms of Service | RISE Remodeling & Renovations",
  description:
    "Terms of Service for the RISE Remodeling & Renovations website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <main className="min-h-screen bg-ivory text-charcoal">
        {/* Header */}
        <header className="border-b border-charcoal/10">
          <Container>
            <div className="flex min-h-24 items-center justify-between gap-8">
              <Link
                href="/"
                className="inline-flex items-center gap-4 transition-colors duration-300 hover:text-gold"
                aria-label="RISE Remodeling & Renovations home"
              >
                <span className="font-display text-3xl">RISE</span>

                <span className="hidden border-l border-charcoal/15 pl-4 text-[10px] uppercase leading-tight tracking-[0.14em] text-charcoal/55 sm:block">
                  Remodeling &
                  <br />
                  Renovations
                </span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-gold"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to Home
              </Link>
            </div>
          </Container>
        </header>

        {/* Introduction */}
        <section className="border-b border-charcoal/10 py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Terms of Service
              </p>

              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Clear terms for using our website.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/65">
                These Terms of Service explain the conditions that apply when
                you visit the RISE Remodeling &amp; Renovations website,
                request an estimate, explore financing options, or use the
                information and resources available through our site.
              </p>

              <p className="mt-6 text-sm text-charcoal/50">
                Last updated: August 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Terms */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-4xl">
              <LegalSection number="01" title="Acceptance of These Terms">
                <p>
                  By accessing or using the RISE Remodeling &amp; Renovations
                  website, you agree to these Terms of Service and our Privacy
                  Policy.
                </p>

                <p>
                  If you do not agree with these terms, please discontinue use
                  of the website.
                </p>
              </LegalSection>

              <LegalSection number="02" title="About This Website">
                <p>
                  This website provides general information about RISE
                  Remodeling &amp; Renovations, our remodeling and renovation
                  services, completed projects, financing resources, service
                  areas, and methods for contacting our team.
                </p>

                <p>
                  Website content is provided for general informational and
                  promotional purposes. It does not replace a project-specific
                  consultation, written proposal, estimate, construction
                  agreement, or other signed contract.
                </p>
              </LegalSection>

              <LegalSection
                number="03"
                title="Estimate and Contact Requests"
              >
                <p>
                  You may use our website to request a free estimate or provide
                  information about a potential remodeling or renovation
                  project.
                </p>

                <p>
                  Submitting an inquiry does not create a contractor-client
                  relationship, guarantee that RISE will accept the project, or
                  obligate either party to enter into an agreement.
                </p>

                <p>
                  Any estimate, timeline, pricing discussion, or preliminary
                  project information is subject to further review, site
                  conditions, material availability, project scope, permitting
                  requirements, and a written agreement signed by the
                  appropriate parties.
                </p>
              </LegalSection>

              <LegalSection
                number="04"
                title="Project Information and Pricing"
              >
                <p>
                  Examples of services, project descriptions, photographs,
                  financing options, timelines, and other information displayed
                  on this website are illustrative and may not reflect the
                  exact price, schedule, materials, or scope of a future
                  project.
                </p>

                <p>
                  Remodeling costs and timelines vary based on property
                  conditions, design selections, labor requirements,
                  inspections, permits, material availability, change orders,
                  and other project-specific factors.
                </p>

                <p>
                  Final obligations will be governed by the written agreement
                  executed for the applicable project.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Financing Information">
                <p>
                  RISE Remodeling &amp; Renovations may provide access to
                  third-party financing resources, including options offered
                  through our preferred financing partner, HFS Financial.
                </p>

                <p>
                  Financing is provided by the applicable third-party lender or
                  financing company, not by RISE. Approval, rates, terms, fees,
                  eligibility, and repayment obligations are determined by the
                  financing provider.
                </p>

                <p>
                  RISE does not guarantee financing approval or any particular
                  financing terms. When you follow a financing link, your use
                  of that provider&apos;s website is governed by its own terms,
                  policies, and application requirements.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Third-Party Links and Services">
                <p>
                  Our website may link to third-party websites or services,
                  including financing providers, Google Maps, email services,
                  social platforms, and other resources.
                </p>

                <p>
                  These links are provided for convenience. RISE does not
                  control and is not responsible for the availability,
                  security, accuracy, terms, privacy practices, or content of
                  third-party websites.
                </p>
              </LegalSection>

              <LegalSection number="07" title="Website Content and Ownership">
                <p>
                  Unless otherwise stated, the website design, branding, text,
                  graphics, photographs, project images, logos, videos, and
                  other content are owned by or licensed to RISE Remodeling
                  &amp; Renovations and are protected by applicable
                  intellectual-property laws.
                </p>

                <p>
                  You may view and use the website for personal,
                  non-commercial purposes. You may not reproduce, distribute,
                  modify, publish, sell, scrape, repurpose, or commercially use
                  website content without prior written permission from RISE.
                </p>
              </LegalSection>

              <LegalSection
                number="08"
                title="Project Photography and Portfolio Content"
              >
                <p>
                  Project photographs and descriptions are intended to
                  demonstrate examples of our work, craftsmanship, and design
                  capabilities.
                </p>

                <p>
                  Results vary by property, budget, materials, existing
                  conditions, design choices, and project scope. Portfolio
                  images do not guarantee that another project will produce
                  identical results.
                </p>
              </LegalSection>

              <LegalSection number="09" title="Acceptable Website Use">
                <p>
                  You agree not to use the website for unlawful, fraudulent,
                  abusive, or harmful purposes.
                </p>

                <p>You may not attempt to:</p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    Disrupt, damage, overload, or interfere with the website.
                  </li>
                  <li>
                    Gain unauthorized access to the website, server, accounts,
                    or connected systems.
                  </li>
                  <li>
                    Submit false, misleading, malicious, or automated contact
                    requests.
                  </li>
                  <li>
                    Introduce viruses, harmful code, or other disruptive
                    technology.
                  </li>
                  <li>
                    Use website content in a way that infringes the rights of
                    RISE or another party.
                  </li>
                </ul>
              </LegalSection>

              <LegalSection
                number="10"
                title="Website Availability and Accuracy"
              >
                <p>
                  We work to keep the website accurate, secure, and available,
                  but we do not guarantee that it will always operate without
                  interruption, delay, technical error, or outdated
                  information.
                </p>

                <p>
                  We may update, remove, suspend, or modify website content,
                  features, services, or availability at any time.
                </p>
              </LegalSection>

              <LegalSection number="11" title="No Website Warranty">
                <p>
                  The website and its content are provided on an “as available”
                  basis for general informational purposes.
                </p>

                <p>
                  To the extent permitted by applicable law, RISE disclaims
                  warranties regarding the completeness, accuracy,
                  availability, or suitability of website content for a
                  particular purpose.
                </p>

                <p>
                  This section applies only to the website and does not replace
                  any express warranties included in a separately signed
                  construction or remodeling agreement.
                </p>
              </LegalSection>

              <LegalSection number="12" title="Limitation of Liability">
                <p>
                  To the extent permitted by applicable law, RISE Remodeling
                  &amp; Renovations will not be liable for indirect,
                  incidental, consequential, special, or punitive damages
                  arising solely from your use of, or inability to use, this
                  website or third-party websites linked from it.
                </p>

                <p>
                  Nothing in these Terms is intended to limit rights or
                  obligations that cannot legally be limited under applicable
                  law or under a separately executed written agreement.
                </p>
              </LegalSection>

              <LegalSection number="13" title="Privacy">
                <p>
                  Information submitted through the website is handled in
                  accordance with our Privacy Policy.
                </p>

                <p>
                  Please review the Privacy Policy to understand what
                  information we collect, how it may be used, and the choices
                  available to you.
                </p>

                <Link
                  href="/privacy"
                  className="inline-flex font-semibold text-gold transition-opacity duration-300 hover:opacity-70"
                >
                  Read our Privacy Policy
                </Link>
              </LegalSection>

              <LegalSection number="14" title="Governing Law">
                <p>
                  These Terms and your use of the website are governed by the
                  laws of the State of Texas, without regard to
                  conflict-of-law principles.
                </p>

                <p>
                  Any dispute relating specifically to these website Terms will
                  be handled in a court of competent jurisdiction in or serving
                  Bexar County, Texas, unless applicable law requires
                  otherwise.
                </p>
              </LegalSection>

              <LegalSection number="15" title="Changes to These Terms">
                <p>
                  We may update these Terms periodically to reflect changes to
                  our website, services, business practices, or applicable
                  requirements.
                </p>

                <p>
                  The current version will be posted on this page with an
                  updated revision date. Continued use of the website after an
                  update means you accept the revised Terms.
                </p>
              </LegalSection>

              <LegalSection number="16" title="Contact Us" last>
                <p>
                  Questions about these Terms of Service may be directed to
                  RISE Remodeling &amp; Renovations.
                </p>

                <div className="mt-6 space-y-2">
                  <p>
                    <strong>RISE Remodeling &amp; Renovations</strong>
                  </p>

                  <p>
                    4372 N Loop 1604 W, Suite 104-D
                    <br />
                    Shavano Park, TX 78249
                  </p>

                  <p>
                    <a
                      href="mailto:team@risedevelopersa.com"
                      className="transition-colors duration-300 hover:text-gold"
                    >
                      team@risedevelopersa.com
                    </a>
                  </p>

                  <p>
                    <a
                      href="tel:+12103832159"
                      className="transition-colors duration-300 hover:text-gold"
                    >
                      (210) 383-2159
                    </a>
                  </p>
                </div>
              </LegalSection>

              <div className="mt-16 flex flex-col gap-5 border-t border-charcoal/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors duration-300 hover:text-gold"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Return to RISE Remodeling &amp; Renovations
                </Link>

                <Link
                  href="/privacy"
                  className="text-sm font-semibold text-gold transition-opacity duration-300 hover:opacity-70"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

function LegalSection({
  number,
  title,
  children,
  last = false,
}: {
  number: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`grid gap-6 py-10 sm:grid-cols-[80px_1fr] sm:gap-10 ${
        last ? "" : "border-b border-charcoal/10"
      }`}
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-gold">
        {number}
      </p>

      <div>
        <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
          {title}
        </h2>

        <div className="mt-5 space-y-5 text-base leading-8 text-charcoal/70">
          {children}
        </div>
      </div>
    </section>
  );
}