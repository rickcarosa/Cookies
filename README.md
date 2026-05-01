# Cookies

React app built with Vite and styled-components.

## Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React](https://react.dev/) — UI library
- [styled-components](https://styled-components.com/) — component-scoped styles

## Getting Started

```bash
nvm use 22
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx                        # Root component, renders the active page
├── main.jsx                       # Entry point, mounts GlobalStyles + App
├── shared/                        # App-wide styles and design tokens
│   ├── GlobalStyles.js            # CSS reset, base styles, 1rem = 16px baseline
│   └── theme.js                   # Design tokens: colors, fonts, spacing
├── Pages/                         # One file per route/page
│   └── Home.jsx
└── StyledComponents/              # Styled components, mirroring Pages/ structure
    └── Home.js
```

## Conventions

- ES6+ throughout: arrow functions, `const`/`let`, destructuring, template literals, named exports.
- Every page in `Pages/` has a matching file in `StyledComponents/`.
- CSS reset and base styles live in `src/shared/GlobalStyles.js` — no `index.css`.
- Design tokens (colors, fonts, spacing) live in `src/shared/theme.js`.
- `GlobalStyles` is rendered once at the top of `main.jsx`.

## Pages

| Page | File | Styles |
|------|------|--------|
| Home | `src/Pages/Home.jsx` | `src/StyledComponents/Home.js` |
