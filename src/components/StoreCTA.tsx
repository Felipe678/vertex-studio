import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { products } from '../data/products'

export default function StoreCTA() {
  const { ref, isInView } = useScrollAnimation()
  const product = products[0]

  return (
    <section ref={ref} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/40 to-void-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-electric-violet/12 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-stellar-blue/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cosmic-purple/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-electric-violet" />
            <span className="text-white-dim text-xs sm:text-sm font-mono">Novidade</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5">
            Peças <span className="gradient-text">prontas</span> para você
          </h2>

          <p className="text-white-dim text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Não quer esperar? Confira nossos produtos disponíveis para compra imediata.
            Peças exclusivas, impressas com qualidade profissional.
          </p>
        </motion.div>

        {/* Featured product - single product layout */}
        <motion.a
          href={product.mercadoLivreUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group gradient-border block max-w-2xl mx-auto mb-12 sm:mb-16 cursor-pointer"
        >
          <div className="bg-galaxy-navy/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            {/* Product Image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-galaxy-navy via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-electric-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ShoppingBag className="w-5 h-5" />
                  Comprar no Mercado Livre
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 sm:p-8 text-center">
              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-starlight group-hover:text-white transition-colors">
                {product.name}
              </h3>
            </div>
          </div>
        </motion.a>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/produtos"
            className="group inline-flex items-center gap-3 px-10 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white font-semibold text-lg sm:text-xl hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
          >
            Ver todos os produtos
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" />
          </Link>

          <p className="text-white-dim/60 text-sm mt-4 font-light">
            Compra segura pelo Mercado Livre
          </p>
        </motion.div>
      </div>
    </section>
  )
}
