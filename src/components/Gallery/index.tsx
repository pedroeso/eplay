import Section from '../Section'

import { Item, Items, Action } from './styles'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'

type GalleryItem = {
  type: 'video' | 'image'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=P_NGYYcIoHsf2sM9'
  }
]

type Props = {
  defaultCover: string
}

const Gallery = ({ defaultCover }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`Midia ${index + 1} de Nome do Jogo`}
            />
            <Action>
              <img src={zoom} alt="Clique para maximar a imagem" />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}

export default Gallery
