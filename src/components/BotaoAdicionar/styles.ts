import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { variaveis } from '../../styles/variaveis'

export const Botao = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 56px;
  height: 56px;
  background-color: ${variaveis.verde};
  font-size: 32px;
  color: #fff;
  border-radius: 50%;
`
