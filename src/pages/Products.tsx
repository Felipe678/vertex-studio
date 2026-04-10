import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
  return (
    <div className="min-h-screen bg-void-black overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/30 to-void-black" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white-dim hover:text-starlight transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Voltar ao site</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Nossa <span className="gradient-text">Loja</span>
            </h1>
            <p className="text-white-dim text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light">
              Peças exclusivas, prontas para envio. Escolha a sua e garanta já.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-lg sm:max-w-none mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-border"
              >
                <div className="bg-galaxy-navy/40 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-galaxy-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-starlight mb-5">
                      {product.name}
                    </h3>

                    <a
                      href={product.mercadoLivreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full px-5 py-3 rounded-full bg-gradient-to-r from-electric-violet to-stellar-blue text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-200 hover:scale-[1.02]"
                    >
                      Comprar no Mercado Livre
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
