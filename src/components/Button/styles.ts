import styled from 'styled-components'

export const ContainerButton = styled.button`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors['yellow-500']};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['yellow-500']};
  padding: 0.5rem 0;

  color: ${({ theme }) => theme.colors['white-50']};
  line-height: 1.6;
  font-size: 0.875rem;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-600']};
  }
`
