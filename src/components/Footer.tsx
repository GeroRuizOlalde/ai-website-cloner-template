import { LinkedInIcon } from "@/components/icons";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

export function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gpi-footer py-16 px-10">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Logo & Description */}
          <div className="text-center md:text-left">
            <img
              src="/images/logo-gpi.png"
              alt="GPI Consultores"
              className="h-[74px] w-auto mb-5 mx-auto md:mx-0"
            />
            <p className="text-white text-[15px] leading-[1.65] mb-4">
              En <span className="font-semibold">GPI Consultores</span> ayudamos
              a las empresas ofreciendo soluciones integrales en Identificación,
              Desarrollo y Gerenciamiento de Proyectos, Consultoría Económica y
              Financiera, M&A, Asesoramiento Legal Integral en Negocios Mineros y
              Servicios de Construcción.
            </p>
            <p className="text-white text-[15px]">
              Copyright &copy; 2026 GPI Consultores
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="text-center">
            <h3 className="font-heading text-[20px] font-semibold text-white mb-4">
              Enlaces directos
            </h3>
            <nav className="flex flex-col items-center gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-[15px] hover:text-[#DD183B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Social */}
          <div className="flex items-start justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/company/gpi-consultores-srl/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6 text-white hover:text-[#DD183B] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gpi-footer-bottom h-[70px] flex items-center justify-center">
        <p className="text-white text-sm">
          Powered by{" "}
          <a href="https://rivaestudio.com.ar/" target="_blank" rel="noopener noreferrer" className="text-[#DD183B] hover:underline">
            Riva Estudio
          </a>
        </p>
      </div>
    </footer>
  );
}
