import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'Vocês aceitam arquivos do cliente?',
    answer:
      'Sim! Aceitamos arquivos nos formatos STL, OBJ e 3MF. Se o arquivo tiver algum problema, a gente avisa antes de imprimir.',
  },
  {
    question: 'Vocês desenvolvem o projeto do zero?',
    answer:
      'Dependendo da complexidade, sim. Entre em contato para avaliar o que você precisa.',
  },
  {
    question: 'Qual o prazo de produção?',
    answer:
      'Em média 3 a 7 dias úteis após aprovação do orçamento, dependendo do tamanho e complexidade da peça.',
  },
  {
    question: 'Vocês enviam para todo o Brasil?',
    answer:
      'Sim. Trabalhamos com Correios e transportadoras. O frete é calculado no orçamento.',
  },
  {
    question: 'Posso escolher a cor?',
    answer:
      'Sim. Temos diversas opções de cores e acabamentos. Consulte disponibilidade no momento do pedido.',
  },
  {
    question: 'Vocês imprimem peças grandes?',
    answer:
      'Sim! Não há limite de tamanho. Peças maiores são divididas em partes, impressas separadamente e montadas com encaixe perfeito.',
  },
  {
    question: 'Vocês fazem pedidos em quantidade?',
    answer:
      'Sim, trabalhamos com pedidos em série. Entre em contato para orçamento especial.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b border-deep-nebula/50 last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display font-bold text-lg text-starlight group-hover:text-electric-violet transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-electric-violet" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white-dim text-sm leading-relaxed pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="faq" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-galaxy-navy/20 to-void-black" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl mt-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
