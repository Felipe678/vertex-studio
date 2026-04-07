import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, Mail, Upload, X } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Particles from './Particles'

const WHATSAPP_NUMBER = '5511945286274'

const tamanhoOptions = [
  'Pequeno (até 10 cm)',
  'Médio (10 a 20 cm)',
  'Grande (20 a 30 cm)',
  'Extra grande (acima de 30 cm)',
  'Outros',
]

interface FilePreview {
  file: File
  preview?: string
}

export default function Contact() {
  const { ref, isInView } = useScrollAnimation()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tipo, setTipo] = useState('')
  const [tamanho, setTamanho] = useState('')
  const [tamanhoCustom, setTamanhoCustom] = useState('')
  const [cor, setCor] = useState('')
  const [descricao, setDescricao] = useState('')
  const [arquivos, setArquivos] = useState<FilePreview[]>([])

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files).map((file) => {
      const preview = file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : undefined
      return { file, preview }
    })
    setArquivos((prev) => [...prev, ...newFiles])
    e.target.value = ''
  }

  const removeFile = (index: number) => {
    setArquivos((prev) => {
      const removed = prev[index]
      if (removed.preview) URL.revokeObjectURL(removed.preview)
      return prev.filter((_, i) => i !== index)
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return '🖼️'
    if (type.startsWith('video/')) return '🎬'
    return '📄'
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const tamanhoFinal = tamanho === 'Outros' ? tamanhoCustom : tamanho
    const arquivosList = arquivos.length > 0
      ? `\n*Arquivos anexados:* ${arquivos.map((a) => a.file.name).join(', ')}\n_(Envie os arquivos nesta conversa)_`
      : ''

    const message = [
      `Olá! Gostaria de solicitar um orçamento.`,
      ``,
      `*Nome:* ${nome}`,
      `*Email:* ${email}`,
      `*Tipo de peça:* ${tipo}`,
      `*Tamanho:* ${tamanhoFinal}`,
      `*Cor desejada:* ${cor}`,
      `*Descrição:* ${descricao}`,
      arquivosList,
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-void-black/60 border border-deep-nebula/50 text-starlight placeholder-white-dim/50 focus:outline-none focus:border-electric-violet/60 focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 text-sm'

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <Particles count={15} />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-violet/8 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-electric-violet text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-4">
            Sua ideia <span className="gradient-text">merece existir.</span>
          </h2>
          <p className="text-white-dim mt-4 max-w-xl mx-auto text-lg">
            A gente imprime. Preencha o formulário e receba um orçamento sem compromisso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                    Tipo de peça
                  </label>
                  <select
                    required
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Selecione</option>
                    <option value="Decorativa">Decorativa</option>
                    <option value="Personalizada">Personalizada</option>
                    <option value="Sob medida">Sob medida</option>
                    <option value="Funcional">Funcional</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                    Cor desejada
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Preto fosco"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Tamanho select + custom */}
              <div>
                <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                  Tamanho da peça
                </label>
                <select
                  required
                  value={tamanho}
                  onChange={(e) => {
                    setTamanho(e.target.value)
                    if (e.target.value !== 'Outros') setTamanhoCustom('')
                  }}
                  className={inputClasses}
                >
                  <option value="">Selecione o tamanho</option>
                  {tamanhoOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <AnimatePresence>
                  {tamanho === 'Outros' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Informe as medidas (ex: 45x30x20 cm)"
                        value={tamanhoCustom}
                        onChange={(e) => setTamanhoCustom(e.target.value)}
                        className={`${inputClasses} mt-3`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                  Descreva seu projeto
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Conte-nos sobre a peça que você precisa, finalidade, detalhes específicos..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* File upload */}
              <div>
                <label className="text-xs font-mono text-white-dim uppercase tracking-wider mb-2 block">
                  Anexar arquivos
                </label>
                <p className="text-white-dim/50 text-xs mb-3">
                  Fotos, vídeos ou arquivos 3D (.stl, .obj, .3mf) do que você deseja
                </p>

                <label
                  className="flex flex-col items-center justify-center w-full py-6 rounded-xl border-2 border-dashed border-deep-nebula/50 hover:border-electric-violet/50 bg-void-black/30 hover:bg-electric-violet/5 transition-all duration-300 cursor-pointer group"
                >
                  <Upload className="w-8 h-8 text-white-dim/50 group-hover:text-electric-violet transition-colors mb-2" />
                  <span className="text-white-dim/70 text-sm group-hover:text-starlight transition-colors">
                    Clique para selecionar arquivos
                  </span>
                  <span className="text-white-dim/40 text-xs mt-1">
                    Imagens, vídeos, STL, OBJ, 3MF
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*,.stl,.obj,.3mf,.step"
                    onChange={handleFiles}
                    className="hidden"
                  />
                </label>

                {/* File previews */}
                <AnimatePresence>
                  {arquivos.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2 overflow-hidden"
                    >
                      {arquivos.map((arq, i) => (
                        <motion.div
                          key={`${arq.file.name}-${i}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-void-black/40 border border-deep-nebula/30"
                        >
                          {arq.preview ? (
                            <img
                              src={arq.preview}
                              alt={arq.file.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          ) : (
                            <span className="text-lg">{getFileIcon(arq.file.type)}</span>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-starlight text-sm truncate">{arq.file.name}</p>
                            <p className="text-white-dim/50 text-xs">{formatFileSize(arq.file.size)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white-dim/50 hover:text-red-400 hover:bg-red-400/10 transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-violet to-stellar-blue text-white font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8 flex-1">
              <h3 className="font-display font-bold text-xl mb-6 text-starlight">
                Outras formas de contato
              </h3>

              <div className="space-y-6">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-starlight font-medium group-hover:text-green-400 transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-white-dim text-sm">+55 11 94528-6274</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/vertexstudio01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <FaInstagram className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-starlight font-medium group-hover:text-pink-400 transition-colors">
                      Instagram
                    </p>
                    <p className="text-white-dim text-sm">@vertexstudio01</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@vertexstudiolab.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center group-hover:bg-electric-violet/20 transition-colors">
                    <Mail className="w-6 h-6 text-electric-violet" />
                  </div>
                  <div>
                    <p className="text-starlight font-medium group-hover:text-electric-violet transition-colors">
                      Email
                    </p>
                    <p className="text-white-dim text-sm">contato@vertexstudiolab.com.br</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick info card */}
            <div className="glass rounded-2xl p-8">
              <h4 className="font-mono text-electric-violet text-xs uppercase tracking-wider mb-4">
                Formatos aceitos
              </h4>
              <div className="flex flex-wrap gap-2">
                {['STL', 'OBJ', '3MF', 'STEP'].map((fmt) => (
                  <span
                    key={fmt}
                    className="px-3 py-1.5 rounded-lg bg-electric-violet/10 text-electric-violet text-xs font-mono border border-electric-violet/20"
                  >
                    .{fmt.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
