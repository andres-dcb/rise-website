import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main id="main-content" className="pt-header">
        <Section>
          <Container>
            <Heading
              eyebrow="Contact RISE"
              title="Let’s build something beautiful together."
              description="The estimate form will be completed in a later sprint. This route confirms the shared layout and navigation architecture."
            />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
