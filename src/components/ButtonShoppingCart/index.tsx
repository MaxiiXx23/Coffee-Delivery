import { useTheme } from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

import { ContainerButton, BtnContainer, CountNumber } from './styles'

export function ButtonShoppingCart() {
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
        <span>3</span>
      </CountNumber>
    </ContainerButton>
  )
}
