# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static

## Main Footer
- Background: rgb(48, 51, 50) / #303332
- Padding: ~60px 40px
- Layout: 3-column grid

### Column 1 (Left) - Logo & Description
- Logo image: `/images/logo-gpi.png` (224x74, with filter to make it lighter/visible on dark bg)
- Margin-bottom: 20px after logo
- Description text: "En **GPI Consultores** ayudamos a las empresas ofreciendo soluciones integrales en Identificación, Desarrollo y Gerenciamiento de Proyectos, Consultoría Económica y Financiera, M&A, Asesoramiento Legal Integral en Negocios Mineros y Servicios de Construcción."
- Font: Inter, 15px, weight 400
- Color: white
- Line-height: 1.65
- Below that: "Copyright © 2026 GPI Consultores"
- Font: Inter, 15px
- Color: white

### Column 2 (Center) - Links
- Heading: "Enlaces directos"
- Font: Plus Jakarta Sans, 20px, weight 600 (or similar heading font)
- Color: white
- Margin-bottom: 16px
- Links list (vertical, centered):
  - Inicio (href: "/")
  - Servicios (href: "/servicios")
  - Sobre Nosotros (href: "/sobre-nosotros")
  - Contacto (href: "/contacto")
- Link font: Inter, 15px
- Link color: white
- Gap between links: ~8px
- Text-align: center

### Column 3 (Right) - Social
- LinkedIn icon (from icons.tsx)
- Size: ~24px
- Color: white
- Wrapped in a link (target="_blank")
- Vertically centered or near top

## Bottom Bar
- Background: rgb(28, 28, 28) / #1C1C1C
- Height: 70px
- Display: flex, items center, justify center
- Text: "Powered by Riva Estudio"
- "Riva Estudio" is a link (color: #DD183B or similar accent)
- Font: Inter, 14px
- Color: white (except the link)

## Responsive Behavior
- **Desktop:** 3-column grid
- **Mobile:** Stack vertically, center-aligned
  - Padding: 40px 20px
