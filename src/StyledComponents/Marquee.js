import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`

export const MarqueeBar = styled.div`
  background: ${({ theme }) => theme.colors.sageDark};
  padding: 13px 0;
  overflow: hidden;
  white-space: nowrap;
`

export const MarqueeTrack = styled.div`
  display: inline-flex;
  align-items: center;
  animation: ${scroll} 22s linear infinite;
`

export const MarqueeItem = styled.span`
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
  padding: 0 28px;

  ${({ theme }) => theme.media.md} {
    font-size: 0.68rem;
    padding: 0 40px;
  }
`

export const MarqueeDot = styled.span`
  color: ${({ theme }) => theme.colors.goldLight};
  padding: 0 4px;
  font-size: 0.7rem;
`
