import { useEffect, useState } from 'react'

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

export type Game = {
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
    languages: any
    category: string
    system: string
    developer: string
    publisher: string
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

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
export default Home
