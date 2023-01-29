import styled from 'styled-components'

export const ContainerCardCoffee = styled.div`
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid transparent;
  padding: 0 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme.colors['gray-100']};
`

export const WrapperImgCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    z-index: 1;
    margin-top: -1.5rem;
  }
`

export const ContainerExpecifications = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`
export const ListExpecification = styled.ul`
  list-style-type: none;
  display: flex;
  align: center;
  justify: center;
  gap: 0.25rem;

  /* &:first-child {
    padding: 0 2rem;
  } */
`

export const Expecification = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors['yellow-100']};

  line-height: 1.3;
  font-weight: bold;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors['yellow-600']};
`

export const Name = styled.span`
  padding-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.colors['gray-700']};
`
export const Details = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-500']};
`

export const ContainerAddCoffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.colors['gray-600']};

  span {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`

export const WrapperAdderAndNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
`

export const BtnCartSimple = styled.button`
  cursor: pointer;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.colors['purple-700']};
  border: 1px solid ${({ theme }) => theme.colors['purple-700']};
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-500']};
    border: 1px solid ${({ theme }) => theme.colors['purple-500']};
  }
`
