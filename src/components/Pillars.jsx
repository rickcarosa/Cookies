import {
  PillarsSection,
  PillarsGrid,
  Pillar,
  PillarIcon,
  PillarName,
} from '../StyledComponents/Pillars'

/* Heart outline */
const HeartIcon = () => (
  <PillarIcon viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 36 C18 33 7 25 7 16.5 C7 12 10.5 9 14.5 9 C17.5 9 20.5 11 22 13.5 C23.5 11 26.5 9 29.5 9 C33.5 9 37 12 37 16.5 C37 25 26 33 22 36 Z" />
  </PillarIcon>
)

/* Cookie — circle with chocolate chip dots */
const CookieIcon = () => (
  <PillarIcon viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="22" cy="22" r="14" />
    <circle cx="16" cy="18" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="27" cy="17" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="19" cy="26" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="28" cy="26" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="22" cy="21" r="1.2" fill="currentColor" stroke="none" />
  </PillarIcon>
)

/* Botanical branch with leaves */
const BranchIcon = () => (
  <PillarIcon viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M22 8 Q22 22 22 38" />
    {/* upper-right leaf */}
    <path d="M22 14 Q28 12 31 16" />
    <ellipse cx="28" cy="14" rx="5" ry="2.4" transform="rotate(20 28 14)" />
    {/* upper-left leaf */}
    <path d="M22 18 Q16 16 13 20" />
    <ellipse cx="16" cy="18" rx="5" ry="2.4" transform="rotate(-20 16 18)" />
    {/* lower-right leaf */}
    <path d="M22 26 Q28 24 31 28" />
    <ellipse cx="28" cy="26" rx="5" ry="2.4" transform="rotate(20 28 26)" />
    {/* lower-left leaf */}
    <path d="M22 30 Q16 28 13 32" />
    <ellipse cx="16" cy="30" rx="5" ry="2.4" transform="rotate(-20 16 30)" />
  </PillarIcon>
)

/* Gift box with ribbon and bow */
const GiftIcon = () => (
  <PillarIcon viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    {/* box body */}
    <rect x="8" y="18" width="28" height="20" rx="1" />
    {/* vertical ribbon */}
    <line x1="22" y1="18" x2="22" y2="38" />
    {/* horizontal ribbon */}
    <line x1="8" y1="24" x2="36" y2="24" />
    {/* left bow loop */}
    <path d="M22 18 C18 14 13 13 13 9.5 C13 7.5 15 7 16.5 8 C19 9.5 22 14 22 18 Z" />
    {/* right bow loop */}
    <path d="M22 18 C26 14 31 13 31 9.5 C31 7.5 29 7 27.5 8 C25 9.5 22 14 22 18 Z" />
  </PillarIcon>
)

const PILLARS = [
  { Icon: HeartIcon,  label: 'Made with\nLove' },
  { Icon: CookieIcon, label: 'Custom\nCookies' },
  { Icon: BranchIcon, label: 'Thoughtful\nDetails' },
  { Icon: GiftIcon,   label: 'Perfect for\nEvery Occasion' },
]

const Pillars = () => (
  <PillarsSection>
    <PillarsGrid>
      {PILLARS.map(({ Icon, label }) => (
        <Pillar key={label}>
          <Icon />
          <PillarName>
            {label.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </PillarName>
        </Pillar>
      ))}
    </PillarsGrid>
  </PillarsSection>
)

export default Pillars
