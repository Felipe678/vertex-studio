import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/vertex_upscaled.png'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Loja', href: '/produtos', isRoute: true },
  { label: 'Materiais', href: '#materiais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isLanding = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7, 7, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoImg}
            alt="Vertex Studio"
            className="h-7 sm:h-10 w-auto group-hover:scale-110 transition-transform duration-200"
          />
          <div className="font-display font-extrabold text-sm sm:text-lg tracking-wide">
            <span className="text-starlight">VERTEX</span>{' '}
            <span className="gradient-text">STUDIO</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-white-dim text-sm font-medium hover:text-starlight transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-violet to-stellar-blue group-hover:w-full transition-all duration-200" />
              </Link>
            ) : isLanding ? (
              <a
                key={link.href}
                href={link.href}
                className="text-white-dim text-sm font-medium hover:text-starlight transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-violet to-stellar-blue group-hover:w-full transition-all duration-200" />
              </a>
            ) : (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-white-dim text-sm font-medium hover:text-starlight transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-violet to-stellar-blue group-hover:w-full transition-all duration-200" />
              </Link>
            )
          )}
          {isLanding ? (
            <a
              href="#contato"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-200 hover:scale-105"
            >
              Orçamento
            </a>
          ) : (
            <Link
              to="/#contato"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-200 hover:scale-105"
            >
              Orçamento
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-starlight p-2 mr-2.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 mx-3 sm:mx-4 rounded-2xl bg-void-black/95 backdrop-blur-md border border-electric-violet/15 overflow-hidden">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white-dim hover:text-starlight transition-colors duration-200 text-lg"
                >
                  {link.label}
                </Link>
              ) : isLanding ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white-dim hover:text-starlight transition-colors duration-200 text-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-white-dim hover:text-starlight transition-colors duration-200 text-lg"
                >
                  {link.label}
                </Link>
              )
            )}
            {isLanding ? (
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-center font-semibold"
              >
                Solicite seu orçamento
              </a>
            ) : (
              <Link
                to="/#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white text-center font-semibold"
              >
                Solicite seu orçamento
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
