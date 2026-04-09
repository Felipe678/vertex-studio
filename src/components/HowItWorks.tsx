import { motion } from 'framer-motion'
import { MessageSquare, Calculator, Cog, Package } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Fale com a gente',
    description:
      'Entre em contato pelo direct do Instagram ou WhatsApp. Conta o que você precisa — tipo de peça, tamanho, cor, finalidade.',
  },
  {
    icon: Calculator,
    number: '02',
    title: 'Orçamento',
    description:
      'Com as informações em mãos, enviamos um orçamento detalhado com prazo de produção e frete.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Aprovação e Produção',
    description:
      'Após aprovação, iniciamos a produção. Você acompanha o andamento pelo WhatsApp.',
  },
  {
    icon: Package,
    number: '04',
    title: 'Envio',
    description:
      'Peça embalada com segurança e enviada para todo o Brasil. Código de rastreio assim que despachar.',
  },
]

export default function HowItWorks() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="como-funciona" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-stellar-blue/8 rounded-full blur-[150px] -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Processo
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl mt-4">
            Do pedido à <span className="gradient-text">entrega</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - desktop (center) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-violet/50 via-stellar-blue/50 to-transparent hidden md:block" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -40 : 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                className="mb-8 last:mb-0"
              >
                {/* Mobile: zigzag layout */}
                <div className={`flex md:hidden ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-[85%] flex items-start gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-violet to-stellar-blue flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Card */}
                    <div className="flex-1 glass rounded-2xl p-5 relative">
                      {/* Arrow pointing to icon */}
                      <div
                        className={`absolute top-5 w-3 h-3 rotate-45 ${
                          isEven
                            ? '-left-1.5 bg-galaxy-navy/60 border-l border-b border-electric-violet/15'
                            : '-right-1.5 bg-galaxy-navy/60 border-r border-t border-electric-violet/15'
                        }`}
                      />
                      <span className="font-mono text-electric-violet text-xs tracking-wider">{step.number}</span>
                      <h3 className="font-display font-bold text-lg text-starlight mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white-dim text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: alternating timeline */}
                <div className={`hidden md:flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="glass rounded-2xl p-8">
                      <span className="font-mono text-electric-violet text-xs tracking-wider">{step.number}</span>
                      <h3 className="font-display font-bold text-xl text-starlight mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-white-dim text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-violet to-stellar-blue flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
