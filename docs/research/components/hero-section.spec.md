# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static

## Container
- Height: 700px
- Position: relative
- Display: flex
- Flex-direction: column
- Justify-content: center
- Align-items: center (text is centered)
- Overflow: hidden

## Video Background
- Video source: `/videos/hero-mountain.mp4`
- Autoplay: true
- Loop: true
- Muted: true
- PlaysInline: true
- Object-fit: cover
- Position: absolute, inset: 0
- Width/height: 100%
- Z-index: 0
- Add a subtle dark overlay (rgba(0,0,0,0.3)) via a pseudo-element or div for text readability

## Content (over video, z-index: 1)
- Text-align: center
- Padding: 0 20px
- Max-width: ~900px

### Heading (H2)
- Text: "¡Bienvenidos a GPI!"
- Font: Plus Jakarta Sans (font-heading)
- Font-size: 48px
- Font-weight: 600
- Line-height: 62.4px (1.3)
- Color: white
- Margin-bottom: ~20px

### Subtitle (P)
- Text: "¡Lideramos el camino hacia el éxito de tus inversiones. Con un enfoque estratégico y un equipo comprometido, en GPI transformamos tus proyectos en realidades prósperas. ¡Hablemos sobre cómo podemos ayudarte!"
- Font: Inter (font-sans)
- Font-size: 18px
- Font-weight: 400
- Line-height: 1.65 (29.7px)
- Color: white
- Max-width: ~800px

### CTA Button
- Text: "CONTACTAR"
- Link: "/contacto" (use href="#contacto" for now)
- Background: rgb(221, 24, 59) / #DD183B
- Color: white
- Font-size: 15px
- Font-weight: 600
- Font-family: Inter
- Padding: 12px 24px
- Border-radius: 50px (fully rounded pill)
- Border: 1px solid rgb(51, 51, 51) (barely visible on red)
- Display: inline-flex, items center, justify center
- Margin-top: 20px
- Hover: slightly lighter red or opacity change

## Wave Shape Divider (bottom)
- Position: absolute
- Bottom: -3px
- Left: 0
- Width: 100%
- Height: 46px
- Z-index: 2
- SVG with 3 wave paths, fill: white
- Path 1: opacity 0.33
- Path 2: opacity 0.66
- Path 3: opacity 1.0
- The SVG viewBox: "0 0 1000 100", preserveAspectRatio: "none"
- Transform: rotate(180deg) - it's flipped (wave curves up from bottom)

### SVG Paths (exact):
```
Path 1 (opacity 0.33): M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z
Path 2 (opacity 0.66): M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z
Path 3 (opacity 1.0): M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z
```

## Responsive Behavior
- **Desktop:** 700px height, 48px heading
- **Mobile (390px):** Reduce heading to ~32px, subtitle to 16px, height to ~500px
