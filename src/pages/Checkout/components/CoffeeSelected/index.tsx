import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  ContainerMain,
  ContainerInfo,
  WrapperImage,
  WrapperNameAdder,
  WrapperOptions,
  Name,
  WrapperPrice,
  Price,
  BtnRemove,
} from './styles'

import ImgCoffee from '../../../../assets/coffees/TypeExpresso.svg'
import { AdderCoffee } from '../../../../components/AdderCoffee'

/*
interface ICoffeeSelected {
  imgUrl: string
  name: string
  price: number
}
*/

export function CoffeeSelected() {
  const theme = useTheme()

  return (
    <ContainerMain>
      <ContainerInfo>
        <WrapperImage>
          <img src={ImgCoffee} alt="" title="Image-Coffee" />
        </WrapperImage>
        <WrapperNameAdder>
          <Name>Latte</Name>
          <WrapperOptions>
            <AdderCoffee />
            <BtnRemove>
              <Trash size={16} color={theme.colors['purple-500']} />
              <span>REMOVER</span>
            </BtnRemove>
          </WrapperOptions>
        </WrapperNameAdder>
      </ContainerInfo>
      <WrapperPrice>
        <Price>
          <span>R$</span> 9,90
        </Price>
      </WrapperPrice>
    </ContainerMain>
  )
}
