import { useTheme } from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

import { ContainerButton, BtnContainer, CountNumber } from './styles'

interface IButtonShoppingCartProps {
  countCart: number
}

export function ButtonShoppingCart({ countCart }: IButtonShoppingCartProps) {
  const theme = useTheme()

  return (
    <ContainerButton>
      <BtnContainer to="/checkout">
        <ShoppingCart
          size={22}
          color={theme.colors['yellow-600']}
          weight="fill"
        />
      </BtnContainer>
      <CountNumber>
        <span>{countCart}</span>
      </CountNumber>
    </ContainerButton>
  )
}
