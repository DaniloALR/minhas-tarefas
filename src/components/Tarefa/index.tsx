import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

import { remover, editar, alteraStatus } from '../../store/reducers/Tarefas'
import { Botao, BotaoSalvar } from '../../styles'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number
}

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const cancelaDescricao = () => {
    setDescricao(descricaoOriginal)
    setEstaEditando(false)
  }

  const salvaDescricao = () => {
    dispatch(
      editar({
        id,
        titulo,
        descricao,
        prioridade,
        status
      })
    )
    setEstaEditando(false)
  }

  const alteraStatusTarefa = (evento: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      alteraStatus({
        id,
        finalizada: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        {estaEditando && <em>Editando: </em>}
        <S.Titulo>{titulo}</S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvaDescricao}>Salvar</BotaoSalvar>
            <S.BotaoExcluirCancelar onClick={cancelaDescricao}>
              Cancelar
            </S.BotaoExcluirCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoExcluirCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoExcluirCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
