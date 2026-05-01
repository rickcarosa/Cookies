import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  padding: 40px 24px;
  border-top: 1px solid rgba(184, 144, 60, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;

  ${({ theme }) => theme.media.md} {
    padding: 50px 48px;
    flex-direction: row;
    align-items: center;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 32px;
  }

  ${({ theme }) => theme.media.lg} {
    padding: 20px 88px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;

  ${({ theme }) => theme.media.md} {
    align-items: flex-start;
  }
`;

export const FooterLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1.05;
  /* Centered so wrapped lines (e.g. "Studio" on its own row at narrow
     desktop widths) sit centered under the rest of the wordmark. */
  text-align: center;

  ${({ theme }) => theme.media.md} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.media.lg} {
    font-size: 2rem;
  }
`;

export const FooterTagline = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.78rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.06em;

  ${({ theme }) => theme.media.md} {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }
`;

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const FooterInstagram = styled.a`
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.goldLight};
  }
`;

export const FooterCopy = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.gold};
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  ${({ theme }) => theme.media.md} {
    justify-content: flex-end;
    gap: 28px;
  }

  a {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.goldLight};
    }
  }
`;
