import { HomeWrapper } from '../StyledComponents/Home'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Pillars from '../components/Pillars'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Quote from '../components/Quote'
import Footer from '../components/Footer'

const Home = () => (
  <HomeWrapper>
    <Nav />
    <Hero />
    <Marquee />
    <Pillars />
    <Gallery />
    <About />
    <Quote />
    <Footer />
  </HomeWrapper>
)

export default Home
