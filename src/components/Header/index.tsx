import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

import LogoCoffeeDelivery from '../../assets/images/LogoCoffeeDelivery.svg'

import {
  Navbar,
  WrapperLogo,
  WrapperLocation,
  Location,
  ContainerLocation,
} from './styles'
import { ButtonShoppingCart } from '../ButtonShoppingCart'

export function Header() {
  const theme = useTheme()

  return (
    <Navbar>
      <WrapperLogo to="/">
        <img src={LogoCoffeeDelivery} alt="" title="Logo-Coffee-Delivery" />
      </WrapperLogo>
      <ContainerLocation>
        <WrapperLocation>
          <MapPin size={22} color={theme.colors['purple-500']} weight="fill" />
          <Location>São Paulo, SP</Location>
        </WrapperLocation>
        <ButtonShoppingCart />
      </ContainerLocation>
    </Navbar>
  )
}
