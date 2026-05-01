# Jojo's Sugar Studio — Home Page Implementation Plan

## Context
The A+B blend mockup (`mockups/design-ab-blend.html`) has been approved as the design direction for the site. The goal is to translate that static HTML mockup into the existing React + styled-components project, section by section. The project already has a working structure (Vite, React 19, styled-components, a `theme.js`, and a `GlobalStyles.js`) but is essentially empty. No orders will be taken for now, so all order-related CTAs are excluded.

---

## Critical Files
- `src/shared/theme.js` — design tokens (currently empty colors/spacing)
- `src/shared/GlobalStyles.js` — global CSS reset (font-family reference is broken)
- `src/Pages/Home.jsx` — home page assembly point
- `src/StyledComponents/Home.js` — home page wrapper styles
- `public/index.html` — where Google Fonts `<link>` tag will be added
- `mockups/design-ab-blend.html` — source of truth for all styles

---

## Responsiveness Conventions (applies to every section)

The site must work fluidly on phones, tablets, and desktops. Every section below follows these rules:

### Breakpoints (defined in `src/shared/theme.js`)
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
- Two-column grid layouts in the mockup (Hero, About) collapse to single column on mobile.
- Fixed nav links collapse to a hamburger menu at `< md`.

### Fluid typography
- Use `clamp(min, vw, max)` for hero/section titles so type scales smoothly.
- Already present in the mockup; preserve when porting.

### Per-section testing checkpoint
After each section is built, verify at three widths in browser devtools:
- **375px** (iPhone SE / standard phone)
- **768px** (iPad portrait)
- **1280px** (small desktop)

No section is "done" until it looks right at all three.

---

## Section 0 — Foundation

**Files to change:** `src/shared/theme.js`, `src/shared/GlobalStyles.js`  
**New files:** `src/assets/fonts/` (font files), `src/assets/colors.js`

### Steps
1. **Download fonts** and place `.woff2` files into `src/assets/fonts/`:
   - `GreatVibes-Regular.woff2`
   - `CormorantGaramond-Regular.woff2`, `CormorantGaramond-Italic.woff2`, `CormorantGaramond-Light.woff2`
   - `Jost-Light.woff2`, `Jost-Regular.woff2`, `Jost-Medium.woff2`

2. **Create `src/assets/colors.js`** — single source of truth for all color tokens:
   ```js
   const colors = {
     parchment:  '#F4EDD9',
     parchment2: '#EDE3CC',
     parchment3: '#E5D8BE',
     brown:      '#3B2E1E',
     brownMid:   '#7A6850',
     gold:       '#B8903C',
     goldLight:  '#D4AE6A',
     goldPale:   '#E8CFA0',
     sage:       '#6A8A5C',
     sageDark:   '#4A6840',
     dark:       '#1E1810',
     dark2:      '#272010',
     warmWhite:  '#FAF6EE',
   }
   export default colors
   ```

3. **Update `src/shared/theme.js`** — import `colors.js` and update fonts to reference local families:
   ```js
   import colors from '../assets/colors'
   const theme = {
     colors,
     fonts: {
       script: "'Great Vibes', cursive",
       serif:  "'Cormorant Garamond', serif",
       sans:   "'Jost', sans-serif",
     }
   }
   ```

4. **Update `src/shared/GlobalStyles.js`** — add `@font-face` blocks pointing to `src/assets/fonts/`, fix the broken `var(--font-sans)` reference to use `${({ theme }) => theme.fonts.sans}`, and set base `background` and `color` from theme tokens.

---

## Section 1 — Nav

**New files:** `src/components/Nav.jsx`, `src/StyledComponents/Nav.js`

### Content
- Left: Hexagon SVG monogram badge + "Jojo's" script wordmark (inline SVG from mockup)
- Center: Links — Home | Gallery | About
- Right: *(empty — no order button)*

### Styled components to create
`NavWrapper`, `NavBrand`, `HexBadge`, `NavLogo`, `NavLinks`

### Key styles (from mockup)
- Fixed, `backdrop-filter: blur(10px)`, parchment background at 93% opacity
- Bottom border: `1px solid rgba(184,144,60,0.2)`
- Nav link underline slide-in on hover via `::after` pseudo-element

---

## Section 2 — Hero

**New files:** `src/components/Hero.jsx`, `src/StyledComponents/Hero.js`

### Content
- **Left column:** eyebrow label → "Jojo's" script title → "Sugar Studio" subtitle → diamond divider → tagline ("Custom Cookies & Treats for Life's Sweetest Moments") → italic description → two CTA buttons ("View Gallery" / "Custom Orders")
- **Right column:** parchment background with botanical SVG leaf accents, hexagonal image container (CSS `clip-path`), two spinning ring animations, scroll hint at bottom

### Styled components to create
`HeroWrapper`, `HeroText`, `HeroEyebrow`, `HeroTitle`, `HeroStudio`, `Divider`, `HeroTagline`, `HeroDesc`, `HeroCta`, `BtnPrimary`, `BtnSecondary`, `HeroImagePane`, `ImageWrap`, `Ring`, `ImageHex`, `ScrollHint`

