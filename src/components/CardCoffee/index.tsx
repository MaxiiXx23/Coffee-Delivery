import { useContext } from 'react'
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

import { CoffeeContext } from '../../contexts/CoffeeContextProvider'
import { convertPriceToString } from '../../utils/convertPriceToString'

interface ICardCoffeeProps {
  id: string
  imgUrl: string
  expecifications: string[]
  name: string
  details: string
  price: number
}

export function CardCoffee({
  id,
  imgUrl,
  expecifications,
  name,
  details,
  price,
}: ICardCoffeeProps) {
  const theme = useTheme()
  const { addNewCoffeeOnCart } = useContext(CoffeeContext)

  const priceFormatted = convertPriceToString(price)

  function handleAddNewCoffeeOnCart() {
    const newCoffe = {
      id,
      imgUrl,
      name,
      price,
      amountSelected: 2,
    }
    addNewCoffeeOnCart(newCoffe)
  }

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
          <AdderCoffee idCoffee="" />
          {/* ButtonCartSimple */}
          <BtnCartSimple onClick={handleAddNewCoffeeOnCart}>
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
