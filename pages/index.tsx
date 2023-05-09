import Nav from './layouts/nav'
import Hero from './layouts/hero'
import Analytics from './layouts/Analytics'
import Newsletter from './layouts/Newsletter'
import Cards from './layouts/Cards'
import Footer from './layouts/Footer'
export default function Home() {
  return (
    <div>
        <Nav />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
    </div>
  )
}
