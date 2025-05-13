import { useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import resident from '../../assets/images/residentevil.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

export interface GalleryItem {
  type: 'video' | 'image'
  url: string
}

type Game = {
  id: number
  name: string
  description: string
  realeseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    language: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
export default Home
