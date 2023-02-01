import { useContext, useEffect, useState } from 'react'

import { useTheme } from 'styled-components'
import { Trash } from 'phosphor-react'

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

import { AdderCoffee } from '../../../../components/AdderCoffee'
import { CoffeeContext } from '../../../../contexts/CoffeeContextProvider'
import { convertPriceToString } from '../../../../utils/convertPriceToString'

interface ICoffeeSelectedProps {
  id: string
  imgUrl: string
  name: string
  price: number
  amountSelected: number
}

export function CoffeeSelected({
  id,
  imgUrl,
  name,
  price,
  amountSelected,
}: ICoffeeSelectedProps) {
  const theme = useTheme()
  const [countItems, setCountItems] = useState(amountSelected)

  const { removeCoffeeOnCart, changeAmountCoffeeSelected } =
    useContext(CoffeeContext)

  const priceFormatted = convertPriceToString(price)

  function handleRemoveCoffee() {
    removeCoffeeOnCart(id)
  }

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

  useEffect(() => {
    changeAmountCoffeeSelected(id, countItems)
  }, [countItems])

  return (
    <ContainerMain>
      <ContainerInfo>
        <WrapperImage>
          <img src={imgUrl} alt="" title="Image-Coffee" />
        </WrapperImage>
        <WrapperNameAdder>
          <Name>{name}</Name>
          <WrapperOptions>
            <AdderCoffee
              countItems={amountSelected}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
            <BtnRemove type="button" onClick={handleRemoveCoffee}>
              <Trash size={16} color={theme.colors['purple-500']} />
              <span>REMOVER</span>
            </BtnRemove>
          </WrapperOptions>
        </WrapperNameAdder>
      </ContainerInfo>
      <WrapperPrice>
        <Price>
          <span>R$</span> {priceFormatted}
        </Price>
      </WrapperPrice>
    </ContainerMain>
  )
}
