import styled from 'styled-components'

export const Adder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AdderCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['gray-300']};
`

export const WrapperIcon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;

  color: ${({ theme }) => theme.colors['purple-500']};
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors['purple-700']};
  }
`
