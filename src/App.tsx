import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Materials from './components/Materials'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-void-black">
      <Navbar />
      <Hero />
      <Services />
      <Differentials />
      <Materials />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
