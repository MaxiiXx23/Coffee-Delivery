import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ContainerButton = styled.div`
  position: relative;
`

export const BtnContainer = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['yellow-100']};
  border: 1px solid ${({ theme }) => theme.colors['yellow-100']};
  border-radius: 6px;
`
export const CountNumber = styled.div`
  position: absolute;
  top: -0.8rem;
  left: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  width: 1.5rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors['yellow-600']};

  span {
    color: ${({ theme }) => theme.colors['white-50']};
    line-height: 1.6;
    font-weight: bold;
  }
`
