import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  padding: ${(props) =>
    props.size === 'big' ? '8px 16px' : '4px 6px'}; 4px 6px;
  border-radius: 8px;
  display: inline-block;
`
