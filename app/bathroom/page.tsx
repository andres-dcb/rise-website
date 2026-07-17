import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function Page() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-header">
        <Section>
          <Heading eyebrow="RISE" title="Bathroom Remodeling" description="Thoughtful spaces that bring comfort, function, and lasting beauty." />
        </Section>
      </main>
      <Footer />
    </>
  );
}
