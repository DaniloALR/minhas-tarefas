import styled from 'styled-components'

export const FormCadastro = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  color: #666666;
  font-size: 14px;

  textarea {
    height: 180px;
    resize: none;
  }

  button {
    margin-top: 30px;
  }
`

export const Opcoes = styled.div`
  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
