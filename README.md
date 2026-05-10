# Jojo's Sugar Studio

Marketing site for **Jojo's Sugar Studio**, a custom decorated sugar cookie business. The home page is a single-scroll layout that showcases the brand, the cookie collection, and the story behind the work.

> *"Custom Cookies & Treats for Life's Sweetest Moments"*

## Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React 19](https://react.dev/) — UI library
- [styled-components](https://styled-components.com/) — component-scoped styles, theme provider for design tokens

## Getting Started

```bash
nvm use 22
npm install
npm run dev
```

Then open `http://localhost:5173/`.

> **Note:** Vite requires Node 20.19+ or 22.12+. If `node --version` shows something older, run `nvm use 22` to switch — your shell may have an old `/usr/local/bin/node` shadowing nvm.

## Project Structure

```
src/
├── App.jsx                          # Root component, renders the active page
├── main.jsx                         # Entry: ThemeProvider + GlobalStyles + App
├── assets/
│   ├── colors.js                    # Brand color tokens (single source of truth)
│   ├── fonts/                       # Self-hosted .woff2 files (no CDN)
│   └── images/                      # WebP photos (logoimage, cookie1, flower, mothersday, apple, taco)
├── shared/
│   ├── GlobalStyles.js              # @font-face, CSS reset, scroll-padding
│   └── theme.js                     # Imports colors.js, defines fonts/breakpoints
├── Pages/
│   └── Home.jsx                     # Composes the eight section components
├── components/                      # One file per section of the home page
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── Pillars.jsx
│   ├── Gallery.jsx
│   ├── About.jsx
│   ├── Quote.jsx
│   └── Footer.jsx
└── StyledComponents/                # Styles, mirroring components/ structure
    ├── Home.js
    ├── Nav.js
    ├── Hero.js
    ├── Marquee.js
    ├── Pillars.js
    ├── Gallery.js
    ├── About.js
    ├── Quote.js
    └── Footer.js

mockups/                             # Static HTML mockups (design exploration)
public/
└── favicon.svg                      # Hexagon J badge matching the nav logo
IMPLEMENTATION_PLAN.md                # Section-by-section build plan
```

## Conventions

- ES6+ throughout: arrow functions, `const`/`let`, destructuring, named exports.
- Each home-page section is its own component in `src/components/`, paired with a same-named file in `src/StyledComponents/`.
- CSS reset, base styles, and `@font-face` declarations all live in `src/shared/GlobalStyles.js` — no standalone `.css` files.
- Design tokens (colors, fonts, breakpoints) live in `src/shared/theme.js` and are consumed via the styled-components `ThemeProvider`.
- `GlobalStyles` is rendered once at the top of `main.jsx`.

## Design Tokens

### Colors (from `src/assets/colors.js`)

| Token | Hex | Use |
|-------|-----|-----|
| `parchment` / `parchment2` / `parchment3` | `#F4EDD9` / `#EDE3CC` / `#E5D8BE` | Page and section backgrounds |
| `brown` | `#3B2E1E` | Primary text |
| `brownMid` | `#7A6850` | Secondary/italic body text |
| `gold` | `#B8903C` | Brand accent, headings, buttons, all footer text |
| `goldLight` / `goldPale` | `#D4AE6A` / `#E8CFA0` | Highlights and dividers |
| `sage` / `sageDark` | `#6A8A5C` / `#4A6840` | Botanical accents, marquee bar |
| `dark` / `dark2` | `#1E1810` / `#272010` | About section, footer |
| `warmWhite` | `#FAF6EE` | Button label color |

### Fonts

Self-hosted `.woff2` files (no Google Fonts CDN):

- **Great Vibes** — script display font (logo, hero title, footer wordmark)
- **Cormorant Garamond** — serif for italic body, taglines, section titles (Light/Regular/Italic)
- **Jost** — sans-serif UI font for nav, labels, buttons, eyebrows (Light/Regular/Medium)

### Breakpoints

| Token | Min width | Target |
|-------|-----------|--------|
| `sm`  | 480px     | Large phone |
| `md`  | 768px     | Tablet |
| `lg`  | 1024px    | Small desktop |
| `xl`  | 1280px    | Large desktop |

Used in styled components as `${({ theme }) => theme.media.md} { ... }`.

## Responsiveness

Mobile-first. Base styles target ≤ 480px; larger screens are progressive enhancements via media queries.

- The two-column layouts in **Hero** and **About** collapse to a single stacked column below `md`.
- The **Nav** collapses links into a hamburger dropdown below `md`. The hexagon J badge stays on the left at all sizes.
- The **Pillars** grid is `2×2` below `md`, then a single row of 4 at `md+`.
- The **Gallery** is a 2-column grid (with the featured item spanning full width) below `md`, then a 3-column masonry layout with the featured item spanning two rows at `md+`.
- The **Footer** stacks vertically below `md`, then becomes a 3-column grid at `md+`. The script wordmark is `text-align: center` so wrapped lines (e.g. "Studio" on a second row) stay centered under the rest.
- After each section, verify at **375px / 768px / 1280px** in browser devtools.

## Home Page Sections

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Nav | `Nav.jsx` | Hexagon J badge (left), centered "Jojo's Sugar Studio" wordmark, nav links (right). Hamburger menu below `md`. |
| 2 | Hero | `Hero.jsx` | Split layout: text left, parchment image pane right with the hexagonal logo cookie (`logoimage.webp`) inside spinning rings. "Custom Orders" CTA was intentionally omitted — see *No-orders policy* below. |
| 3 | Marquee | `Marquee.jsx` | Sage-dark scrolling strip listing occasions (Weddings, Birthdays, etc.). Items duplicated under the hood for a seamless loop. |
| 4 | Pillars | `Pillars.jsx` | Four brand pillars with hand-drawn outline SVGs: Heart, Cookie, Branch, Gift Box. |
| 5 | Gallery | `Gallery.jsx` | Five-cell masonry. Featured tile spans 2 rows on desktop. Labels slide up on hover (md+); always visible on mobile for tap-friendliness. |
| 6 | About | `About.jsx` | Dark two-panel split: image placeholder left, "Made with intention" copy right. |
| 7 | Quote | `Quote.jsx` | Centered italic pull-quote with oversized decorative `"` watermark. |
| 8 | Footer | `Footer.jsx` | Wordmark + tagline left, Instagram link + copyright center, nav links right. All text in `gold`. |

### Anchor scrolling

The header and footer "Gallery" / "About" links scroll smoothly via `scroll-behavior: smooth` and offset for the fixed nav via `scroll-padding-top` (65px on mobile, 74px on desktop) — both set on `html` in `GlobalStyles.js`.

### No-orders policy

The site is currently informational only. All ordering CTAs from the original mockup have been removed:

- "Place an Order" button in the nav
- "Custom Orders" button in the hero
- "Order" link in the footer
- "Custom Orders" item in the marquee

If/when ordering becomes available, those can be reintroduced.

## Favicon

`public/favicon.svg` is a self-contained SVG of the same hexagon J badge used in the nav. SVG favicons can't load `@font-face` fonts, so the J falls back to the system script font (Snell Roundhand on macOS, Segoe Script on Windows) — close in spirit to Great Vibes but not pixel-identical. If exact-match fidelity is needed, the J can be redrawn as an SVG path.

## Implementation Plan

The full section-by-section build plan is in [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md).
