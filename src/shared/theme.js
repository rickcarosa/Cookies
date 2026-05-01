import colors from '../assets/colors'

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

const theme = {
  colors,
  fonts: {
    script: "'Great Vibes', cursive",
    serif:  "'Cormorant Garamond', serif",
    sans:   "'Jost', sans-serif",
  },
  breakpoints,
  media: {
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
  },
  spacing: {},
}

export default theme
