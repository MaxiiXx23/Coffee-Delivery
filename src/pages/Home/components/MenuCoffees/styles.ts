import styled from 'styled-components'

export const ContainerSection = styled.section`
  width: 100%;
  padding: 0 5rem;
`
export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-700']};
`

export const MenuList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  gap: 2rem;
  row-gap: 2.5rem;
`
