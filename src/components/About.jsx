import {
  AboutSection,
  AboutImage,
  AboutImagePlaceholder,
  AboutText,
  AboutLabel,
  AboutTitle,
  AboutBody,
  AboutCta,
} from '../StyledComponents/About'

const About = () => (
  <AboutSection id="about">
    <AboutImage>
      <AboutImagePlaceholder>Jojo&apos;s</AboutImagePlaceholder>
    </AboutImage>
    <AboutText>
      <AboutLabel>Our Story</AboutLabel>
      <AboutTitle>
        Made with <em>intention</em>
      </AboutTitle>
      <AboutBody>
        Every cookie begins as a blank canvas — shaped, baked, and transformed
        with royal icing, edible gold, and a steady hand. No two are ever
        quite the same.
      </AboutBody>
      <AboutCta href="#about">Learn More</AboutCta>
    </AboutText>
  </AboutSection>
)

export default About
