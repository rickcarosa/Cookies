# Jojo's Sugar Studio — Home Page Implementation Plan

## Context
The A+B blend mockup (`mockups/design-ab-blend.html`) was approved as the design direction. This plan tracks the section-by-section translation of that static mockup into the React + styled-components project. The site is informational only for now — **no orders are being taken**, so every order-related CTA from the mockup was intentionally omitted.

**Status:** ✅ All eight sections built and assembled in `src/Pages/Home.jsx`.

---

## Critical Files
- `src/shared/theme.js` — design tokens (colors, fonts, breakpoints, media helpers)
- `src/shared/GlobalStyles.js` — `@font-face` declarations, CSS reset, anchor scroll offset
- `src/main.jsx` — wraps the app in `ThemeProvider`
- `src/assets/colors.js` — single source of truth for color tokens
- `src/assets/fonts/` — self-hosted `.woff2` font files
- `src/assets/cookie1.png` — hero cookie photo (transparent hexagonal PNG)
- `public/favicon.svg` — hexagon J badge favicon
- `mockups/design-ab-blend.html` — visual reference for all styles

---

## Responsiveness Conventions (applies to every section)

The site must work fluidly on phones, tablets, and desktops. Every section follows these rules:

### Breakpoints (`src/shared/theme.js`)
| Token | Min width | Target |
|-------|-----------|--------|
| `sm`  | 480px     | Large phone |
| `md`  | 768px     | Tablet |
| `lg`  | 1024px    | Small desktop |
| `xl`  | 1280px    | Large desktop |

### Usage in styled components
```js
${({ theme }) => theme.media.md} {
  /* tablet+ overrides */
}
```

### Mobile-first rule
- Base styles target **mobile** (≤ 480px). No media query needed.
- Larger-screen styles are progressive enhancements via `theme.media.md / lg / xl`.
- Two-column grid layouts (Hero, About) collapse to single column below `md`.
- Fixed nav links collapse to a hamburger menu at `< md`.

### Fluid typography
- Use `clamp(min, vw, max)` for hero/section titles so type scales smoothly.

### Per-section testing checkpoint
After each section, verify at **375px / 768px / 1280px** in browser devtools.

---

## Section 0 — Foundation ✅

**Files changed:** `src/shared/theme.js`, `src/shared/GlobalStyles.js`, `src/main.jsx`
**New files:** `src/assets/fonts/` (7 woff2), `src/assets/colors.js`

### What was built
1. **Self-hosted fonts** — downloaded the Latin subset `.woff2` files from Google Fonts CDN and stored them locally (no `index.html` `<link>` tag, no runtime CDN call):
   - `GreatVibes-Regular.woff2`
   - `CormorantGaramond-Light.woff2`, `CormorantGaramond-Regular.woff2`, `CormorantGaramond-Italic.woff2`
   - `Jost-Light.woff2`, `Jost-Regular.woff2`, `Jost-Medium.woff2`

2. **`src/assets/colors.js`** — exports the full palette (parchment, brown, gold, sage, dark variants, etc.).

3. **`src/shared/theme.js`** — imports `colors`, defines fonts, breakpoints, and `media` helpers.

4. **`src/shared/GlobalStyles.js`** — adds `@font-face` blocks pointing to the local woff2 files, applies the theme-driven body background and text color, and adds `scroll-padding-top` (65/74px) plus `scroll-behavior: smooth` for anchor jumps.

5. **`src/main.jsx`** — wrapped `<App />` in `<ThemeProvider theme={theme}>`.

---

## Section 1 — Nav ✅

**New files:** `src/components/Nav.jsx`, `src/StyledComponents/Nav.js`

### What was built
- **Mobile (< md)**: hexagon J badge + script "Jojo's" wordmark on the left, hamburger button on the right. Tapping the hamburger drops a full-width vertical menu (Home / Gallery / About) and morphs the icon into an X.
- **Desktop (≥ md)**: hexagon J badge on the left, **"Jojo's Sugar Studio" wordmark absolutely centered to the nav bar** (`position: absolute; left: 50%; translateX(-50%)`), and the three nav links on the right. The wordmark stays in the center regardless of badge or link widths.
- **Padding:** `14px 20px` mobile, **`18px 30px`** at md+.
- **Scroll-aware anchor jumps:** anchor targets honor `scroll-padding-top` set globally.

