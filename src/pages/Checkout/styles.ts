import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  padding: 2.5rem 5rem;
  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    padding: 2.5rem 2.5rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    form {
      flex-direction: column;
    }
  }
`

export const ContainerMainAddress = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`
export const Title = styled.p`
   {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors['gray-700']};
  }
`

export const ContainerAddress = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors['gray-100']};
  border: 1px solid transparent;
  border-radius: 6px;
`

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`
export const ContainerDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.1rem;
`
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: 1.3;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: 1.3;
`

export const ContainerPaymentMain = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors['gray-100']};
  border: 1px solid transparent;
  border-radius: 6px;
`

export const ContainerPayment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

export const ContainerFormPayment = styled.div`
  width: 28rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;

  @media ${({ theme }) => theme.device.laptop} {
    width: 24rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    flex-direction: column;
  }
`

export const ContainerMainSelectedCoffees = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`

export const ContainerSelectedCoffees = styled.div`
  width: 100%;
  max-height: 31.125rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['gray-100']};
  border: 0;
  border-radius: 4px 44px 4px 44px;

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 0.5rem;
  }
`

export const ListCoffees = styled.ul`
  width: 100%;
  list-style-type: none;
  max-height: 14.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['yellow-500']};
  }
`

export const ContainerMainInfo = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`
