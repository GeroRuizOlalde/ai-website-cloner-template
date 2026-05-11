export function HeroSection() {
  return (
    <section className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden md:h-[700px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-mountain.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Content */}
      <div className="relative z-[2] max-w-[900px] px-5 text-center">
        <h2 className="gpi-hero-in mb-5 font-heading text-[32px] font-semibold leading-[1.3] text-white md:text-[48px]">
          ¡Bienvenidos a GPI!
        </h2>

        <p className="gpi-hero-in gpi-hero-in-delay-1 mx-auto max-w-[800px] font-sans text-base leading-[1.65] text-white md:text-lg">
          ¡Lideramos el camino hacia el éxito de tus inversiones. Con un enfoque
          estratégico y un equipo comprometido, en GPI transformamos tus
          proyectos en realidades prósperas. ¡Hablemos sobre cómo podemos
          ayudarte!
        </p>

        <a
          href="/contacto"
          className="gpi-hero-in gpi-hero-in-delay-2 mt-5 inline-flex items-center justify-center rounded-full bg-[#DD183B] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c41534] hover:shadow-lg"
        >
          CONTACTAR
        </a>
      </div>

      {/* Wave SVG Divider */}
      <div className="absolute bottom-[-3px] left-0 z-[2] h-[46px] w-full -scale-y-100">
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
