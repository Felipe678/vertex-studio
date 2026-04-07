import { motion } from 'framer-motion'
import { Award, Eye, MessageCircle, Wrench, Gem } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const differentials = [
  {
    icon: Award,
    title: 'Alto padrão',
    description: 'Equipamentos de última geração e configurações otimizadas para cada material.',
  },
  {
    icon: Eye,
    title: 'Atenção ao detalhe',
    description: 'Cada peça revisada antes de sair. Zero tolerância com acabamento ruim.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento direto',
    description: 'Fala direto com quem produz. Sem intermediários, sem demora.',
  },
  {
    icon: Wrench,
    title: 'Personalização real',
    description: 'Aceitamos arquivos do cliente ou desenvolvemos o projeto com você.',
  },
  {
    icon: Gem,
    title: 'Materiais premium',
    description: 'PLA, PETG e outros materiais de alta qualidade com cores exclusivas.',
  },
]

export default function Differentials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      {/* Glow accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cosmic-purple/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Diferenciais
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-4">
            Por que a <span className="gradient-text">Vertex Studio Lab</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-start gap-5 p-6 rounded-2xl hover:bg-galaxy-navy/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-violet/20 to-stellar-blue/20 flex items-center justify-center shrink-0 group-hover:from-electric-violet/40 group-hover:to-stellar-blue/40 transition-all duration-300">
                <diff.icon className="w-6 h-6 text-electric-violet" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-starlight mb-1">
                  {diff.title}
                </h3>
                <p className="text-white-dim text-sm leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
