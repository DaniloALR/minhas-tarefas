import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { FormCadastro, Opcoes, Opcao } from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/Tarefas'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <FormCadastro onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => {
            return (
              <Opcao key={prioridade}>
                <input
                  type="radio"
                  name="prioridade"
                  id={prioridade}
                  value={prioridade}
                  onChange={(evento) =>
                    setPrioridade(evento.target.value as enums.Prioridade)
                  }
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            )
          })}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </FormCadastro>
    </MainContainer>
  )
}

export default Formulario
