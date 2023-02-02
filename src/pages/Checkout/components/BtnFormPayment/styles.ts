import styled from 'styled-components'

interface IBtnFormPaymentProps {
  isSelected: boolean
}

export const BtnContainer = styled.button<IBtnFormPaymentProps>`
  cursor: pointer;
  width: 11.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;
  padding: 1rem 0;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors['purple-500'] : 'transparent'};

  border-radius: 6px;

  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors['white-50'] : theme.colors['gray-300']};
  color: ${({ theme }) => theme.colors['gray-600']};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors['white-50'] : theme.colors['gray-400']};

    color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors['gray-600'] : theme.colors['gray-700']};
  }

  span {
    font-size: 0.625rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    span {
      gap: 0.5rem;
      font-size: 0.5rem;
    }
  }
`
