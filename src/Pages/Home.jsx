import { HomeWrapper } from '../StyledComponents/Home'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Pillars from '../components/Pillars'
import Gallery from '../components/Gallery'
import About from '../components/About'

const Home = () => (
  <HomeWrapper>
    <Nav />
    <Hero />
    <Marquee />
    <Pillars />
    <Gallery />
    <About />
  </HomeWrapper>
)

export default Home
