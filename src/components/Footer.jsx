import {
  FooterWrapper,
  FooterLeft,
  FooterLogo,
  FooterTagline,
  FooterCenter,
  FooterInstagram,
  FooterCopy,
  FooterRight,
} from '../StyledComponents/Footer'

const Footer = () => (
  <FooterWrapper>
    <FooterLeft>
      <FooterLogo>Jojo&apos;s Sugar Studio</FooterLogo>
      <FooterTagline>
        Custom Cookies &amp; Treats for Life&apos;s Sweetest Moments
      </FooterTagline>
    </FooterLeft>

    <FooterCenter>
      <FooterInstagram
        href="https://instagram.com/jojossugarstudio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        @jojossugarstudio
      </FooterInstagram>
      <FooterCopy>© 2026 Jojo&apos;s Sugar Studio. All rights reserved.</FooterCopy>
    </FooterCenter>

    <FooterRight>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
    </FooterRight>
  </FooterWrapper>
)

export default Footer
