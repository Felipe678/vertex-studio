import { motion } from 'framer-motion'
import { Palette, Fingerprint, Box, Truck } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: Palette,
    title: 'Peças Decorativas',
    description:
      'Objetos impressos em 3D para decoração de ambientes — minimalistas, geométricos, autorais. Cada peça desenhada para complementar o espaço.',
    color: 'from-electric-violet to-cosmic-purple',
  },
  {
    icon: Fingerprint,
    title: 'Personalização',
    description:
      'Sua ideia, do jeito que você imaginou. Trabalhamos com arquivos enviados pelo cliente ou desenvolvemos o projeto do zero mediante consulta.',
    color: 'from-stellar-blue to-blue-glow',
  },
  {
    icon: Box,
    title: 'Sob Medida',
    description:
      'Medidas, materiais e acabamentos escolhidos por você. Nada de tamanho único — cada pedido é tratado como único.',
    color: 'from-cosmic-purple to-stellar-blue',
  },
  {
    icon: Truck,
    title: 'Entrega para Todo o Brasil',
    description:
      'Embalagem segura e envio para qualquer estado. Acompanhamento do pedido do início ao fim.',
    color: 'from-blue-glow to-electric-violet',
  },
]

export default function Services() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="servicos" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/30 to-void-black" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Serviços
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl mt-4">
            O que a gente <span className="gradient-text">faz</span>
          </h2>
          <p className="text-white-dim mt-4 max-w-xl mx-auto text-lg">
            Do conceito à forma física. Cada projeto recebe atenção total do início ao fim.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="gradient-border h-full">
                <div className="relative bg-galaxy-navy/80 rounded-2xl p-8 h-full flex flex-col hover:bg-galaxy-navy transition-colors duration-300">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="font-display font-bold text-xl mb-3 text-starlight">
                    {service.title}
                  </h3>
                  <p className="text-white-dim text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-violet/5 to-stellar-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
