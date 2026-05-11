# Header Specification (TopBar + MainNav)

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Static (no scroll-triggered changes)

## Structure

### Top Bar
- Full-width bar at very top
- Background: rgb(20, 6, 9) / #140609
- Height: 41px
- Contains a LinkedIn icon aligned to the right
- LinkedIn SVG icon: white color, ~16px size

### Main Navigation Bar
- Background: white (#FFFFFF)
- Height: 113px
- Border-bottom: 3px solid rgb(221, 24, 59) / #DD183B
- Layout: flex row, space-between, items-center
- Max content width: ~1200px centered
- Padding: 0 ~40px

#### Logo (left)
- Image: `/images/logo-gpi.png`
- Size: 224px x 74px
- Alt: "GPI Consultores"
- Wrapped in a link to "/"

#### Navigation Links (center)
- Items: Inicio, Servicios, Sobre Nosotros, Contacto
- Font: Inter, 18px, weight 400
- Color: rgb(34, 34, 34) / #222222
- No text-transform
- Gap between items: ~40px
- These are anchor links (href="#" for now since it's a single-page clone)

#### Language Flags (right)
- Two small flag images side by side
- EN flag: `/images/flag-en.svg` (alt="en")
- ES flag: `/images/flag-es.svg` (alt="es")
- Size: ~24px x 18px each
- Gap: 8px between them
- Wrapped in anchor tags

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav
- **Mobile (768px and below):** Hamburger menu (can be a simple toggle for now)

## Text Content
- Nav items: "Inicio", "Servicios", "Sobre Nosotros", "Contacto"
