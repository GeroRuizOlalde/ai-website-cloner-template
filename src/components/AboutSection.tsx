import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-[60px] md:px-[80px] md:py-[100px]">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Left Column */}
          <Reveal direction="right" className="flex-1">
            <h1 className="font-heading text-[32px] font-semibold leading-[1.3] text-gpi-heading md:text-[45px]">
              Expertos en Formulación, Desarrollo, Gestión y Financiamiento
              Proyectos de Inversión.
            </h1>
          </Reveal>

          {/* Right Column */}
          <Reveal direction="left" delay={150} className="flex flex-1 items-center">
            <p className="text-center font-sans text-lg font-normal leading-[1.65] text-gpi-text">
              Somos una consultora especializada en la formulación, desarrollo,
              gestión y financiamiento de proyectos de inversión, con un enfoque
              sostenible de los negocios, con pensamiento estratégico y
              comprometidos con altos estándares éticos y jurídicos. Nuestro
              equipo interdisciplinario cuenta con la experiencia y el
              conocimiento necesario para garantizar el éxito de cada proyecto.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
