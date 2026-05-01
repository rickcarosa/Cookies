import styled from 'styled-components'

export const QuoteSection = styled.section`
  padding: 70px 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.parchment2};
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 12rem;
    color: rgba(184, 144, 60, 0.06);
    line-height: 1;
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    padding: 90px 56px;

    &::before {
      top: 30px;
      font-size: 16rem;
    }
  }

  ${({ theme }) => theme.media.lg} {
    padding: 65px 88px;

    &::before {
      top: 30px;
      font-size: 18rem;
    }
  }
`

export const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(1.3rem, 3vw, 2.3rem);
  font-style: italic;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.brown};
  max-width: 760px;
  margin: 0 auto 22px;
  line-height: 1.65;
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.gold};
  }

  ${({ theme }) => theme.media.md} {
    margin-bottom: 26px;
  }
`

export const QuoteAttr = styled.p`
  font-size: 0.62rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};

  ${({ theme }) => theme.media.md} {
    font-size: 0.64rem;
    letter-spacing: 0.34em;
  }
`
