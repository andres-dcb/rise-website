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
          <Heading eyebrow="RISE" title="Kitchen Remodeling" description="Designed around the way your family gathers, cooks, and lives." />
        </Section>
      </main>
      <Footer />
    </>
  );
}
