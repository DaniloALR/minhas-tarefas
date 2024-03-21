import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'prioridade' | 'status'
}

function retornaCorDeFundo({
  prioridade,
  status,
  parametro
}: TagProps): string {
  if (parametro === 'status') {
    if (status === enums.Status.PENDENTE) return variaveis.amarelo
    if (status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px 16px 0;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #fcfcfc;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    em {
      margin-right: 8px;
    }

    input {
      margin-right: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: #ffffff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  margin: 16px 0;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  width: 100%;
  background-color: #fcfcfc;
`

export const BarraAcoes = styled.div`
  padding: 16px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fcfcfc;
`

export const BotaoExcluirCancelar = styled(Botao)`
  background-color: ${() => variaveis.vermelho};
`
