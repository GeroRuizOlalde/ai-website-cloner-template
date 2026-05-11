import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { ServiciosHero } from "@/components/ServiciosHero";
import { ServiceCardsGrid } from "@/components/ServiceCardsGrid";
import { ContactCTA } from "@/components/ContactCTA";

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main>
        <ServiciosHero />

        {/* Spacer */}
        <div className="h-[63px]" />

        {/* "Nuestros Servicios" Heading */}
        <div className="text-center">
          <h3 className="font-heading text-[40px] font-semibold leading-[1.3] text-[#0F172A]">
            Nuestros Servicios
          </h3>
          <div className="mx-auto mt-4 mb-[15px] h-[3px] w-[240px] bg-[#DD183B]" />
        </div>

        <ServiceCardsGrid />

        <ContactCTA />
      </main>

      <Footer />

      <FloatingElements />
    </>
  );
}
