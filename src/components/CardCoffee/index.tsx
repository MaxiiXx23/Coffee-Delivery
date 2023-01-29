import { useTheme } from 'styled-components'
import { ShoppingCartSimple } from 'phosphor-react'

import { AdderCoffee } from '../AdderCoffee'

import {
  ContainerCardCoffee,
  WrapperImgCoffee,
  ContainerExpecifications,
  ListExpecification,
  Expecification,
  Name,
  Details,
  ContainerAddCoffe,
  Price,
  WrapperAdderAndNav,
  BtnCartSimple,
} from './styles'

interface ICardCoffeeProps {
  imgUrl: string
  expecifications: string[]
  name: string
  details: string
  price: number
}

export function CardCoffee({
  imgUrl,
  expecifications,
  name,
  details,
  price,
}: ICardCoffeeProps) {
  const theme = useTheme()

  const priceString = String(price).padEnd(4, '0')
  const priceFormatted = priceString.replace('.', ',')

  return (
    <ContainerCardCoffee>
      {/* wrapper ImgCoffee */}
      <WrapperImgCoffee>
        <img src={imgUrl} alt="" title="Coffee" loading="lazy" />
      </WrapperImgCoffee>
      {/* Container List expecifications coffee */}
      <ContainerExpecifications>
        <ListExpecification>
          {expecifications.map((expecification, index) => {
            return <Expecification key={index}>{expecification}</Expecification>
          })}
        </ListExpecification>
      </ContainerExpecifications>
      {/* Name coffee */}
      <Name>{name}</Name>
      {/* details coffee */}
      <Details>{details}</Details>
      {/* Container add coffee */}
      <ContainerAddCoffe>
        {/* Price */}
        <Price>
          <span>R$</span> {priceFormatted}
        </Price>
        <WrapperAdderAndNav>
          {/* Container Adder */}
          <AdderCoffee />
          {/* ButtonCartSimple */}
          <BtnCartSimple>
            <ShoppingCartSimple
              size={22}
              color={theme.colors['white-100']}
              weight="fill"
            />
          </BtnCartSimple>
        </WrapperAdderAndNav>
      </ContainerAddCoffe>
    </ContainerCardCoffee>
  )
}
