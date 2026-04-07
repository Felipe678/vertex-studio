import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Particles from './Particles'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/50 to-void-black" />
      <div className="absolute inset-0 grid-pattern" />
      <Particles count={15} />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-violet/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-violet animate-pulse" />
          <span className="text-white-dim text-sm font-mono">Impressão 3D Profissional</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-balance"
        >
          Transformamos <span className="gradient-text">geometria</span> em realidade.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white-dim text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Peças decorativas, personalizadas e sob medida — do arquivo ao objeto.
          Com atenção aos detalhes que só quem realmente entende do processo consegue entregar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white font-semibold text-lg flex items-center gap-3 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-200 hover:scale-105"
          >
            Solicite seu orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#servicos"
            className="group px-8 py-4 rounded-full border border-white-dim/30 text-starlight font-medium text-lg flex items-center gap-3 hover:border-electric-violet/60 hover:bg-electric-violet/5 transition-all duration-200"
          >
            <Play className="w-5 h-5" />
            Ver serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white-dim/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-electric-violet" />
        </motion.div>
      </div>
    </section>
  )
}
