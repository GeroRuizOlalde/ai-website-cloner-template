"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, ChevronUpIcon } from "@/components/icons";

export function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollTop(scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Also attach to document just in case
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, { capture: true });
    };
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
        className={`fixed bottom-[80px] right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#DD183B] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#c41534] ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    </>
  );
}
