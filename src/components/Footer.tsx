import { MessageCircle, Mail } from 'lucide-react'
import logoImg from '../assets/vertex_upscaled.png'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative border-t border-deep-nebula/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Vertex Studio"
              className="h-8 w-auto"
            />
            <span className="font-display font-extrabold text-sm tracking-wide">
              <span className="text-starlight">VERTEX</span>{' '}
              <span className="gradient-text">STUDIO</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white-dim text-sm font-light italic">
            "Do conceito à forma física."
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511945286274"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-galaxy-navy flex items-center justify-center text-white-dim hover:text-green-400 hover:bg-green-500/10 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/vertexstudio01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-galaxy-navy flex items-center justify-center text-white-dim hover:text-pink-400 hover:bg-pink-500/10 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@vertexstudiolab.com.br"
              className="w-10 h-10 rounded-xl bg-galaxy-navy flex items-center justify-center text-white-dim hover:text-electric-violet hover:bg-electric-violet/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-deep-nebula/20 text-center">
          <p className="text-white-dim/50 text-xs font-mono">
            &copy; {new Date().getFullYear()} Vertex Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
