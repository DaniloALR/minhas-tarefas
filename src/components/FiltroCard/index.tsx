import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

import { alterarBusca } from '../../store/reducers/Filtro'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, valor, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const contaTarefa = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(alterarBusca({ criterio, valor }))
  }

  const estaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ativo = estaAtivo()

  return (
    <S.Card onClick={filtrar} ativo={ativo}>
      <S.Contador>{contaTarefa()}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
