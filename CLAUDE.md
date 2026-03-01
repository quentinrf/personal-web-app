# Portfolio Design System

## Aesthetic: Apple-Inspired Light (Cream)
This portfolio follows Apple's design language adapted for a cream/off-white background.

### Colors
- Background:       #FAF9F7  (static, no animation)
- Text primary:     #1d1d1f
- Text secondary:   #6e6e73
- Text tertiary:    rgba(0,0,0,0.40)
- Card border:      rgba(0,0,0,0.08)
- Card surface:     rgba(0,0,0,0.025)
- Accent:           #5B5BD6  (indigo — active states, highlights)
- Spotlight:        rgba(88,28,220,0.10) for SpotlightCard

### Typography
- Font: -apple-system / SF Pro Display / system-ui
- Headings: font-weight 700, letter-spacing -0.03em to -0.04em
- Body: font-weight 400, line-height 1.65, color #6e6e73
- Labels/eyebrows: 0.8125rem, letter-spacing 0.14em, uppercase, rgba(0,0,0,0.40)
- Use clamp() for all heading font sizes — never fixed px

### Motion
- Spring physics: mass 0.1, stiffness 150, damping 12 (Framer Motion)
- GSAP ScrollTrigger for scroll-driven reveals (stagger 0.12–0.15s)
- Page transitions: Framer Motion fade opacity 0→1, 0.3s
- Hover: scale via spring (1.04–1.06×), never linear ease

### Layout
- Max content width: 960px, centered
- Side padding: 48px desktop / 24px mobile
- Section vertical padding: 80–120px
- Breakpoint: 640px (mobile)

### Components
- Cards: SpotlightCard (spotlightColor rgba(88,28,220,0.10)) or GlassSurface for buttons
- Nav: ReactBits Dock, fixed bottom-center, 24px from viewport bottom
- Background: Static #FAF9F7 — Aurora kept in codebase for dark mode, not rendered in light mode
- Modals: backdrop blur(8px), cream panel, Framer Motion AnimatePresence

### Rules
- Never use a dark background in light mode; never use a light background in dark mode
- No emoji in UI unless explicitly requested
- All interactive elements have spring-physics hover states
- color-scheme: light (update to `light dark` when dark mode is added)
- The dock is the only navigation — no top nav bar
