# Page Topology - gpiconsultores.com.ar

## Tech Stack
- WordPress + Astra theme + Spectra (UAG Blocks)
- Fonts: Inter (body), Plus Jakarta Sans (headings) via Google Fonts
- AOS (Animate On Scroll) library for entrance animations
- Spectra Image Gallery carousel for client logos

## Sections (top to bottom)

### 1. Top Bar
- **Type:** Fixed strip
- **Height:** 41px
- **Background:** rgb(20, 6, 9) (#140609)
- **Content:** LinkedIn icon (SVG, right-aligned)
- **Z-index:** Above main content

### 2. Main Header / Navigation
- **Type:** Static header
- **Height:** 113px
- **Background:** white
- **Border-bottom:** 3px solid rgb(221, 24, 59)
- **Content:**
  - Logo: LogoGPInuevo (224x74px)
  - Nav links: Inicio, Servicios, Sobre Nosotros, Contacto
  - Language flags: EN, ES-AR (from gtranslate)

### 3. Hero Section
- **Type:** Full-width video background
- **Height:** 700px
- **Interaction model:** Static (no scroll-driven behavior)
- **Video:** 11197719-uhd_3840_2160_30fps.mp4 (autoplay, loop, muted, object-fit: cover)
- **Content:** Centered text + CTA button
- **Wave divider:** SVG at bottom (3 paths, opacities 0.33, 0.66, 1.0), white fill, flipped

### 4. About Section
- **Type:** Flow content, white background
- **Padding:** 100px 80px
- **Max-width:** 1200px (centered)
- **Layout:** Flex row, gap 20px, 2 columns (500px each)
- **Interaction model:** AOS fade animations on scroll
- **Left column:** H1 heading
- **Right column:** Description paragraph

### 5. GPI Consultores Section
- **Type:** Full-width video background
- **Height:** 680px
- **Video:** 7647633-hd_1920_1080_30fps.mp4 (autoplay, loop, muted)
- **Content:** H2 + red separator + description + 2 CTA buttons
- **Interaction model:** Static

### 6. Red Divider
- **Type:** Visual separator between sections 5 and 7
- **Height:** ~8px
- **Color:** rgb(221, 24, 59)

### 7. GPI Servicios de Construccion Section
- **Type:** Full-width video background
- **Height:** 680px
- **Video:** 1197802-hd_1920_1080_25fps.mp4 (autoplay, loop, muted)
- **Content:** H2 + red separator + description
- **Interaction model:** Static

### 8. Spacer
- **Height:** 50px

### 9. Clients Section ("Ellos confian en nosotros")
- **Type:** Flow content, white background
- **Height:** ~411px
- **Layout:** Heading centered + Spectra carousel of logos
- **Interaction model:** Auto-scrolling carousel
- **Logo count:** ~20+ unique logos

### 10. Spacer
- **Height:** 50px

### 11. Footer (Main)
- **Background:** rgb(48, 51, 50) (#303332)
- **Height:** 348px
- **Layout:** 3-column grid
  - Left: Logo + description text + copyright
  - Center: "Enlaces directos" heading + nav links
  - Right: LinkedIn social icon

### 12. Footer (Bottom Bar)
- **Background:** rgb(28, 28, 28) (#1C1C1C)
- **Height:** 70px
- **Content:** "Powered by Riva Estudio"

## Floating Elements
- **WhatsApp button:** Bottom-left, green, links to WhatsApp
- **Scroll-to-top:** Bottom-right, appears on scroll, red/orange circle with up arrow
