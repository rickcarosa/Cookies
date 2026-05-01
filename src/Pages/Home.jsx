import { HomeWrapper } from '../StyledComponents/Home'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Pillars from '../components/Pillars'

const Home = () => (
  <HomeWrapper>
    <Nav />
    <Hero />
    <Marquee />
    <Pillars />
  </HomeWrapper>
)

export default Home
