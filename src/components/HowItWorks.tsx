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
    <section id="como-funciona" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-stellar-blue/8 rounded-full blur-[150px] -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Processo
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-4">
            Do pedido à <span className="gradient-text">entrega</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-violet/50 via-stellar-blue/50 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass rounded-2xl p-8 hover:bg-galaxy-navy/60 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-violet to-stellar-blue flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-mono text-electric-violet text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-starlight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white-dim text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Center icon (desktop) */}
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-violet to-stellar-blue items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
