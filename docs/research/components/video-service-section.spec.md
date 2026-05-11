# VideoServiceSection Specification (Shared for Consultores + Construccion)

## Overview
- **Target file:** `src/components/VideoServiceSection.tsx`
- **Interaction model:** Static
- This is a REUSABLE component used for both "GPI CONSULTORES" and "GPI SERVICIOS DE CONSTRUCCION" sections

## Props Interface
```typescript
interface VideoServiceSectionProps {
  videoSrc: string;
  title: string;
  description: string;
  buttons?: Array<{ label: string; href: string }>;
}
```

## Container
- Height: 680px
- Position: relative
- Display: flex
- Flex-direction: column
- Justify-content: center
- Align-items: center
- Overflow: hidden

## Video Background
- Position: absolute, inset: 0
- Width/height: 100%
- Object-fit: cover
- Z-index: 0
- Autoplay, loop, muted, playsInline
- Add a dark overlay div: position absolute, inset 0, bg rgba(0,0,0,0.35), z-index 1

## Content (z-index: 2, relative)
- Text-align: center
- Max-width: 900px
- Padding: 0 20px

### Title (H2)
- Font: Plus Jakarta Sans (font-heading)
- Font-size: 48px
- Font-weight: 600
- Color: white
- Text-align: center
- Margin-bottom: 8px

### Red Separator
- Width: 280px
- Height: 3px
- Background: rgb(221, 24, 59) / #DD183B (actually border-top: 3px solid)
- Margin: 0 auto 20px auto

### Description (P)
- Font: Inter (font-sans)
- Font-size: 19px
- Font-weight: 400
- Color: white
- Text-align: center
- Line-height: 1.65
- Max-width: ~800px
- Bold portions: "GPI CONSULTORES" and "GPI SERVICIOS DE CONSTRUCCION" are <strong>

### Buttons (optional, only on Consultores section)
- Display: flex
- Gap: ~100px (space between the two buttons)
- Justify-content: center
- Margin-top: 30px
- Each button:
  - Background: rgb(221, 24, 59) / #DD183B
  - Color: white
  - Font-size: 15px
  - Font-weight: 600
  - Padding: 12px 24px
  - Border-radius: 8px
  - Display: inline-flex, items center, gap 8px
  - Has an arrow icon (→) after the text
  - Hover: slight brightness change

## Data for each instance:

### Instance 1: GPI Consultores
- videoSrc: "/videos/consultores-office.mp4"
- title: "GPI CONSULTORES"
- description: "En **GPI CONSULTORES** nos centramos en Desarrollo y Due Diligence de negocios, en Formulación de Proyectos, en Consultoría Económica-Financiera y en Asesoramiento Legal Integral de Negocios Mineros."
- buttons: [
    { label: "PDF Español", href: "#" },
    { label: "PDF Ingles", href: "#" }
  ]

### Instance 2: GPI Servicios de Construccion
- videoSrc: "/videos/construccion-site.mp4"
- title: "GPI SERVICIOS DE CONSTRUCCIÓN"
- description: "En **GPI SERVICIOS DE CONSTRUCCIÓN** nos enfocamos en servicios relacionados con la ingeniería, diseño, construcción y servicios generales."
- buttons: (none)

## Red Divider Between Sections
- Between the two VideoServiceSection instances, there is a red bar:
- Height: ~8px
- Background: rgb(221, 24, 59) / #DD183B
- Full width
- This should be rendered in the parent page.tsx, not inside this component

## Responsive Behavior
- **Desktop:** 680px height, 48px title
- **Mobile:** Reduce height to ~500px, title to ~32px, description to 16px
