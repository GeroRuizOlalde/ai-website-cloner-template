export function ServiciosHero() {
  return (
    <section
      className="relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden bg-cover py-[50px] px-[50px]"
      style={{ backgroundImage: "url('/images/servicios-hero.jpg')", backgroundPosition: "51% 8%" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      {/* Content */}
      <div className="relative z-[2] max-w-[900px] text-center">
        {/* "Servicios" heading */}
        <div className="gpi-hero-in mb-6">
          <h2 className="font-heading text-[60px] font-semibold leading-[1.3] text-white">
            Servicios
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-[144px] bg-[#DD183B]" />
        </div>

        {/* Main heading */}
        <h1 className="gpi-hero-in gpi-hero-in-delay-1 mb-5 font-heading text-[40px] font-semibold leading-[1.4] text-white">
          Soluciones Integrales en B&uacute;squeda y Desarrollo de Proyectos.
        </h1>

        {/* Description */}
        <p className="gpi-hero-in gpi-hero-in-delay-2 mx-auto mb-6 max-w-[900px] font-sans text-lg leading-[1.65] text-white">
          En GPI, nos especializamos en brindar servicios integrales de
          identificaci&oacute;n, desarrollo y gesti&oacute;n de proyectos, as&iacute; como de asesoramiento
          econ&oacute;mico, financiero y legal en negocios, especialmente mineros. Con un
          equipo interdisciplinario de expertos comprometidos, ofrecemos soluciones
          innovadoras y estrat&eacute;gicas que garantizan la calidad, la eficiencia y el
          &eacute;xito en cada fase del proyecto, desde la planificaci&oacute;n hasta la
          ejecuci&oacute;n y m&aacute;s all&aacute;.
        </p>

        {/* CTA Button */}
        <a
          href="/contacto"
          className="gpi-hero-in gpi-hero-in-delay-2 inline-flex items-center justify-center rounded-full bg-[#DD183B] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
        >
          &iexcl;Cont&aacute;ctanos!
        </a>
      </div>

      {/* Wave SVG Divider */}
      <div className="absolute bottom-[-3px] left-0 z-[2] h-[46px] w-full rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            fill="white"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          />
          <path
            fill="white"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          />
          <path
            fill="white"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          />
        </svg>
      </div>
    </section>
  );
}
