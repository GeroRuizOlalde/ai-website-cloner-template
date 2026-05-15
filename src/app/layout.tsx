import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_DESCRIPTION =
  "GPI Consultores - Gestión de Proyectos de Inversión. Expertos en Formulación, Desarrollo, Gestión y Financiamiento de Proyectos de Inversión.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gpiconsultores.com.ar"),
  title: {
    default: "GPI Consultores | Gestión de Proyectos de Inversión",
    template: "%s | GPI Consultores",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "GPI Consultores",
    title: "GPI Consultores | Gestión de Proyectos de Inversión",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Hidden Google Translate widget */}
        <div id="google_translate_element" className="hidden" />
        <Script id="gtranslate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'es',
              includedLanguages: 'en,es',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}</Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
