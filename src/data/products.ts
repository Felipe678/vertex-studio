import porscheGt3Rs from '../assets/porsche-gt3-rs.jpg'

export interface Product {
  id: number
  name: string
  price: string
  image: string
  mercadoLivreUrl: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Porta Chaves de Parede — Porsche GT3 RS',
    price: 'R$ 120,00',
    image: porscheGt3Rs,
    mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-6596068080-porta-chaves-de-parede-porsche-gt3-rs-personalizado-_JM',
  },
]
