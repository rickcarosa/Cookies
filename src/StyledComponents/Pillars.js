import styled from 'styled-components';

export const PillarsSection = styled.section`
  background: ${({ theme }) => theme.colors.parchment};
  padding: 10px 20px;
  border-bottom: 1px solid rgba(184, 144, 60, 0.15);

  ${({ theme }) => theme.media.md} {
    padding: 20px 40px;
  }

  ${({ theme }) => theme.media.lg} {
    padding: 20px 50px;
  }
`;

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1100px;
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Pillar = styled.div`
  text-align: center;
  padding: 28px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  border-left: 1px solid rgba(184, 144, 60, 0.15);
  border-bottom: 1px solid rgba(184, 144, 60, 0.15);

  /* Mobile (2 cols): no left border on items 1 & 3, no bottom border on items 3 & 4 */
  &:nth-child(odd) {
    border-left: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  ${({ theme }) => theme.media.md} {
    padding: 40px 24px;
    border-bottom: none;

    /* Reset mobile rule, then apply 4-col rule */
    &:nth-child(odd) {
      border-left: 1px solid rgba(184, 144, 60, 0.15);
    }
    &:first-child {
      border-left: none;
    }
  }
`;

export const PillarIcon = styled.svg`
  width: 38px;
  height: 38px;
  color: ${({ theme }) => theme.colors.gold};

  ${({ theme }) => theme.media.md} {
    width: 44px;
    height: 44px;
  }
`;

export const PillarName = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brown};
  line-height: 1.55;

  ${({ theme }) => theme.media.md} {
    font-size: 0.68rem;
    letter-spacing: 0.28em;
  }
`;
