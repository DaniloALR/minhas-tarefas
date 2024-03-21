import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefas from '../../models/Tarefas'

import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefas[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: 'Assistir as aulas da EBAC',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao: 'Assistir as aulas da EBAC',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      titulo: 'Passear com a Athena',
      descricao: 'Dar uma volta no quarteirão',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefas>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefas, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (item) =>
          item.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Essa tarefa já existe')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizada: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizada
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
