import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import StoreCTA from './components/StoreCTA'
import Differentials from './components/Differentials'
import Materials from './components/Materials'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './pages/Products'

function LandingPage() {
  return (
    <div className="min-h-screen bg-void-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <StoreCTA />
      <Differentials />
      <Materials />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/produtos" element={<Products />} />
    </Routes>
    </>
  )
}

export default App
