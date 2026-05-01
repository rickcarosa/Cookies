import { createGlobalStyle } from 'styled-components'

import GreatVibesRegular        from '../assets/fonts/GreatVibes-Regular.woff2'
import CormorantGaramondLight   from '../assets/fonts/CormorantGaramond-Light.woff2'
import CormorantGaramondRegular from '../assets/fonts/CormorantGaramond-Regular.woff2'
import CormorantGaramondItalic  from '../assets/fonts/CormorantGaramond-Italic.woff2'
import JostLight                from '../assets/fonts/Jost-Light.woff2'
import JostRegular              from '../assets/fonts/Jost-Regular.woff2'
import JostMedium               from '../assets/fonts/Jost-Medium.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Great Vibes';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${GreatVibesRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${CormorantGaramondLight}) format('woff2');
  }

  @font-face {
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${CormorantGaramondRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${CormorantGaramondItalic}) format('woff2');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${JostLight}) format('woff2');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JostRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${JostMedium}) format('woff2');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    /* Offset anchor jumps so the fixed nav doesn't cover the top
       of the targeted section. Matches the hero's padding-top. */
    scroll-padding-top: 65px;
    scroll-behavior: smooth;
  }

  ${({ theme }) => theme.media.md} {
    html {
      scroll-padding-top: 74px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 300;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.parchment};
    color: ${({ theme }) => theme.colors.brown};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
