import styled from 'styled-components'

export const ContainerMain = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
`
export const ContainerInfo = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`
export const WrapperImage = styled.div``

export const WrapperNameAdder = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
`

export const Name = styled.span`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-700']};
`
export const WrapperPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Price = styled.p`
  line-height: 1.3;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-600']};
`
export const BtnRemove = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 0.5rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-600']};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-400']};
    color: ${({ theme }) => theme.colors['gray-700']};
  }

  span {
    line-height: 1.6;
    font-size: 0.75rem;
  }
`
