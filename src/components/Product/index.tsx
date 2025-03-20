import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus alias
      obcaecati, architecto asperiores ipsa libero porro nisi quia laborum
      magni! Sapiente fugiat dolor voluptates similique culpa quae deserunt
      exercitationem? Fugit!
    </Descricao>
  </Card>
)

export default Product
