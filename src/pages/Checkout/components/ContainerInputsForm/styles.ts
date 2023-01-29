import styled from 'styled-components'

export const ContainerMainInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem auto 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
`

export const WrapperInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem auto;
  gap: 0.75rem;
  grid-column: 1 / 4;
`

interface IInputPros {
  gridColumn?: string
}

export const Input = styled.input<IInputPros>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-800']};
  font-size: 0.875rem;

  grid-column: ${({ gridColumn }) => gridColumn};

  &:focus {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors['yellow-600']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    line-height: 1.3;
  }
`
