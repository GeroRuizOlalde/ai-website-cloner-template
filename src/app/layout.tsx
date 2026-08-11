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
  "GPI Consultores - Gestión de Proyectos de Inversión. Expertos en Formulación, Desarrollo, Gestión y Financiamiento de Proyectos de Inversión en San Juan, Argentina.";

const OG_IMAGE = "/seo/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://gpiconsultores.com.ar"),
  title: {
    default: "GPI Consultores | Gestión de Proyectos de Inversión — San Juan",
    template: "%s | GPI Consultores",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gpiconsultores.com.ar",
    siteName: "GPI Consultores",
    title: "GPI Consultores | Gestión de Proyectos de Inversión — San Juan",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GPI Consultores — Gestión de Proyectos de Inversión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPI Consultores | Gestión de Proyectos de Inversión",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GPI Consultores",
  url: "https://gpiconsultores.com.ar",
  logo: "https://gpiconsultores.com.ar/images/logo-gpi.png",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressRegion: "San Juan",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-2644-05-0113",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/gpi-consultores-srl/",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

