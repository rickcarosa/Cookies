import styled, { css } from 'styled-components'

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: ${({ theme }) => `${theme.colors.parchment}EE`};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(184, 144, 60, 0.2);

  ${({ theme }) => theme.media.md} {
    padding: 18px 30px;
  }
`

export const NavBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
`

export const HexBadge = styled.svg`
  width: 32px;
  height: 38px;
  flex-shrink: 0;

  ${({ theme }) => theme.media.md} {
    width: 38px;
    height: 44px;
  }
`

export const NavLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1;

  /* Hidden on desktop — full brand text moves to the right */
  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

/* Hamburger button — mobile only */
export const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.brown};
    transition: transform 0.3s ease, opacity 0.2s ease;
  }

  ${({ $open }) => $open && css`
    span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
  `}

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`

export const NavLinks = styled.ul`
  /* Mobile: full-width dropdown panel */
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  background: ${({ theme }) => theme.colors.parchment};
  border-bottom: 1px solid rgba(184, 144, 60, 0.2);
  padding: 8px 0;
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-110%)')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: transform 0.3s ease, opacity 0.25s ease;

  li {
    text-align: center;
  }

  a {
    display: block;
    padding: 16px 24px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.brown};
  }

  /* Tablet+: inline horizontal nav */
  ${({ theme }) => theme.media.md} {
    position: static;
    flex-direction: row;
    gap: 36px;
    background: transparent;
    border-bottom: none;
    padding: 0;
    transform: none;
    opacity: 1;
    pointer-events: auto;

    a {
      padding: 0 0 3px 0;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: ${({ theme }) => theme.colors.gold};
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  ${({ theme }) => theme.media.lg} {
    gap: 44px;
  }
`

/* Brand wordmark — absolutely centered to the entire nav bar so its
   position is independent of the badge and link widths. */
export const NavRight = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`

export const BrandWordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1;

  ${({ theme }) => theme.media.lg} {
    font-size: 2.1rem;
  }
`
