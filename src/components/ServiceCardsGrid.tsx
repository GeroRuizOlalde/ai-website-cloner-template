import {
  BriefcaseIcon,
  ServerIcon,
  BuildingIcon,
  MoneyIcon,
  LegalMiningIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import type { ComponentType } from "react";

interface ServiceCard {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: BriefcaseIcon,
    title: "Desarrollos y Due Diligence de Negocios",
    description:
      "Hacemos consultoría integral, para identificar nuevas oportunidades, expandir mercados y optimizar el rendimiento en entornos competitivos y cambiantes. Evaluamos aspectos legales/técnicos/financieros para reducir riesgos y maximizar oportunidades de éxito.",
  },
  {
    icon: ServerIcon,
    title: "Formulación y Evaluación de Proyectos",
    description:
      "Realizamos estudios de pre factibilidad, factibilidad y evaluaciones económicas financieras para asegurar la rentabilidad y sostenibilidad del proyecto.",
  },
  {
    icon: BuildingIcon,
    title: "Servicios de Ingeniería y Construcción",
    description:
      "Acompañamos cada etapa de obras civiles, desde la planificación inicial hasta la entrega final, garantizando calidad y satisfacción en todo el proceso.",
  },
  {
    icon: MoneyIcon,
    title: "Consultoría Económica y Financiera",
    description:
      "Ofrecemos soluciones personalizadas para optimizar la estructura económica y financiera y apoyar el crecimiento sostenible de tu empresa.",
  },
  {
    icon: LegalMiningIcon,
    title: "Asesoramiento Legal en Negocios Mineros",
    description:
      "Brindamos consejo legal integral para concretar negocios mineros. Asesoramos sobre la compra de propiedades mineras, constitución de derechos mineros, contratos mineros, aspectos regulatorios y de permisos.",
  },
];

export function ServiceCardsGrid() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-5 pt-[30px] pb-7 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal
          key={service.title}
          delay={index * 80}
          className="group flex flex-col items-center rounded-[10px] border-2 border-[#140609]/60 px-[10px] py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#DD183B] hover:shadow-lg"
        >
          {/* Icon */}
          <service.icon className="mb-4 h-10 w-10 text-[#DD183B] transition-transform duration-300 group-hover:scale-110" />

          {/* Title */}
          <h3 className="mb-3 font-heading text-2xl font-semibold leading-[1.3] text-[#0F172A]">
            {service.title}
          </h3>

          {/* Red separator */}
          <div className="mb-5 h-[3px] w-[145px] bg-[#DD183B] transition-all duration-300 group-hover:w-[180px]" />

          {/* Description */}
          <p className="font-sans text-lg leading-[1.65] text-gpi-text">
            {service.description}
          </p>
        </Reveal>
      ))}
    </section>
  );
}
