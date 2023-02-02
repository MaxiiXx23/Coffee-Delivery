import styled from 'styled-components'

export const ContainerMainInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem auto 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  @media ${({ theme }) => theme.device.tabletS} {
    grid-template-columns: 6rem auto 3.75rem;
  }
`

export const WrapperInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem auto;
  gap: 0.75rem;
  grid-column: 1 / 4;

  @media ${({ theme }) => theme.device.mobileM} {
    grid-template-columns: auto auto;
  }
`

type variantsGridColumn =
  | 'gridAuto'
  | 'gridColumn1Slash2'
  | 'gridColumn1Slash3'
  | 'gridColumn1Slash4'

const gridColumns: { [key: string]: any } = {
  gridAuto: '',
  gridColumn1Slash2: '1 / 2',
  gridColumn1Slash3: '1 / 3',
  gridColumn1Slash4: '1 / 4',
}

interface IInputPros {
  gridColumn?: variantsGridColumn
}

export const Input = styled.input<IInputPros>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-800']};
  font-size: 0.875rem;

  grid-column: ${({ gridColumn }) =>
    gridColumn ? gridColumns[gridColumn] : ''};

  &:focus {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors['yellow-600']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    line-height: 1.3;
  }
`
