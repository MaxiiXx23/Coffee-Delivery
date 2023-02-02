import styled from 'styled-components'

export const ContainerSection = styled.section`
  width: 100%;
  padding: 0 5rem;

  @media ${({ theme }) => theme.device.laptop} {
    padding: 0 3rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 3rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 0 2rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 0 1rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 0 2rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 0 1rem;
  }
`
export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-700']};
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    font-size: 1.5rem;
  }
`

export const MenuList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  gap: 2rem;
  row-gap: 2.5rem;

  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: auto auto auto;
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: auto auto;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
`
