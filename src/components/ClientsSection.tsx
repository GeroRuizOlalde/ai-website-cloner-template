import { Reveal } from "@/components/Reveal";

const logos = [
  { src: "/images/clients/emave.webp", alt: "Emave" },
  { src: "/images/clients/sendero-resources.jpeg", alt: "Sendero Resources" },
  { src: "/images/clients/brt.png", alt: "BRt" },
  { src: "/images/clients/intersat.png", alt: "InterSat" },
  { src: "/images/clients/polo-sur.png", alt: "Polo Sur Aviation" },
  { src: "/images/clients/sumar-salud.png", alt: "Sumar Salud" },
  { src: "/images/clients/jlm-industria.png", alt: "JLM Industria" },
  { src: "/images/clients/los-azules.jpg", alt: "Los Azules" },
  { src: "/images/clients/cmsj.webp", alt: "CMSJ" },
  { src: "/images/clients/san-juan-gobierno.jpg", alt: "San Juan Gobierno" },
  { src: "/images/clients/grupo-petersen.png", alt: "Grupo Petersen" },
  { src: "/images/clients/fortuna.webp", alt: "Fortuna" },
  { src: "/images/clients/ppi.png", alt: "PPI" },
  { src: "/images/clients/mgs-consulting.webp", alt: "MGS Consulting" },
  { src: "/images/clients/ngx.png", alt: "NGX" },
  { src: "/images/clients/ceras.webp", alt: "Ceras" },
  { src: "/images/clients/3mg.png", alt: "3MG" },
  { src: "/images/clients/logo-1.png", alt: "Client" },
  { src: "/images/clients/taranto.png", alt: "Taranto" },
];

const duplicatedLogos = [...logos, ...logos];

export function ClientsSection() {
  return (
    <section className="bg-white py-10 px-3">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Heading Area */}
      <Reveal className="text-center">
        <h2 className="font-heading text-[28px] md:text-[35px] font-semibold text-[#140609] mb-2">
          Ellos confían en nosotros
        </h2>
        <div className="w-[280px] h-[3px] bg-[#DD183B] mx-auto mb-10" />
      </Reveal>

      {/* Logo Carousel */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-8"
          style={{
            width: "max-content",
            animation: "scroll 40s linear infinite",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-[100px] max-w-[150px] md:h-[160px] md:max-w-[220px] object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
