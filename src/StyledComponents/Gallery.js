import styled from 'styled-components'

export const GallerySection = styled.section`
  padding: 72px 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.parchment};

  ${({ theme }) => theme.media.md} {
    padding: 35px 48px;
  }
`

export const SectionLabel = styled.p`
  font-size: 0.65rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 16px;
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 48px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.gold};
  }

  ${({ theme }) => theme.media.md} {
    margin-bottom: 60px;
  }
`

export const GalleryGrid = styled.div`
  display: grid;
  gap: 3px;
  max-width: 1100px;
  margin: 0 auto;

  /* Mobile: 2 columns, equal rows */
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 180px;

  ${({ theme }) => theme.media.sm} {
    grid-auto-rows: 220px;
  }

  /* Tablet+: masonry layout — first item is featured, spans 2 rows */
  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: 260px 260px;
    grid-auto-rows: auto;
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-rows: 280px 280px;
  }
`

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.parchment2};

  /* Featured item spans full width on mobile, 2 rows on tablet+ */
  &:first-child {
    grid-column: span 2;

    ${({ theme }) => theme.media.md} {
      grid-column: span 1;
      grid-row: span 2;
    }
  }
`

export const GalleryInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.55s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }

  /* Distinct gradient backgrounds per item — placeholder until real cookie photos */
  ${GalleryItem}:nth-child(1) & { background: linear-gradient(145deg, #ede0c8, #dfd0b0); }
  ${GalleryItem}:nth-child(2) & { background: linear-gradient(145deg, #dde8d4, #cddcc4); }
  ${GalleryItem}:nth-child(3) & { background: linear-gradient(145deg, #e8e0d4, #ddd4c4); }
  ${GalleryItem}:nth-child(4) & { background: linear-gradient(145deg, #f0e4cc, #e4d4b0); }
  ${GalleryItem}:nth-child(5) & { background: linear-gradient(145deg, #e4ddd4, #d8d0c4); }
`

export const GalleryPlaceholder = styled.div`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 2.4rem;
  color: rgba(184, 144, 60, 0.32);
`

export const GalleryImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 12px 24px rgba(59, 46, 30, 0.18));
`

export const GalleryLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  background: linear-gradient(to top, rgba(30, 24, 16, 0.7), transparent);
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(244, 237, 217, 0.95);

  /* Mobile: always visible. Desktop: slides up on hover. */
  transform: translateY(0);
  transition: transform 0.38s ease;

  ${({ theme }) => theme.media.md} {
    transform: translateY(100%);
    padding: 18px 22px;
    font-size: 1rem;

    ${GalleryItem}:hover & {
      transform: translateY(0);
    }
  }
`
