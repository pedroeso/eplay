import ProductList from '../../components/ProductList'

import resident from '../../assets/images/residentevil.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao = [] } = useGetActionGamesQuery()
  const { data: gamesEsportes = [] } = useGetSportsGamesQuery()
  const { data: gamesSimulacao = [] } = useGetSimulationGamesQuery()
  const { data: gamesLuta = [] } = useGetFightGamesQuery()
  const { data: gamesRPG = [] } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
    return (
      <>
        <ProductList games={gamesAcao} title="Ação" background="black" />
        <ProductList games={gamesEsportes} title="Esportes" background="gray" />
        <ProductList games={gamesLuta} title="Luta" background="black" />
        <ProductList games={gamesRPG} title="RPG" background="gray" />
        <ProductList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
