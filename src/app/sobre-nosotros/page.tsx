import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

/* ── Hero ── */
function SobreNosotrosHero() {
  return (
    <section
      className="relative flex min-h-[200px] items-end overflow-hidden bg-cover bg-center p-[10px]"
      style={{
        backgroundImage: "url('/images/sobre-nosotros-hero.jpg')",
      }}
    >
      <div className="absolute inset-0 z-[1] bg-black/50" />
      <div className="relative z-[2] w-full max-w-[1200px] mx-auto">
        <h2 className="gpi-hero-in font-heading text-[48px] font-semibold leading-[1.3] text-white">
          Sobre Nosotros
        </h2>
      </div>
      {/* Wave SVG Divider */}
      <div className="absolute bottom-[-3px] left-0 z-[2] h-[46px] w-full rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path fill="white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
          <path fill="white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
          <path fill="white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
        </svg>
      </div>
    </section>
  );
}

/* ── Nuestra Historia ── */
function NuestraHistoria() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-[10px]">
      <div className="flex flex-col gap-5 md:flex-row">
        {/* Left column */}
        <Reveal direction="right" className="flex-1">
          <h3 className="mb-4 font-heading text-2xl font-semibold text-[#0F172A]">
            Nuestra Historia
          </h3>
          <div className="space-y-4 font-sans text-lg leading-[1.65] text-gpi-text">
            <p>
              Fundada en 2007, <strong>GPI Consultores</strong> ha evolucionado
              desde sus inicios como una consultora radicada en la provincia de{" "}
              <strong>San Juan</strong> hasta convertirse en una empresa
              l&iacute;der en el interior del pa&iacute;s, en la generaci&oacute;n y gesti&oacute;n de
              proyectos de inversi&oacute;n. A lo largo de nuestros{" "}
              <strong>17 a&ntilde;os de trayectoria</strong>, hemos sido parte de
              importantes desarrollos, impulsando nuevos negocios y obteniendo
              financiamiento de diversas fuentes para nuestros clientes.
            </p>
            <p>
              Nuestro equipo interdisciplinario, se inici&oacute; con profesionales
              en Ciencias Econ&oacute;micas e Ingenieros de distintas especialidades
              y ha crecido recientemente integrando Abogados especializados en el
              negocio minero. Esto nos permite interactuar de manera efectiva con
              los t&eacute;cnicos y l&iacute;deres de las empresas que conf&iacute;an en nuestros
              servicios.
            </p>
            <p>
              Desde el comienzo, nuestra misi&oacute;n ha sido ofrecer soluciones
              integrales y efectivas en desarrollo de negocios sostenibles, la
              formulaci&oacute;n, evaluaci&oacute;n financiamiento, M&amp;A y asesoramiento
              jur&iacute;dico y econ&oacute;mico-financiero de proyectos de inversi&oacute;n, con
              seguridad jur&iacute;dica y altos est&aacute;ndares &eacute;ticos.
            </p>
          </div>
        </Reveal>

        {/* Right column */}
        <Reveal direction="left" delay={150} className="flex-1">
          <div className="space-y-4 font-sans text-lg leading-[1.65] text-gpi-text">
            <p>
              Entre nuestros hitos m&aacute;s destacados se encuentra la exitosa
              gesti&oacute;n de financiamiento a trav&eacute;s de organismos como el BID, el
              BIRF, y la CAF, adem&aacute;s de explorar nuevas oportunidades en el
              mercado de capitales. Estos logros subrayan nuestro compromiso de
              adaptar nuestras estrategias a un contexto financiero cada vez
              m&aacute;s complejo y de proporcionar a nuestros clientes las
              herramientas creativas e innovadoras necesarias para prosperar.
            </p>
            <p>
              Con sede en Argentina, en la Provincia de San Juan, seguimos
              dedicados a ofrecer servicios de excelencia, respaldados por
              a&ntilde;os de experiencia y una visi&oacute;n clara hacia el futuro.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Misión / Visión ── */
function MisionVision() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-[10px]">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Misión */}
        <Reveal className="flex-1">
          <h3 className="mb-2 font-heading text-2xl font-semibold text-[#0F172A]">
            Nuestra Misi&oacute;n
          </h3>
          <div className="mb-4 h-[3px] w-[80px] bg-[#DD183B]" />
          <p className="font-sans text-lg leading-[1.65] text-gpi-text">
            Proporcionar consultor&iacute;a experta en la b&uacute;squeda y gesti&oacute;n de
            proyectos de inversi&oacute;n, asegurando el &eacute;xito y la sostenibilidad de
            los proyectos de nuestros clientes.
          </p>
        </Reveal>

        {/* Visión */}
        <Reveal delay={150} className="flex-1">
          <h3 className="mb-2 font-heading text-2xl font-semibold text-[#0F172A]">
            Nuestra Visi&oacute;n
          </h3>
          <div className="mb-4 h-[3px] w-[80px] bg-[#DD183B]" />
          <p className="font-sans text-lg leading-[1.65] text-gpi-text">
            Ser reconocidos como l&iacute;deres en servicios de consultor&iacute;a
            econ&oacute;mica, jur&iacute;dica y t&eacute;cnica orientada a lograr la concreci&oacute;n de
            proyectos de inversi&oacute;n sostenibles, innovando y adapt&aacute;ndonos a las
            necesidades cambiantes del mercado, con seguridad jur&iacute;dica y
            comprometidos con las normas &eacute;ticas y nuestros valores.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Valores ── */