### Deviations from plan
- Plan originally placed the wordmark in the right slot. After iteration the wordmark moved to the **center** and the nav links to the right.
- "Place an Order" CTA was removed (not taking orders).

---

## Section 2 — Hero ✅

**New files:** `src/components/Hero.jsx`, `src/StyledComponents/Hero.js`
**Asset:** `src/assets/cookie1.png` (replaced the original `cookie1.jpeg` with a transparent PNG already cropped to the cookie's hexagon outline)

### What was built
- **Layout:** `1fr` mobile, `1fr 1fr` at md+. `min-height: 100vh`, `padding-top: 65px` mobile / `74px` md.
- **Left column (text):** eyebrow → "Jojo's" script title → "Sugar Studio" subtitle → diamond divider → tagline → italic description → single "View Gallery" CTA.
  - Centered (`align-items: center; text-align: center`) on mobile when stacked.
  - **Padding `50px 56px 50px 50px` at md+** (per design feedback).
  - **`HeroStudio` margins:** `margin-top: 16px; margin-bottom: 10px`.
- **Right column (image pane):** parchment background with botanical SVG sprigs (top-right and bottom-left), spinning ring animations, and the cookie photo.
  - Cookie image uses `object-fit: contain` + `filter: drop-shadow(...)` so the soft shadow follows the hexagonal alpha edges (no clip-path needed since the PNG itself is hexagon-shaped with transparent corners).
  - Two rings spin on independent timers (28s + 44s reverse) with a small ✦ on the inner ring.
- **Scroll hint:** appears at `lg+` only, pulsing animated line + "Scroll" label.

### Deviations from plan
- "Custom Orders" CTA removed (only "View Gallery" remains).
- Cookie image is provided as a transparent PNG, so we removed the planned `clip-path` hexagon mask and `linear-gradient` placeholder background — the image's own alpha channel defines the shape.

---

## Section 3 — Marquee ✅

**New files:** `src/components/Marquee.jsx`, `src/StyledComponents/Marquee.js`

### What was built
- Sage-dark (`#4A6840`) horizontal strip with continuously scrolling occasion labels: **Weddings · Birthdays · Baby Showers · Bridal Showers · Holidays · Special Events**.
- Items separated by gold ✦ stars.
- Items duplicated in the array so the `0% → -50%` keyframe animation loops seamlessly.
- 22-second linear infinite animation.

### Deviations from plan
- "Custom Orders" was dropped from the list (not taking orders).

---

## Section 4 — Brand Pillars ✅

**New files:** `src/components/Pillars.jsx`, `src/StyledComponents/Pillars.js`

### What was built
- Four pillars with inline outline SVG icons:
  1. **Made with Love** — heart outline
  2. **Custom Cookies** — circle with chocolate-chip dots
  3. **Thoughtful Details** — botanical branch with leaves
  4. **Perfect for Every Occasion** — gift box with bow
- **Mobile:** `2×2` grid with vertical and horizontal dividers, no border on first/last row edges.
- **md+:** single row of 4, vertical dividers between, no horizontal dividers.

### Adjustments after build
- Padding tuned down to `10px 20px` mobile, `20px 40px` md, `20px 50px` lg.
- The "Custom Cookies" icon was originally a star outline — replaced with the cookie-with-chips icon for accuracy.

---

## Section 5 — Gallery ✅

**New files:** `src/components/Gallery.jsx`, `src/StyledComponents/Gallery.js`

### What was built
- Section header: "The Collection" eyebrow + "Each cookie, a *masterpiece*" title.
- 5-cell masonry grid with placeholder gradients per cell (real cookie photos can be dropped in later).
- **Mobile (< md):** 2-column grid; first/featured tile spans both columns; labels are always visible.
- **Tablet+ (≥ md):** `1.5fr 1fr 1fr` with the featured tile spanning 2 rows; labels slide up on hover; tiles scale `1.05` on hover.

### Adjustments after build
- Padding at md+ tuned to **`35px 48px`** (no separate lg override).

---

## Section 6 — About ✅

**New files:** `src/components/About.jsx`, `src/StyledComponents/About.js`

### What was built
- Two dark panels: image placeholder (left) + text (right) with eyebrow, "Made with *intention*" title, italic copy, and "Learn More" gold button.
- **Mobile:** stacks vertically, content centered.
- **md+:** side-by-side, text left-aligned, **`min-height: 300px`**.

### Adjustments after build
- About section `min-height` reduced from 520px → **300px** at md+.
- Right panel padding (`AboutText`):
  - **Mobile:** `20px 24px`
  - **md:** `35px 56px 25px 56px`
  - **lg:** `35px 50px 35px 70px`
- Left panel (`AboutImage`) min-height reduced from 320px → **200px** on mobile.

---

## Section 7 — Quote ✅

**New files:** `src/components/Quote.jsx`, `src/StyledComponents/Quote.js`

### What was built
- Centered italic pull-quote with an oversized decorative `"` watermark behind it.
- Attribution line in gold uppercase letterspacing below.
- Background uses `parchment2`.

### Adjustments after build
- Padding at lg tuned to **`65px 88px`** (down from 110px 88px).

---

## Section 8 — Footer ✅

**New files:** `src/components/Footer.jsx`, `src/StyledComponents/Footer.js`

### What was built
- Three sections:
  - **Left:** "Jojo's Sugar Studio" wordmark in script + italic tagline. `text-align: center` so wrapped lines (e.g. "Studio" on a second row at narrow desktop widths) stay centered under the rest.
  - **Center:** Instagram link (`@jojossugarstudio` with inline SVG icon, opens in new tab) + copyright line.
  - **Right:** "Gallery" and "About" anchor links (no order link).
- **Mobile:** stacks vertically, all centered.
- **md+:** `grid-template-columns: 1fr auto 1fr`.
- **lg:** padding tuned to `20px 88px` (smaller top padding); wordmark sized to **`2rem`**.
- **All footer text** uses the `gold` color (matching the wordmark) — tagline, Instagram link, copyright, and right-side links. Hovers on links lighten to `goldLight`.

---

## Home Page Assembly ✅

**Files updated:** `src/Pages/Home.jsx`, `src/StyledComponents/Home.js`

```jsx
<HomeWrapper>
  <Nav />
  <Hero />
  <Marquee />
  <Pillars />
  <Gallery />
  <About />
  <Quote />
  <Footer />
</HomeWrapper>
```

`HomeWrapper` is a transparent passthrough (`width: 100%`).

---

## Cross-cutting changes

These were applied after sections were built:

- **Anchor scrolling** — `scroll-behavior: smooth` and `scroll-padding-top` (65/74px) on `html` in `GlobalStyles.js` so clicks on `#gallery` / `#about` from the nav or footer don't get covered by the fixed nav bar.
- **Favicon** — `public/favicon.svg` rewritten as the gold hexagon J badge (matches the nav). Uses system script font fallbacks since SVG favicons can't load `@font-face`.
- **Git** — `http.postBuffer` raised to 500 MB to handle the cookie image PNG without HTTP 400 errors on push.

---

## Verification

1. Run `nvm use 22 && npm run dev`, open `localhost:5173`.
2. Visually compare each section against `mockups/design-ab-blend.html`.
3. Check hover interactions: nav link underlines (desktop), gallery label slide-up + image scale, button hovers, ring animations.
4. Confirm fonts: Great Vibes script in nav wordmark + hero title + footer logo.
5. Confirm cookie image renders inside the hero hexagon with botanical sprigs and spinning rings.
6. Test all three breakpoints in devtools: **375px / 768px / 1280px**.
7. Click "Gallery" and "About" from nav and footer — sections should land below the fixed nav with smooth scroll.
