import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { ContactoHero } from "@/components/ContactoHero";
import { ContactSection } from "@/components/ContactSection";

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactoHero />
        {/* Spacer */}
        <div className="h-[63px]" />
        <ContactSection />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
