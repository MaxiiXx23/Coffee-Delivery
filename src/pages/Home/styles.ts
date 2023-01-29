import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
export const ContainerHeader = styled.header`
  width: 100%;
  height: 34rem;
  display: flex;
  flex-direction: row;
  align: center;
  justify-content: space-between;
  padding: 5.875rem 5rem;
`
export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 4.125rem;
`

export const WrapperTitleAndSubtitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  line-height: 1.3;
  text-align: inline;
  color: ${({ theme }) => theme.colors['gray-800']};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors['gray-800']};
`

export const WrapperInfoList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const WrapperColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;

  span {
    color: ${({ theme }) => theme.colors['gray-600']};
    font-size: 1rem;
    line-height: 1.3;
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`
