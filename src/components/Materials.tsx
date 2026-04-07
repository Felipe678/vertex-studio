import { motion } from 'framer-motion'
import { Leaf, Droplets } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const materials = [
  {
    icon: Leaf,
    name: 'PLA',
    fullName: 'Ácido Polilático',
    description:
      'Material biodegradável ideal para peças decorativas. Excelente definição de detalhes, acabamento suave e ampla variedade de cores — incluindo versões metálicas, silk e velvet.',
    idealFor: 'Decoração, presentes, objetos de exposição.',
    variants: ['Básico', 'Silk', 'Velvet', 'Metálico'],
    gradient: 'from-electric-violet to-cosmic-purple',
  },
  {
    icon: Droplets,
    name: 'PETG',
    fullName: 'Politereftalato de Etileno Glicol',
    description:
      'Material mais resistente que o PLA, com boa flexibilidade e resistência à umidade. Acabamento levemente translúcido dependendo da cor.',
    idealFor: 'Peças funcionais, objetos de uso, ambientes úmidos.',
    variants: ['Standard', 'Translúcido'],
    gradient: 'from-stellar-blue to-blue-glow',
  },
]

export default function Materials() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="materiais" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/20 to-void-black" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Materiais
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-4">
            Materiais <span className="gradient-text">disponíveis</span>
          </h2>
          <p className="text-white-dim mt-4 max-w-xl mx-auto text-lg">
            Trabalhamos com materiais de alta qualidade para cada tipo de projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="group"
            >
              <div className="gradient-border h-full">
                <div className="bg-galaxy-navy/80 rounded-2xl p-8 h-full hover:bg-galaxy-navy transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <mat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-3xl text-starlight">
                        {mat.name}
                      </h3>
                      <p className="text-white-dim text-xs font-mono">{mat.fullName}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white-dim text-sm leading-relaxed mb-6">{mat.description}</p>

                  {/* Ideal for */}
                  <div className="mb-6">
                    <span className="text-electric-violet text-xs font-mono uppercase tracking-wider">
                      Ideal para
                    </span>
                    <p className="text-starlight text-sm mt-1">{mat.idealFor}</p>
                  </div>

                  {/* Variants */}
                  <div className="flex flex-wrap gap-2">
                    {mat.variants.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-electric-violet/10 text-electric-violet border border-electric-violet/20"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
