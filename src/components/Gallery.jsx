import {
  GallerySection,
  SectionLabel,
  SectionTitle,
  GalleryGrid,
  GalleryItem,
  GalleryInner,
  GalleryPlaceholder,
  GalleryLabel,
} from '../StyledComponents/Gallery'

const ITEMS = [
  { label: 'Signature Collection', placeholder: "Jojo's" },
  { label: 'Weddings',             placeholder: '✦' },
  { label: 'Floral',               placeholder: '✦' },
  { label: 'Seasonal',             placeholder: '✦' },
  { label: 'Custom',               placeholder: '✦' },
]

const Gallery = () => (
  <GallerySection id="gallery">
    <SectionLabel>The Collection</SectionLabel>
    <SectionTitle>
      Each cookie, a <em>masterpiece</em>
    </SectionTitle>
    <GalleryGrid>
      {ITEMS.map(({ label, placeholder }) => (
        <GalleryItem key={label}>
          <GalleryInner>
            <GalleryPlaceholder>{placeholder}</GalleryPlaceholder>
          </GalleryInner>
          <GalleryLabel>{label}</GalleryLabel>
        </GalleryItem>
      ))}
    </GalleryGrid>
  </GallerySection>
)

export default Gallery