### Key styles
- `display: grid; grid-template-columns: 1fr 1fr`
- Hexagon clip-path: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`
- Ring spin: `@keyframes spin { to { transform: rotate(360deg) } }`, 28s / 44s durations
- Scroll hint pulse animation

### Image handling
- Wire `<img>` tag with `src` pointing to `src/assets/hero.png` (already exists)
- Fall back to the placeholder "J" text until image is confirmed correct

---

## Section 3 — Marquee

**New files:** `src/components/Marquee.jsx`, `src/StyledComponents/Marquee.js`

### Content
Scrolling strip: Custom Orders ✦ Weddings ✦ Birthdays ✦ Baby Showers ✦ Corporate Events ✦ Holidays (items duplicated for seamless loop)

### Styled components
`MarqueeBar`, `MarqueeTrack`, `MarqueeItem`, `MarqueeDot`

### Key styles
- `background: sageDark`, 13px vertical padding
- `@keyframes marquee` translates from `0%` to `-50%` over 22s

---

## Section 4 — Brand Pillars

**New files:** `src/components/Pillars.jsx`, `src/StyledComponents/Pillars.js`

### Content
4-column grid, each with an inline SVG icon and label:
1. Made with Love — heart outline
2. Custom Cookies — circle with small dot details (cookie shape)
3. Thoughtful Details — botanical branch with leaves
4. Perfect for Every Occasion — gift box with ribbon

### Styled components
`PillarsSection`, `PillarsGrid`, `Pillar`, `PillarIcon`, `PillarName`

### Key styles
- `grid-template-columns: repeat(4, 1fr)`
- Dividers via `border-left: 1px solid rgba(184,144,60,0.15)` (first child: none)
- Parchment background, bottom border

---

## Section 5 — Gallery

**New files:** `src/components/Gallery.jsx`, `src/StyledComponents/Gallery.js`

### Content
- Section header: eyebrow label + "Each cookie, a *masterpiece*" title
- 5-cell masonry grid: first item spans 2 rows; labels slide up on hover

### Styled components
`GallerySection`, `SectionLabel`, `SectionTitle`, `GalleryGrid`, `GalleryItem`, `GalleryInner`, `GalleryLabel`

### Key styles
- `grid-template-columns: 1.5fr 1fr 1fr; grid-template-rows: 280px 280px`
- `.g-item:first-child { grid-row: span 2 }`
- Label: `transform: translateY(100%)` → `translateY(0)` on hover, `0.38s ease`
- Image scale: `transform: scale(1.05)` on hover, `0.55s ease`

---

## Section 6 — About

**New files:** `src/components/About.jsx`, `src/StyledComponents/About.js`

### Content
- Left: dark panel (image placeholder / future photo)
- Right: dark panel with eyebrow, heading ("Made with *intention*"), italic paragraph, "Learn More" button

### Styled components
`AboutSection`, `AboutImage`, `AboutText`

### Key styles
- `display: grid; grid-template-columns: 1fr 1fr; min-height: 520px`
- Both panels use `dark` / `dark2` tokens
- Subtle green radial glow on image panel

---

## Section 7 — Quote

**New files:** `src/components/Quote.jsx`, `src/StyledComponents/Quote.js`

### Content
Centered italic pull-quote with large decorative `"` background character and attribution line.

### Styled components
`QuoteSection`, `QuoteText`, `QuoteAttr`

### Key styles
- `background: parchment2`
- Oversized `"` via `::before`, `font-size: 18rem`, `opacity: 0.06`
- Quote text: Cormorant Garamond, italic, `clamp(1.5rem, 3vw, 2.3rem)`

---

## Section 8 — Footer

**New files:** `src/components/Footer.jsx`, `src/StyledComponents/Footer.js`

### Content
3-column grid:
- Left: "Jojo's Sugar Studio" logo + italic tagline
- Center: Instagram link (`@jojossugarstudio`) + copyright
- Right: nav links (Gallery | About) — no order link

### Styled components
`FooterWrapper`, `FooterLeft`, `FooterLogo`, `FooterTagline`, `FooterCenter`, `FooterInstagram`, `FooterCopy`, `FooterRight`

### Key styles
- `background: dark`, `grid-template-columns: 1fr auto 1fr`
- Top border: `1px solid rgba(184,144,60,0.12)`
- Instagram SVG icon inline

---

## Home Page Assembly

**Files to update:** `src/Pages/Home.jsx`, `src/StyledComponents/Home.js`

Import and render all section components in order:
```jsx
<Nav />
<Hero />
<Marquee />
<Pillars />
<Gallery />
<About />
<Quote />
<Footer />
```

`HomeWrapper` in `Home.js` can simply remove the `padding: 2rem` and become a transparent passthrough.

---

## Verification
1. Run `npm run dev` and open `localhost:5173`
2. Visually compare each section against `mockups/design-ab-blend.html` side by side in the browser
3. Check hover interactions: nav link underlines, gallery label slide-up, gallery image scale, button hover states, ring animations
4. Confirm fonts load (Great Vibes script should appear in logo/title)
5. Confirm the hero image (`src/assets/hero.png`) renders correctly in the hexagonal container
