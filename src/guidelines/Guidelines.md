**Add your own guidelines here**
<!--

## Quick rules (always)
- Use **auto-layout** (Figma) for responsive content; prefer Flexbox/Grid equivalents when coding.
- Use the design tokens below — create **Color Styles**, **Text Styles**, and **Effect Styles** in Figma.
- Spacing scale = multiples of **8px** (8, 16, 24, 32, 40, 48…).
- Use **component variants** for states (default / hover / active / disabled / loading).
- Keep file sizes small: remove unused layers, flatten large images, export SVGs for icons.
- Refactor components as you go; keep helper functions/components in separate files when coding.

---

## Brand tokens (create these exact tokens in Figma)

### Primary palette (site-first: Navy / Gold)
- `--navy`            : `#001F3F`  (rgba(0,31,63,1))
- `--gold`            : `#B8860B`  (rgba(184,134,11,1))
- `--white-smoke`     : `#F5F5F5`  (rgba(245,245,245,1))
- `--text-dark`       : `#2B2B2B`  (rgba(43,43,43,1))
- `--divider`         : `#D9D9D9`  (rgba(217,217,217,1))

### Alternate palette (optional secondary / print: Burgundy system)
- `--burgundy`        : `#5A2A27`
- `--gold-alt`        : `#CFAE70`
- `--charcoal`        : `#2B2B2B`
- `--beige-soft`      : `#F5F0E6`

> Create Color Styles exactly named: `Brand / Primary`, `Brand / Accent`, `Neutral / Background`, `Neutral / Text`, `Neutral / Divider`, `Alt / Burgundy`, etc.

---

## Typography (create Text Styles)
- **Font family**: `Montserrat` (Google) — weights: `400`, `600`, `700`.
- **Base font-size**: `16px` (desktop body)
- **Text styles (names + specs)**:
  - `Heading / H1` — 36px, 700, line-height 1.1, letter-spacing -0.5px
  - `Heading / H2` — 28px, 700, line-height 1.2
  - `Heading / H3` — 22px, 600, line-height 1.25
  - `Body / Large` — 18px, 400, line-height 1.6
  - `Body / Regular` — 16px, 400, line-height 1.6
  - `Body / Small` — 14px, 400, line-height 1.4
  - `Micro` — 12px, 400
  - `Button / Primary` — 14px, 700, uppercase (use for CTA)
- Use **sentence case** for body text; **title case** for headings.

---

## Spacing & Layout
- **Spacing scale**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 (use multiples of 8 for major spacing).
- **Container widths**:
  - `max-width` = `1100px` (desktop)
  - Tablet breakpoint: `768px`
  - Mobile breakpoint: `375px` (min width)
- **Grid**: 12-column grid, 24px gutters for desktop, 16px gutters for tablet.
- **Section padding**: Desktop: `56px` top/bottom; Tablet: `40px`; Mobile: `24px`.

---

## Layout rules
- Prefer **left-aligned** content for readability.
- Use **consistent vertical rhythm** — baseline grid of 8px.
- For hero / large sections: use a 2-column layout (content : visual) with 60/40 or 1fr / 420px fallback for smaller screens.
- Use `auto-layout` with `hug contents` when stacking text blocks to avoid overflow.

---

## Components (create as Figma components with variants)

### Button
- **Primary**
  - Background: `--navy`
  - Text: `--white-smoke` (or #FFFFFF)
  - Padding: `12px 18px`
  - Border-radius: `8px`
  - Font: Montserrat 14px, 700
  - Hover: lighten navy by 8% (or use `#00325a`)
- **Secondary (outline)**
  - Border: `2px solid --navy`
  - Background: transparent
  - Text: `--navy`
  - Hover: fill `--navy`, text `--white-smoke`
- **Tertiary**
  - Text-only `--navy`, no border
- **Accessibility**: Ensure primary buttons have contrast ≥ **4.5:1** vs text.

### Card
- Background: `#FFFFFF` (or `white-smoke` for neutral)
- Border-radius: `12px`
- Box-shadow: `0 6px 18px rgba(0,0,0,0.06)`
- Padding: `24px`
- Use icon (40px) + title + 1–2 lines description + small CTA

### Input / Form Fields
- Background: `#FFFFFF`
- Border: `1px solid --divider`
- Border-radius: `8px`
- Padding: `10px 12px`
- Focus: `outline` 2px `--gold` or navy subtle glow
- Error: border `#D9534F` + inline message 12px

### Nav / Header
- Sticky top
- Logo left (SVG)
- Nav links right (use spacing 16px)
- CTA on the right as Primary button
- On mobile: hamburger toggles accessible menu (focus trapped)

### Footer
- Minimal, single column on mobile
- Include links, social icons, small legal text
- Background: `#FFFFFF` with `border-top: 1px solid --divider`

---

## Iconography & Imagery
- Icons: line-based, 1.5–2px stroke weight, 20–24px for inline, 40–48px for feature highlights.
- Export icons as **SVG** and inline them in code when possible.
- Images: export optimized **WebP** for web; keep originals in `assets/source`.
- Image masks: rounded corners 8px; use 4:3 ratio for cards and 16:9 for hero images.
- Image overlays: use a 30–45% dark navy (`--navy`) overlay when placing text on photos; use gold accents for CTA overlays.

---

## Accessibility (WCAG)
- Body text contrast: minimum **4.5:1** (text vs background). Headings minimum **3:1** permitted for large text only.
- Links & buttons: keyboard focus visible (use 2px outline color `--gold`).
- Use semantic HTML roles in dev: `<header>`, `<main>`, `<nav>`, `<footer>`, `<form>`.
- Provide `alt` for all images. Decorative images get empty alt `alt=""`.
- Ensure interactive elements have aria-labels where text isn’t visible.

---

## Responsiveness & Breakpoints
- Breakpoints:
  - mobile: 0–599px
  - tablet: 600–899px
  - desktop: ≥900px
- Stack multi-column components below `720px`.
- Reduce hero headline size and image presence on small screens (H1 28px mobile).
- Touch targets: minimum 44×44 px for touch elements.

---

## Motion & Interaction
- Use micro-interactions (ease-out) for hover/focus: `200ms` for hover, `300ms` for modals.
- Avoid heavy motion; prefer subtle transforms (translateY -4px, scale 1.03).
- Modal: trap focus, ESC closes, aria-hidden toggles.

---

## Tokens → CSS snippet (paste into your CSS / tokens file)
```css
:root{
  --navy: #001F3F;
  --gold: #B8860B;
  --white-smoke: #F5F5F5;
  --text-dark: #2B2B2B;
  --divider: #D9D9D9;
  --max-width: 1100px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-soft: 0 6px 18px rgba(0,0,0,0.06);
