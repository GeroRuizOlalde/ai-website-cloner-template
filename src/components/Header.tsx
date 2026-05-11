"use client";

import { useState } from "react";
import { LinkedInIcon } from "@/components/icons";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

function switchLanguage(lang: string) {
  const select = document.querySelector<HTMLSelectElement>(
    "#google_translate_element select"
  );
  if (!select) return;
  select.value = lang;
  select.dispatchEvent(new Event("change"));
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="flex h-[41px] items-center justify-end bg-gpi-dark px-10">
        <a
          href="https://www.linkedin.com/company/gpi-consultores-srl/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="h-4 w-4 text-white" />
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-b-[3px] border-gpi-red bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-10 py-6">
          {/* Logo */}
          <a href="/">
            <img
              src="/images/logo-gpi.png"
              alt="GPI Consultores"
              width={224}
              height={74}
              className="h-[74px] w-[224px]"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[18px] font-normal text-gpi-nav-text"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Flags (desktop) */}
          <div className="hidden items-center gap-2 md:flex">
            <button type="button" onClick={() => switchLanguage("en")} className="opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="/images/flag-en.svg"
                alt="EN"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
            <button type="button" onClick={() => switchLanguage("es")} className="opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="/images/flag-es.svg"
                alt="ES"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-gpi-dark transition-transform ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gpi-dark transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gpi-dark transition-transform ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-10 pb-6 md:hidden">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[18px] font-normal text-gpi-nav-text"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-4">
              <button type="button" onClick={() => switchLanguage("en")} className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/images/flag-en.svg"
                  alt="EN"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </button>
              <button type="button" onClick={() => switchLanguage("es")} className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/images/flag-es.svg"
                  alt="ES"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
