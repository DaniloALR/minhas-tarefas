import Tarefa from '../../components/Tarefa'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import BotaoAdicionar from '../../components/BotaoAdicionar'
import { MainContainer, Titulo } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tfiltro) =>
          tfiltro.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (t) => t.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter((t) => t.status === valor)
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  const filtraMensagem = (quantidade: number) => {
    let mensagem = ''
    const exibeTermo =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: todas ${exibeTermo}`
    } else {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: "${criterio}=${valor}" ${exibeTermo}`
    }
    return mensagem
  }

  const titulo = filtraMensagem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{titulo}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
      <BotaoAdicionar />
    </MainContainer>
  )
}
export default ListaDeTarefas
