import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'

import { RootReducer } from '../../store'

import { alterarFiltro } from '../../store/reducers/Filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(evento) => dispatch(alterarFiltro(evento.target.value))}
          />
          <S.Filtro>
            <FiltroCard
              criterio="status"
              valor={enums.Status.PENDENTE}
              legenda="pendentes"
            />
            <FiltroCard
              criterio="status"
              valor={enums.Status.CONCLUIDA}
              legenda="concluídas"
            />
            <FiltroCard
              criterio="prioridade"
              valor={enums.Prioridade.URGENTE}
              legenda="urgentes"
            />
            <FiltroCard
              criterio="prioridade"
              valor={enums.Prioridade.IMPORTANTE}
              legenda="importantes"
            />
            <FiltroCard
              criterio="prioridade"
              valor={enums.Prioridade.NORMAL}
              legenda="normal"
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </S.Filtro>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
