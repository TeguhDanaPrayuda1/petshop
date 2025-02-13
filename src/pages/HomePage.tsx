import Hero from '../components/Hero'
import Promo from '../components/Promo'
import Doctors from '../components/Doctors'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Promo />
      <Doctors />
      <Services />
      <Gallery />
      <FAQSection/>
      <YouTube />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
