import {
  HeroWrapper,
  HeroText,
  HeroEyebrow,
  HeroTitle,
  HeroStudio,
  Divider,
  HeroTagline,
  HeroDesc,
  HeroCta,
  BtnPrimary,
  HeroImagePane,
  Botanical,
  ImageWrap,
  Ring,
  ImageHex,
  CookieImage,
  ScrollHint,
} from '../StyledComponents/Hero'
import logoimage from '../assets/images/logoimage.webp'

const BotanicalSprig = ({ className }) => (
  <Botanical
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M160,20 Q140,60 120,80 Q100,100 80,110 Q60,120 40,115"
      stroke="#6A8A5C"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse cx="130" cy="55" rx="18" ry="10" transform="rotate(-30 130 55)" fill="#6A8A5C" opacity="0.6" />
    <ellipse cx="110" cy="75" rx="15" ry="9"  transform="rotate(-20 110 75)" fill="#6A8A5C" opacity="0.55" />
    <ellipse cx="90"  cy="93" rx="14" ry="8"  transform="rotate(-10 90 93)"  fill="#6A8A5C" opacity="0.5" />
    <ellipse cx="145" cy="38" rx="14" ry="8"  transform="rotate(-50 145 38)" fill="#6A8A5C" opacity="0.5" />
    <circle cx="162" cy="22" r="3"   fill="#D4AE6A" opacity="0.7" />
    <circle cx="148" cy="16" r="2.5" fill="#D4AE6A" opacity="0.6" />
    <circle cx="155" cy="10" r="2"   fill="#D4AE6A" opacity="0.5" />
  </Botanical>
)

const Hero = () => (
  <HeroWrapper>
    <HeroText>
      <HeroEyebrow>Handcrafted with love</HeroEyebrow>
      <HeroTitle>Jojo&apos;s</HeroTitle>
      <HeroStudio>Sugar Studio</HeroStudio>
      <Divider>
        <span />
        <div className="gem" />
        <span />
      </Divider>
      <HeroTagline>
        Custom Cookies &amp; Treats<br />for Life&apos;s Sweetest Moments
      </HeroTagline>
      <HeroDesc>
        Every cookie is a tiny work of art — baked from scratch and
        decorated by hand, one brushstroke at a time.
      </HeroDesc>
      <HeroCta>
        <BtnPrimary href="#gallery">View Gallery</BtnPrimary>
      </HeroCta>
    </HeroText>

    <HeroImagePane>
      <BotanicalSprig className="top-right" />
      <BotanicalSprig className="bottom-left" />

      <ImageWrap>
        <Ring className="ring-1" />
        <Ring className="ring-2" />
        <ImageHex>
          <CookieImage src={logoimage} alt="Jojo's Sugar Studio cookie" />
        </ImageHex>
      </ImageWrap>

      <ScrollHint>
        <div className="scroll-line" />
        <span>Scroll</span>
      </ScrollHint>
    </HeroImagePane>
  </HeroWrapper>
)

export default Hero
