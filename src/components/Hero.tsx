import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import Particles from './Particles'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/50 to-void-black" />
      <div className="absolute inset-0 grid-pattern" />
      <Particles count={15} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-violet/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-violet animate-pulse" />
          <span className="text-white-dim text-xs sm:text-sm font-mono">Impressão 3D Profissional</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-extrabold text-2xl leading-[1.2] sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl sm:leading-tight mb-4 sm:mb-6"
        >
          Transformamos <span className="gradient-text">geometria</span> em realidade.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white-dim text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2 sm:px-0"
        >
          Peças decorativas, personalizadas e sob medida — do arquivo ao objeto.
          Com atenção aos detalhes que só quem realmente entende do processo consegue entregar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contato"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-200 hover:scale-105"
          >
            Solicite seu orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="/produtos"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white-dim/30 text-starlight font-medium text-base sm:text-lg flex items-center justify-center gap-3 hover:border-electric-violet/60 hover:bg-electric-violet/5 transition-all duration-200"
          >
            <ShoppingBag className="w-5 h-5" />
            Ver produtos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - desktop: mouse wheel */}
      <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white-dim/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-electric-violet" />
        </motion.div>
      </div>

      {/* Scroll indicator - mobile: finger swipe up */}
      <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-10 sm:hidden">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
            <path d="M16 4 L10 12 L22 12 Z" fill="rgba(139,92,246,0.6)" />
            <path d="M16 18 C16 18 16 14 16 14 C16 12.3 17.3 11 19 11 C20.7 11 22 12.3 22 14 L22 26 C22 26 22 27 22 28 C22 32.4 18.4 36 14 36 C9.6 36 8 32.4 8 28 L8 24 C8 22.3 9.3 21 11 21 C12.7 21 14 22.3 14 24 L14 20 C14 18.3 15.3 17 16 17 Z"
              stroke="rgba(168,164,200,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
