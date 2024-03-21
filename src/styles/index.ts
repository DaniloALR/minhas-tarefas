import { createGlobalStyle, styled } from 'styled-components'
import { variaveis } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 40px 0;
`

export const Campo = styled.input`
  padding: 8px;
  border-color: #666666;
  color: #666666;
  font-weight: bold;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
`

export const Botao = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  background-color: #2f3640;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${() => variaveis.verde};
`

export default EstiloGlobal
