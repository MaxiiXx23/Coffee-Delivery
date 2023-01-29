import styled from 'styled-components'

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`

const WrapperInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const WrapperTotalItems = styled(WrapperInfo)``
export const WrapperDelivery = styled(WrapperInfo)``
export const WrapperTotal = styled(WrapperInfo)``

const TextBase = styled.span`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-600']};
`

export const TitleInfo = styled(TextBase)`
  font-size: 0.875rem;
`

export const PriceInfo = styled(TextBase)``
export const TitleTotal = styled(TextBase)`
  font-weight: bold;
  font-size: 1.25rem;
`
export const PriceTotal = styled(TextBase)`
  font-weight: bold;
  font-size: 1.25rem;
`
