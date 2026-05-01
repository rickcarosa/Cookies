import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
`;

export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 65px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1fr;
    padding-top: 74px;
  }
`;

/* ── LEFT (text) ── */
export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 24px;
  position: relative;

  ${({ theme }) => theme.media.md} {
    align-items: center;
    text-align: left;
    padding: 50px 56px 50px 50px;
  }
`;

export const HeroEyebrow = styled.div`
  font-size: 0.66rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 14px;

  &::before {
    content: '';
    display: block;
    width: 38px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(3.8rem, 11vw, 7.5rem);
  font-weight: 400;
  line-height: 0.95;
  color: ${({ theme }) => theme.colors.brown};
`;

export const HeroStudio = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.95rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 10px;

  ${({ theme }) => theme.media.md} {
    font-size: 1rem;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;

  span {
    width: 44px;
    height: 1px;
    background: ${({ theme }) => theme.colors.goldPale};
  }

  .gem {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.gold};
    transform: rotate(45deg);
  }
`;

export const HeroTagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.brownMid};
  margin-bottom: 28px;
  line-height: 1.7;

  ${({ theme }) => theme.media.md} {
    font-size: 0.9rem;
  }
`;

export const HeroDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.brownMid};
  max-width: 400px;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.md} {
    font-size: 1.2rem;
  }
`;

export const HeroCta = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.a`
  display: inline-block;
  padding: 13px 38px;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.warmWhite};
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
`;

/* ── RIGHT (image) ── */
export const HeroImagePane = styled.div`
  background: ${({ theme }) => theme.colors.parchment2};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 380px;

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 260px;
    height: 260px;
    background: radial-gradient(
      circle,
      rgba(106, 138, 92, 0.1) 0%,
      transparent 65%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -20px;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      circle,
      rgba(184, 144, 60, 0.08) 0%,
      transparent 65%
    );
    pointer-events: none;
  }

  ${({ theme }) => theme.media.md} {
    min-height: auto;
  }
`;

export const Botanical = styled.svg`
  position: absolute;
  pointer-events: none;
  opacity: 0.5;

  &.top-right {
    top: 22px;
    right: 16px;
    width: 100px;
  }

  &.bottom-left {
    bottom: 28px;
    left: 14px;
    width: 86px;
    transform: scaleX(-1) rotate(20deg);
    opacity: 0.45;
  }

  ${({ theme }) => theme.media.md} {
    &.top-right {
      width: 140px;
      top: 30px;
      right: 20px;
    }
    &.bottom-left {
      width: 120px;
      bottom: 40px;
      left: 20px;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 70%;
  max-width: 360px;
  aspect-ratio: 1;
  z-index: 1;

  ${({ theme }) => theme.media.md} {
    width: 68%;
    max-width: 460px;
  }
`;

export const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  &.ring-1 {
    inset: -16px;
    border: 1px solid rgba(184, 144, 60, 0.35);
    animation: ${spin} 28s linear infinite;

    &::before {
      content: '✦';
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.55rem;
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  &.ring-2 {
    inset: -32px;
    border: 1px dashed rgba(184, 144, 60, 0.15);
    animation: ${spin} 44s linear infinite reverse;
  }
`;

export const ImageHex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* No clip-path or background — the cookie image is already
     hexagon-shaped with transparent corners. */
`;

export const CookieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  /* Drop-shadow follows the cookie's hexagonal alpha edges
     (unlike box-shadow which would make a rectangular shadow). */
  filter: drop-shadow(0 22px 40px rgba(59, 46, 30, 0.22));
`;

export const ScrollHint = styled.div`
  display: none;

  ${({ theme }) => theme.media.lg} {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(122, 104, 80, 0.55);
    font-size: 0.57rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    z-index: 2;

    .scroll-line {
      width: 1px;
      height: 34px;
      background: linear-gradient(
        to bottom,
        rgba(184, 144, 60, 0.5),
        transparent
      );
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }
`;
