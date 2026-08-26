# GPI Consultores — Sitio web

Sitio institucional de GPI Consultores construido con Next.js (App Router).

## Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui sobre Base UI + Tailwind CSS v4 (tokens oklch), utilidad `cn()`
- **Iconos:** Lucide React + SVGs propios en `src/components/icons.tsx`
- **Email:** Resend (formulario de contacto)
- **Deploy:** Vercel

## Comandos
- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run check` — lint + typecheck + build

## Estructura
```
src/
  app/
    page.tsx            # Home
    servicios/          # Servicios
    sobre-nosotros/     # Sobre nosotros
    contacto/           # Contacto
    api/contact/        # Endpoint del formulario (Resend + honeypot anti-spam)
    sitemap.ts          # Sitemap
    robots.ts           # robots.txt
    globals.css         # Tokens de diseño y estilos base
  components/           # Secciones y componentes del sitio
    ui/                 # Primitivas shadcn/ui
    icons.tsx           # SVGs como componentes React
  hooks/                # useReveal (animaciones al hacer scroll)
  lib/utils.ts          # cn()
public/
  images/  videos/  pdfs/  seo/
```

## Variables de entorno
Ver `.env.local.example`. El formulario de contacto necesita las claves de Resend.

## Estilo de código
- TypeScript strict, sin `any`
- Exports nombrados, componentes en PascalCase, utils en camelCase
- Clases de Tailwind, sin estilos inline
- Indentación de 2 espacios
- Mobile-first
