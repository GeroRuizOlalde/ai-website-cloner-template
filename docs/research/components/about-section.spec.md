# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Interaction model:** Static (AOS animations optional, skip for now)

## Container
- Background: white
- Padding: 100px 80px
- Max-width: 1200px
- Margin: 0 auto (centered)
- Display: flex (implicit from inner container)

## Inner Layout
- Display: flex
- Flex-direction: row
- Gap: 20px
- Max-width: min(100%, 1200px)
- Two columns, each ~500px (flex: 1)

### Left Column
- Width: ~50%

#### Heading (H1)
- Text: "Expertos en Formulación, Desarrollo, Gestión y Financiamiento Proyectos de Inversión."
- Font: Plus Jakarta Sans (font-heading)
- Font-size: 45px
- Font-weight: 600
- Line-height: 1.3
- Color: rgb(15, 23, 42) / #0F172A
- Text-align: left

### Right Column
- Width: ~50%
- Display: flex
- Align-items: center (vertically center the text)

#### Description (P)
- Text: "Somos una consultora especializada en la formulación, desarrollo, gestión y financiamiento de proyectos de inversión, con un enfoque sostenible de los negocios, con pensamiento estratégico y comprometidos con altos estándares éticos y jurídicos. Nuestro equipo interdisciplinario cuenta con la experiencia y el conocimiento necesario para garantizar el éxito de cada proyecto."
- Font: Inter (font-sans)
- Font-size: 18px
- Font-weight: 400
- Line-height: 29.7px (1.65)
- Color: rgb(58, 58, 58) / #3A3A3A
- Text-align: center

## Responsive Behavior
- **Desktop (1440px):** Side-by-side columns
- **Mobile (768px and below):** Stack vertically, heading on top, text below
  - Padding: 60px 20px
  - Heading font-size: 32px
