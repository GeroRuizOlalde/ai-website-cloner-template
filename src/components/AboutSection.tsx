import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-[60px] md:px-[80px] md:py-[100px]">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Left Column */}
          <div className="flex-1">
            <h1 className="font-heading text-[32px] font-semibold leading-[1.3] text-[#0F172A] md:text-[45px]">
              Expertos en Formulación, Desarrollo, Gestión y Financiamiento
              Proyectos de Inversión.
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 items-center">
            <p className="text-center font-sans text-lg font-normal leading-[1.65] text-[#3A3A3A]">
              Somos una consultora especializada en la formulación, desarrollo,
              gestión y financiamiento de proyectos de inversión, con un enfoque
              sostenible de los negocios, con pensamiento estratégico y
              comprometidos con altos estándares éticos y jurídicos. Nuestro
              equipo interdisciplinario cuenta con la experiencia y el
              conocimiento necesario para garantizar el éxito de cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
