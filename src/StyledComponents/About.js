import styled from 'styled-components'

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1fr;
    min-height: 300px;
  }
`

export const AboutImage = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 200px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 55% 55% at 40% 50%,
      rgba(106, 138, 92, 0.12) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    min-height: auto;
  }
`

export const AboutImagePlaceholder = styled.div`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 3.5rem;
  color: rgba(184, 144, 60, 0.18);
  position: relative;

  ${({ theme }) => theme.media.md} {
    font-size: 5rem;
  }
`

export const AboutText = styled.div`
  background: ${({ theme }) => theme.colors.dark2};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.media.md} {
    align-items: flex-start;
    text-align: left;
    padding: 35px 56px 25px 56px;
  }

  ${({ theme }) => theme.media.lg} {
    padding: 35px 50px 35px 70px;
  }
`

export const AboutLabel = styled.p`
  font-size: 0.65rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.goldLight};
  opacity: 0.75;
  margin-bottom: 16px;
`

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.75rem, 3.5vw, 2.8rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.warmWhite};
  margin-bottom: 24px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.goldLight};
  }
`

export const AboutBody = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.05rem;
  font-style: italic;
  line-height: 1.85;
  color: rgba(244, 237, 217, 0.55);
  margin-bottom: 36px;
  max-width: 460px;

  ${({ theme }) => theme.media.md} {
    font-size: 1.15rem;
    line-height: 1.9;
    margin-bottom: 44px;
  }
`

export const AboutCta = styled.a`
  display: inline-block;
  padding: 13px 38px;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.warmWhite};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.sageDark};
  }

  ${({ theme }) => theme.media.md} {
    padding: 13px 44px;
  }
`
