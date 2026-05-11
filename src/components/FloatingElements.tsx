"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, ChevronUpIcon } from "@/components/icons";

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5492644050113?text=Hola%20GPI%20Consultores..."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-4 left-4 z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-[50px] w-[50px]" />
      </a>

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#DD183B] text-white shadow-lg transition-opacity duration-300 hover:bg-[#c41534] ${
          showScrollTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ChevronUpIcon className="h-5 w-5" />
      </button>
    </>
  );
}
