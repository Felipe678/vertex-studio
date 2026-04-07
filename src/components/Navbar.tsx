import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/vertex_upscaled.png'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Materiais', href: '#materiais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src={logoImg}
            alt="Vertex Studio"
            className="h-10 w-auto group-hover:scale-110 transition-transform"
          />
          <div className="font-display font-extrabold text-lg tracking-wide">
            <span className="text-starlight">VERTEX</span>{' '}
            <span className="gradient-text">STUDIO</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white-dim text-sm font-medium hover:text-starlight transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-violet to-stellar-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-starlight"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white-dim hover:text-starlight transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-center font-semibold"
              >
                Solicite seu orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
