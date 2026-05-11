import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section
      className="bg-cover bg-center px-8 py-[30px] text-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, #A3273E, #A3273E), url('/images/background-page.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <Reveal>
        <h2 className="mx-auto mb-5 max-w-[900px] font-heading text-[30px] font-semibold leading-[1.4] text-white">
          &iquest;Listo para comenzar tu proyecto con GPI? Cont&aacute;ctanos hoy para
          obtener m&aacute;s informaci&oacute;n sobre c&oacute;mo podemos ayudarte a alcanzar tus
          objetivos.
        </h2>
        <a
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-[#DD183B] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
        >
          Contactar
        </a>
      </Reveal>
    </section>
  );
}
