"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

interface ContactInfo {
  name: string;
  phone: string;
  email: string;
}

const contacts: ContactInfo[] = [
  {
    name: "Marcelo Rodriguez",
    phone: "+54 9 2644 05-0113",
    email: "M.rodriguez@gpiconsultores.com.ar",
  },
  {
    name: "Julián Bouyssi",
    phone: "+54 9 2644 36-5840",
    email: "Jbpuyssi@gpiconsultores.com.ar",
  },
  {
    name: "Jimena Daneri",
    phone: "+54 9 2645 64-8284",
    email: "Jdaneri@gpiconsultotres.com.ar",
  },
];

type SubmitStatus =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot — must stay empty
  });
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus({
          state: "error",
          message: data.error ?? "No pudimos enviar el mensaje.",
        });
        return;
      }

      setStatus({ state: "success" });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus({
        state: "error",
        message: "Error de red. Verificá tu conexión e intentá de nuevo.",
      });
    }
  }

  const isSending = status.state === "sending";

  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 pb-16 md:flex-row">
      {/* Form Column */}
      <Reveal direction="right" className="w-full md:w-[60%]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Honeypot: hidden from humans, bots tend to fill it. Off-screen
              (not display:none) so naive bots still see and fill it. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
          >
            <label htmlFor="website">No completar este campo</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Nombre */}
          <div>
            <label className="mb-1 block font-sans text-[16px] font-semibold text-[#0F172A]">
              Nombre <span className="text-[#DD183B]">*</span>
            </label>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 font-sans text-[15px] text-[#0F172A] outline-none focus:border-[#066AAB]"
                />
                <span className="mt-1 block text-[13px] text-[#666]">
                  First
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 font-sans text-[15px] text-[#0F172A] outline-none focus:border-[#066AAB]"
                />
                <span className="mt-1 block text-[13px] text-[#666]">
                  Last
                </span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block font-sans text-[16px] font-semibold text-[#0F172A]">
              Email <span className="text-[#DD183B]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 font-sans text-[15px] text-[#0F172A] outline-none focus:border-[#066AAB]"
            />
          </div>

          {/* Numero de telefono */}
          <div>
            <label className="mb-1 block font-sans text-[16px] font-semibold text-[#0F172A]">
              Numero de telefono <span className="text-[#DD183B]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-[3px] border border-[#ccc] px-3 py-2 font-sans text-[15px] text-[#0F172A] outline-none focus:border-[#066AAB]"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="mb-1 block font-sans text-[16px] font-semibold text-[#0F172A]">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full resize-y rounded-[3px] border border-[#ccc] px-3 py-2 font-sans text-[15px] text-[#0F172A] outline-none focus:border-[#066AAB]"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isSending}
              className="self-start rounded-[3px] bg-[#066AAB] px-[15px] py-[10px] font-sans text-[17px] font-semibold text-white transition-colors hover:bg-[#055a91] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>

            {status.state === "success" && (
              <p
                role="status"
                className="rounded-[3px] border border-green-200 bg-green-50 px-3 py-2 font-sans text-[15px] text-green-800"
              >
                ¡Mensaje enviado! Te vamos a contactar a la brevedad.
              </p>
            )}
            {status.state === "error" && (
              <p
                role="alert"
                className="rounded-[3px] border border-red-200 bg-red-50 px-3 py-2 font-sans text-[15px] text-red-800"
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </Reveal>

      {/* Info Column */}
      <Reveal direction="left" delay={150} className="w-full md:w-[40%]">
        <h2 className="mb-6 font-heading text-[35px] font-semibold leading-[1.3] text-[#0F172A]">
          Informaci&oacute;n
        </h2>

        <div className="flex flex-col gap-6">
          {contacts.map((contact) => (
            <div key={contact.name}>
              <p className="font-sans text-[17px] leading-[1.65] text-gpi-text">
                <span className="font-bold">{contact.name}</span>:{" "}
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-[#DD183B] hover:underline"
                >
                  {contact.phone}
                </a>
              </p>
              <p className="font-sans text-[17px] leading-[1.65] text-gpi-text">
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-[#DD183B] hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
