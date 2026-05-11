# FloatingElements Specification

## Overview
- **Target file:** `src/components/FloatingElements.tsx`
- **Interaction model:** Scroll-triggered (scroll-to-top appears after scrolling)

## WhatsApp Button
- Position: fixed
- Bottom: 16px
- Left: 16px
- Z-index: 50
- Size: 50px x 50px
- Border-radius: 50% (circle)
- Background: transparent (the SVG has its own green fill)
- Contains WhatsApp SVG icon from icons.tsx
- Link: opens WhatsApp (href="https://wa.me/..." or just "#" as placeholder)
- Cursor: pointer
- Drop shadow: subtle shadow for depth

## Scroll-to-Top Button
- Position: fixed
- Bottom: 20px
- Right: 20px
- Z-index: 50
- Size: 40px x 40px
- Border-radius: 50% (circle)
- Background: rgb(221, 24, 59) / #DD183B
- Color: white
- Contains ChevronUpIcon from icons.tsx (size ~20px)
- Display: flex, items-center, justify-center
- Cursor: pointer
- Behavior: hidden when at top of page, appears after scrolling ~300px
- onClick: window.scrollTo({ top: 0, behavior: 'smooth' })
- Transition: opacity 0.3s ease for show/hide

## Implementation Note
- Use useState + useEffect with scroll listener for show/hide
- "use client" directive needed
