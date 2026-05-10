import {
  GallerySection,
  SectionLabel,
  SectionTitle,
  GalleryGrid,
  GalleryItem,
  GalleryInner,
  GalleryImage,
  GalleryLabel,
} from '../StyledComponents/Gallery'

import cookie1    from '../assets/images/cookie1.webp'
import flower     from '../assets/images/flower.webp'
import mothersday from '../assets/images/mothersday.webp'
import apple      from '../assets/images/apple.webp'
import taco       from '../assets/images/taco.webp'

const ITEMS = [
  { label: 'Signature Collection', image: cookie1,    alt: "Jojo's Sugar Studio signature cookie" },
  { label: 'Special Events',       image: apple,      alt: 'Apple sugar cookie' },
  { label: 'Holidays',             image: mothersday, alt: "Mother's Day cookies" },
  { label: 'Seasonal',             image: flower,     alt: 'Pink rose sugar cookie' },
  { label: 'Custom',               image: taco,       alt: 'Taco sugar cookie' },
]

const Gallery = () => (
  <GallerySection id="gallery">
    <SectionLabel>The Collection</SectionLabel>
    <SectionTitle>
      Each cookie, a <em>masterpiece</em>
    </SectionTitle>
    <GalleryGrid>
      {ITEMS.map(({ label, image, alt }) => (
        <GalleryItem key={label}>
          <GalleryInner>
            <GalleryImage src={image} alt={alt} loading="lazy" />
          </GalleryInner>
          <GalleryLabel>{label}</GalleryLabel>
        </GalleryItem>
      ))}
    </GalleryGrid>
  </GallerySection>
)

export default Gallery
