import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;

  @media ${({ theme }) => theme.device.laptop} {
    padding: 2rem 2.5rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 2rem 2.5rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 2rem 1rem;
  }

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 2rem 1rem;
  }
`

export const WrapperLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

export const ContainerLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`

export const WrapperLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  @media ${({ theme }) => theme.device.mobileS} {
    gap: 0.05rem;
  }
`

export const Location = styled.span`
  color: ${({ theme }) => theme.colors['purple-700']};
  font-size: 1.125rem;

  @media ${({ theme }) => theme.device.mobileS} {
    padding: font-size: 0.875rem;
  }

`
