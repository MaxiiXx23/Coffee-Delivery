import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;

  @media ${({ theme }) => theme.device.tabletM} {
    flex-direction: column;
  }
`

export const ContainerInfoSuccess = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
`

export const ContainerTitleAndSubtitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['yellow-600']};
`

export const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-700']};
`
export const ContainerInfosFinal = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
        ${({ theme }) => theme.colors['white-50']},
        ${({ theme }) => theme.colors['white-50']}
      )
      padding-box,
    linear-gradient(
        to bottom right,
        ${({ theme }) => theme.colors['yellow-500']},
        ${({ theme }) => theme.colors['purple-500']}
      )
      border-box;

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 2.5rem 1rem;
  }
`

export const List = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`
export const ItemInfo = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 0.75rem;

  @media ${({ theme }) => theme.device.mobileM} {
    flex-direction: column;
  }
`

export const WrapperInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Text = styled.p`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-600']};
`

export const TextBold = styled.span`
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: bold;
`
export const ContainerIllustration = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    margin-bottom: -0.75rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      margin-bottom: -0.625rem;
    }
  }

  @media ${({ theme }) => theme.device.tabletM} {
    margin-top: 1rem;
  }
`
