# ClientsSection Specification

## Overview
- **Target file:** `src/components/ClientsSection.tsx`
- **Interaction model:** Auto-scrolling carousel (CSS animation)

## Container
- Background: white
- Padding: 40px 10px

## Heading Area
- Max-width: constrained, centered

### Heading (H2)
- Text: "Ellos confían en nosotros"
- Font: Plus Jakarta Sans (font-heading)
- Font-size: 35px
- Font-weight: 600
- Color: rgb(20, 6, 9) / #140609
- Text-align: center
- Margin-bottom: 8px

### Red Separator
- Width: 280px
- Height: 3px
- Background: #DD183B
- Margin: 0 auto 40px auto

## Logo Carousel
- Implement as a CSS infinite scroll animation (no JS library needed)
- Show logos in a continuous horizontal scroll
- Each logo: max-height ~160px, max-width ~220px, object-fit: contain
- Gap between logos: ~30px
- Animation: smooth continuous scroll left, ~30s duration, infinite, linear
- Duplicate the logo array for seamless loop
- Overflow: hidden on container

## Client Logos (paths after download):
1. `/images/clients/emave.webp`
2. `/images/clients/sendero-resources.jpeg`
3. `/images/clients/brt.png`
4. `/images/clients/intersat.png`
5. `/images/clients/polo-sur.png`
6. `/images/clients/sumar-salud.png`
7. `/images/clients/jlm-industria.png`
8. `/images/clients/los-azules.jpg`
9. `/images/clients/cmsj.webp`
10. `/images/clients/san-juan-gobierno.jpg`
11. `/images/clients/grupo-petersen.png`
12. `/images/clients/fortuna.webp`
13. `/images/clients/ppi.png`
14. `/images/clients/mgs-consulting.webp`
15. `/images/clients/ngx.png`
16. `/images/clients/ceras.webp`
17. `/images/clients/3mg.png`
18. `/images/clients/logo-1.png`
19. `/images/clients/taranto.png`

## Responsive Behavior
- **Desktop:** Multiple logos visible, ~7 at a time
- **Mobile:** Fewer visible (~3), same scroll animation
- Heading font-size: 28px on mobile
