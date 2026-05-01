import {
  MarqueeBar,
  MarqueeTrack,
  MarqueeItem,
  MarqueeDot,
} from '../StyledComponents/Marquee'

const ITEMS = [
  'Weddings',
  'Birthdays',
  'Baby Showers',
  'Bridal Showers',
  'Holidays',
  'Special Events',
]

const Marquee = () => {
  // Duplicate the list so the keyframe animation (0 → -50%) loops seamlessly
  const loop = [...ITEMS, ...ITEMS]

  return (
    <MarqueeBar>
      <MarqueeTrack>
        {loop.map((label, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <MarqueeItem>{label}</MarqueeItem>
            <MarqueeDot>✦</MarqueeDot>
          </span>
        ))}
      </MarqueeTrack>
    </MarqueeBar>
  )
}

export default Marquee
