import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import resident from '../../assets/images/residentevil.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} title="Promoções" background="gray" />
        <ProductList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando</h4>
}
export default Home