const valores = [
  {
    num: "01",
    title: "Responsabilidad",
    desc: "Nos comprometemos a ofrecer servicios de la m\u00e1s alta calidad. Nuestro equipo de expertos trabaja con dedicaci\u00f3n, eficiencia y calidad para garantizar resultados excepcionales en cada proyecto.",
  },
  {
    num: "02",
    title: "Innovaci\u00f3n",
    desc: "Nos mantenemos a la vanguardia en t\u00e9cnicas y herramientas de gesti\u00f3n, implementando soluciones innovadoras que optimizan los procesos y aseguran el \u00e9xito de los proyectos de inversi\u00f3n.",
  },
  {
    num: "03",
    title: "Compromiso",
    desc: "Estamos dedicados al \u00e9xito de nuestros clientes. Nos esforzamos por entender sus necesidades y superar sus expectativas, brindando un servicio personalizado y eficiente en cada etapa del proyecto.",
  },
  {
    num: "04",
    title: "Integridad",
    desc: "Actuamos con transparencia y \u00e9tica en todas nuestras acciones. La confianza y la honestidad son fundamentales en nuestras relaciones con clientes, socios y colaboradores, asegurando una colaboraci\u00f3n fruct\u00edfera y duradera.",
  },
];

function ValoresSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-[10px]">
      <h3 className="mb-2 font-heading text-2xl font-semibold text-gpi-text/40">
        Nuestros Valores
      </h3>
      <div className="mb-6 h-[3px] w-[80px] bg-[#DD183B]" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {valores.map((v, i) => (
          <Reveal key={v.num} delay={i * 100} className="group">
            <p className="mb-1 font-sans text-base text-gpi-text">{v.num}</p>
            <h5 className="mb-2 font-heading text-lg font-semibold text-[#0F172A]">
              {v.title}
            </h5>
            <div className="mb-3 h-[3px] w-[80px] bg-[#DD183B] transition-all duration-300 group-hover:w-[120px]" />
            <p className="font-sans text-base leading-[1.65] text-gpi-text">
              {v.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Leaders ── */
interface Leader {
  name: string;
  imgSrc: string;
  bio: string;
  extended: string;
  cvEs: string;
  cvEn: string;
  reversed?: boolean;
}

const leaders: Leader[] = [
  {
    name: "Marcelo Rodriguez",
    imgSrc: "/images/marcelo-rodriguez.jpg",
    bio: "Marcelo Rodr\u00edguez, Contador P\u00fablico Nacional y Perito Partidor, egresado de la Universidad Cat\u00f3lica de Cuyo con estudios de posgrado en Formulaci\u00f3n y Evaluaci\u00f3n de Proyectos de Inversi\u00f3n, Entidades Financieras y Management, especializado en Formulaci\u00f3n, Evaluaci\u00f3n, Financiamiento y Gesti\u00f3n de Proyectos de Inversi\u00f3n, en diversos sectores econ\u00f3micos, con m\u00e1s de 30 a\u00f1os de experiencia. Se ha desempe\u00f1ado en cargos jer\u00e1rquicos en diversas empresas del sector salud, telecomunicaciones, electro-intensivas, mineras, etc. y ha participado como Coordinador Ejecutivo en proyectos financiados por el BID. En su carrera como consultor, posee una vasta experiencia como formulador de proyectos de inversi\u00f3n para el sector productivo primario e industrial, especialmente vinculados con procesos de modernizaci\u00f3n e innovaci\u00f3n tecnol\u00f3gica, articulando con el sector cient\u00edfico y acad\u00e9mico. En materia de financiamiento de proyectos de Inversi\u00f3n, tiene una amplia experiencia en la interacci\u00f3n con organismos multilaterales de cr\u00e9dito como el BID, BIRF, CAF, etc., el mercado de capitales y la banca privada.",
    extended: "Ha desarrollado gran parte de su actividad profesional en compa\u00f1\u00edas como Alcatel SA, Electromet\u00e1l\u00fargica Andina SAIC, Ceras San Juan S.A. (minera), donde fue Gerente de Administraci\u00f3n y Finanzas. Fue Coordinador Ejecutivo del programa PROVIAR, financiado por el BID y consultor economista del BIRF, en diversos proyectos. Posteriormente, se desarroll\u00f3 como consultor de empresas privadas, instituciones y organismos p\u00fablicos. Ha sido un destacado dirigente del rugby a nivel nacional e internacional, habiendo ocupado posiciones clave como Presidente de Sudam\u00e9rica Rugby (2016 al 2018), miembro del Board de Jaguares (2016 a 2020), Presidente de la Uni\u00f3n Argentina de Rugby (2018 \u2013 2022), miembro de World Rugby (2016 \u2013 2022) en representaci\u00f3n de Argentina y Chairman de SANZAAR (2021 -2023).",
    cvEs: "/pdfs/CV-Marcelo-Rodriguez-ES.pdf",
    cvEn: "/pdfs/CV-Marcelo-Rodriguez-EN.pdf",
    reversed: false,
  },
  {
    name: "Jimena Daneri",
    imgSrc: "/images/jimena-daneri.jpg",
    bio: "Jimena Daneri, abogada especializada en la direcci\u00f3n y gesti\u00f3n de negocios mineros en todas sus fases, con 25 a\u00f1os de experiencia en desarrollo de negocios mineros, asesoramiento en estrategia de propiedad minera, aspectos ambientales y regulatorios, as\u00ed como contratos mineros de todo tipo y de servicios inherentes a esta materia. Ha participado en el start up de algunas empresas en Argentina y ha sido parte del equipo negociador de diversos joint venture, fusiones y financiamiento de operaciones mineras en Argentina.",
    extended: "Ha desarrollado gran parte de su actividad profesional en compa\u00f1\u00edas multinacionales, como Fortescue Metals Group, donde fue Gerente de Legales y Ambiente para la regi\u00f3n Sudam\u00e9rica (con actividad en Argentina, Brasil, Chile, Per\u00fa, Ecuador y Colombia); Directora Ejecutiva Adjunta y previamente Gerente Senior de Legales para Barrick Gold Corporation en Argentina y, adem\u00e1s, se desempe\u00f1\u00f3 como asesora legal in house de Minera Argentina Gold SA, bajo el control del grupo canadiense Lundin Mining Company y, luego, del norteamericano, Homestake Mining Company. Por otro lado, se ha desempe\u00f1ado como docente de la c\u00e1tedra de contratos de la carrera de derecho de la Universidad Cat\u00f3lica de Cuyo (UCC), San Juan, siendo actualmente miembro del cuerpo docente de la Maestr\u00eda de Gesti\u00f3n de Negocios Mineros de esa casa de estudios. Integra la Comisi\u00f3n Directiva de la C\u00e1mara Minera de San Juan (CMSJ) y la ONG Woman in Mining Argentina (WIM).",
    cvEs: "/pdfs/CV-Jimena-Daneri-ES.pdf",
    cvEn: "/pdfs/CV-Jimena-Daneri-EN.pdf",
    reversed: true,
  },
];

function LeadersSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-10">
      {/* Section heading */}
      <div className="mb-10 text-center">
        <h2 className="font-heading text-[48px] font-semibold leading-[1.3] text-[#0F172A]">
          &iexcl;Conozca Nuestros L&iacute;deres!
        </h2>
        <div className="mx-auto mt-3 h-[3px] w-[240px] bg-[#DD183B]" />
      </div>

      <div className="space-y-16">
        {leaders.map((leader) => (
          <Reveal key={leader.name} className="space-y-6">
            {/* Top row: name + bio + image */}
            <div
              className={`flex flex-col items-center gap-8 md:flex-row ${
                leader.reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <h3 className="mb-4 font-heading text-2xl font-semibold text-[#0F172A]">
                  {leader.name}
                </h3>
                <p className="font-sans text-lg leading-[1.65] text-gpi-text">
                  {leader.bio}
                </p>
              </div>

              {/* Photo */}
              <div className="flex-shrink-0 overflow-hidden rounded-full">
                <img
                  src={leader.imgSrc}
                  alt={leader.name}
                  className="h-[300px] w-[300px] rounded-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                />
              </div>
            </div>

            {/* Extended bio */}
            <p className="font-sans text-lg leading-[1.65] text-gpi-text">
              {leader.extended}
            </p>

            {/* CV Buttons */}
            <div className="flex gap-4">
              <a
                href={leader.cvEs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#DD183B] px-5 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
              >
                Ver CV <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={leader.cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#DD183B] px-5 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
              >
                View CV <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Page ── */
export default function SobreNosotrosPage() {
  return (
    <>
      <Header />

      <main>
        <SobreNosotrosHero />
        <NuestraHistoria />
        <MisionVision />
        <ValoresSection />
        <LeadersSection />
        <div className="h-[75px]" />
      </main>

      <Footer />
      <FloatingElements />
    </>
  );
}
