import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Privacy Policy | RISE Remodeling & Renovations",
  description:
    "Privacy Policy for the RISE Remodeling & Renovations website.",
};

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </p>

              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Your privacy matters to us.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/65">
                This Privacy Policy explains how RISE Remodeling &amp;
                Renovations collects, uses, and protects information you
                provide when using our website or contacting us about a
                remodeling or renovation project.
              </p>

              <p className="mt-6 text-sm text-charcoal/50">
                Last updated: August 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Policy */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-4xl">
              <LegalSection number="01" title="Information We Collect">
                <p>
                  When you request an estimate or contact RISE Remodeling
                  &amp; Renovations through our website, we may collect
                  information that you voluntarily provide, including your
                  name, phone number, email address, project type, and details
                  about the remodeling or renovation project you are
                  considering.
                </p>

                <p>
                  We may also receive information when you contact us directly
                  by phone or email.
                </p>
              </LegalSection>

              <LegalSection number="02" title="How We Use Your Information">
                <p>
                  We use the information you provide primarily to respond to
                  your inquiry, understand your project, communicate with you,
                  schedule consultations, prepare or discuss estimates, and
                  provide information about our remodeling and renovation
                  services.
                </p>

                <p>
                  We may also use information to operate and improve our
                  website, understand how visitors interact with our services,
                  maintain business records, and protect the security and
                  integrity of our website.
                </p>
              </LegalSection>

              <LegalSection
                number="03"
                title="Estimate and Contact Form Submissions"
              >
                <p>
                  Information submitted through our Get a Free Estimate form
                  is transmitted to RISE Remodeling &amp; Renovations so our
                  team can review your project and contact you regarding your
                  inquiry.
                </p>

                <p>
                  Submitting the form does not create a contractor-client
                  relationship, obligate you to hire RISE, or constitute a
                  binding estimate or construction agreement.
                </p>
              </LegalSection>

              <LegalSection number="04" title="How We Share Information">
                <p>
                  We do not sell your personal information.
                </p>

                <p>
                  Information may be shared with service providers when
                  reasonably necessary to operate our website, communicate
                  with you, provide requested services, or support our
                  business operations. We may also disclose information when
                  required by law or when reasonably necessary to protect our
                  rights, customers, business, or website.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Financing">
                <p>
                  RISE Remodeling &amp; Renovations may provide links to
                  third-party financing options, including financing offered
                  through HFS Financial. If you choose to explore financing,
                  you will be directed to the financing provider&apos;s
                  website.
                </p>

                <p>
                  Information you provide directly to a financing provider is
                  governed by that provider&apos;s own privacy practices and
                  policies. RISE does not control how third-party financing
                  providers collect or process information submitted directly
                  through their websites.
                </p>
              </LegalSection>

              <LegalSection
                number="06"
                title="Website Analytics and Technical Information"
              >
                <p>
                  Our website and hosting providers may automatically collect
                  limited technical information, such as browser type, device
                  information, referring pages, approximate location, and
                  website usage information.
                </p>

                <p>
                  We may use website analytics services to understand site
                  performance and how visitors interact with our website. If
                  additional analytics or tracking technologies are introduced,
                  this policy may be updated accordingly.
                </p>
              </LegalSection>

              <LegalSection number="07" title="Third-Party Websites">
                <p>
                  Our website may contain links to third-party websites,
                  including financing providers, mapping services, and other
                  resources. Once you leave our website, the privacy practices
                  and content of those third parties are governed by their own
                  policies.
                </p>

                <p>
                  We encourage you to review the privacy policies of any
                  third-party website before providing personal information.
                </p>
              </LegalSection>

              <LegalSection number="08" title="Data Security">
                <p>
                  We take reasonable measures to protect information submitted
                  through our website. However, no website, email system, or
                  method of electronic transmission can be guaranteed to be
                  completely secure.
                </p>

                <p>
                  You should avoid submitting highly sensitive information
                  through the general project inquiry form.
                </p>
              </LegalSection>

              <LegalSection number="09" title="Data Retention">
                <p>
                  We may retain information associated with project inquiries
                  and customer communications for as long as reasonably
                  necessary to respond to requests, maintain business records,
                  provide services, resolve disputes, or satisfy legal and
                  administrative requirements.
                </p>
              </LegalSection>

              <LegalSection number="10" title="Your Choices">
                <p>
                  You may contact us if you have questions about personal
                  information you previously submitted through our website or
                  would like to request that we update or delete information,
                  subject to any information we are required or reasonably
                  need to retain for legal or legitimate business purposes.
                </p>
              </LegalSection>

              <LegalSection number="11" title="Children's Privacy">
                <p>
                  Our website and remodeling services are intended for adults
                  and are not directed toward children. We do not knowingly
                  solicit personal information from children through this
                  website.
                </p>
              </LegalSection>

              <LegalSection number="12" title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes to our website, services, business practices, or
                  applicable requirements. The current version will be posted
                  on this page with an updated revision date.
                </p>
              </LegalSection>

              <LegalSection number="13" title="Contact Us" last>
                <p>
                  If you have questions about this Privacy Policy or how
                  information submitted through our website is handled, please
                  contact RISE Remodeling &amp; Renovations.
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
    href="/terms"
    className="text-sm font-semibold text-gold transition-opacity duration-300 hover:opacity-70"
  >
    View Terms of Service
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
  children: React.ReactNode;
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