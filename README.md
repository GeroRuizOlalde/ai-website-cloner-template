# GPI Consultores

Sitio web institucional de **GPI Consultores** — [gpiconsultores.com.ar](https://gpiconsultores.com.ar)

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

## Desarrollo

```bash
npm install
cp .env.local.example .env.local   # completar las claves de Resend
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | Chequeo de tipos |
| `npm run check` | lint + typecheck + build |

## Páginas

- `/` — Home
- `/servicios` — Servicios
- `/sobre-nosotros` — Sobre nosotros
- `/contacto` — Contacto (formulario vía Resend)

## Variables de entorno

Ver [`.env.local.example`](.env.local.example). El formulario de contacto requiere `RESEND_API_KEY` y `RESEND_FROM_EMAIL`.

## Deploy

Desplegado en Vercel. Cada push a `master` publica automáticamente.
