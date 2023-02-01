import { useContext, useState } from 'react'
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

  const { addNewCoffeeOnCart, coffeesSelected } = useContext(CoffeeContext)

  const coffeeFound = coffeesSelected.find((coffee) => coffee.id === id)

  const [countItems, setCountItems] = useState(() => {
    if (coffeeFound) {
      return coffeeFound.amountSelected
    }
    return 1
  })

  const priceFormatted = convertPriceToString(price)

  function handleAddItem() {
    setCountItems((state) => {
      return state + 1
    })
  }
  function handleRemoveItem() {
    setCountItems((state) => {
      if (state > 1) {
        return state - 1
      }
      return state
    })
  }

  function handleAddNewCoffeeOnCart() {
    const newCoffe = {
      id,
      imgUrl,
      name,
      price,
      amountSelected: countItems,
    }
    addNewCoffeeOnCart(newCoffe)
  }

  return (
    <ContainerCardCoffee>
      <WrapperImgCoffee>
        <img src={imgUrl} alt="" title="Coffee" loading="lazy" />
      </WrapperImgCoffee>
      <ContainerExpecifications>
        <ListExpecification>
          {expecifications.map((expecification, index) => {
            return <Expecification key={index}>{expecification}</Expecification>
          })}
        </ListExpecification>
      </ContainerExpecifications>
      <Name>{name}</Name>
      <Details>{details}</Details>
      <ContainerAddCoffe>
        <Price>
          <span>R$</span> {priceFormatted}
        </Price>
        <WrapperAdderAndNav>
          <AdderCoffee
            countItems={countItems}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
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
