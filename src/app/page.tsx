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
          title="GPI CONSULTORES"
          boldName="GPI CONSULTORES"
          description="En GPI CONSULTORES nos centramos en Desarrollo y Due Diligence de negocios, en Formulación de Proyectos, en Consultoría Económica-Financiera y en Asesoramiento Legal Integral de Negocios Mineros."
          buttons={[
            { label: "PDF Español", href: "/pdfs/Brochure-GPI-2025-ES.pdf" },
            { label: "PDF Ingles", href: "/pdfs/Brochure-GPI-2025-EN.pdf" },
          ]}
        />

        {/* Red Divider */}
        <div className="h-2 w-full bg-[#DD183B]" />

        {/* GPI Servicios de Construccion */}
        <VideoServiceSection
          videoSrc="/videos/construccion-site.mp4"
          title="GPI SERVICIOS DE CONSTRUCCIÓN"
          boldName="GPI SERVICIOS DE CONSTRUCCIÓN"
          description="En GPI SERVICIOS DE CONSTRUCCIÓN nos enfocamos en servicios relacionados con la ingeniería, diseño, construcción y servicios generales."
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
