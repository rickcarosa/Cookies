import { useState } from 'react'
import {
  NavWrapper,
  NavBrand,
  HexBadge,
  NavLogo,
  HamburgerBtn,
  NavLinks,
  NavRight,
  BrandWordmark,
} from '../StyledComponents/Nav'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <NavWrapper>
      <NavBrand href="#" onClick={close}>
        <HexBadge viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="30,3 57,18 57,52 30,67 3,52 3,18"
            fill="none"
            stroke="#B8903C"
            strokeWidth="1.5"
          />
          <text
            x="50%"
            y="50%"
            dy="0.32em"
            textAnchor="middle"
            fontFamily="'Great Vibes', cursive"
            fontSize="32"
            fill="#B8903C"
          >
            J
          </text>
        </HexBadge>
        <NavLogo>Jojo&apos;s</NavLogo>
      </NavBrand>

      <NavRight>
        <BrandWordmark>Jojo&apos;s Sugar Studio</BrandWordmark>
      </NavRight>

      <NavLinks $open={open}>
        <li><a href="#" onClick={close}>Home</a></li>
        <li><a href="#gallery" onClick={close}>Gallery</a></li>
        <li><a href="#about" onClick={close}>About</a></li>
      </NavLinks>

      <HamburgerBtn
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        $open={open}
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </HamburgerBtn>
    </NavWrapper>
  )
}

export default Nav
