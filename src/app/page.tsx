import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VideoServiceSection } from "@/components/VideoServiceSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        {/* GPI Consultores */}
        <VideoServiceSection
          videoSrc="/videos/consultores-office.mp4"
          posterSrc="/images/background-page.png"
          title="GPI CONSULTORES"
          boldName="GPI CONSULTORES"
          description="En GPI CONSULTORES nos centramos en Desarrollo y Due Diligence de negocios, en Formulación de Proyectos, en Consultoría Económica-Financiera y en Asesoramiento Legal Integral de Negocios Mineros."
          buttons={[
            { label: "PDF Español", href: "/pdfs/Brochure-GPI-2025-ES.pdf" },
            { label: "PDF Ingles", href: "/pdfs/Brochure-GPI-2025-EN.pdf" },
          ]}
        />

        {/* Spacer */}
        <div className="h-[50px]" />

        <ClientsSection />

        {/* Spacer */}
        <div className="h-[50px]" />
      </main>

      <Footer />

      <FloatingElements />
    </>
  );
}
