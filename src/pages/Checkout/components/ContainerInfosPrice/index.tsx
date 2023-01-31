import { useState, useEffect } from 'react'

import {
  ContainerInfos,
  WrapperTotalItems,
  WrapperDelivery,
  WrapperTotal,
  TitleInfo,
  PriceInfo,
  TitleTotal,
  PriceTotal,
} from './styles'

interface IContainerInfosPriceProps {
  priceTotalItems: string
}

export function ContainerInfosPrice({
  priceTotalItems,
}: IContainerInfosPriceProps) {
  const [priceCurrentTotalItems, setPriceCurrentTotalItems] = useState('0')

  const priceTotalItemsFormatted = priceTotalItems.replace('.', ',')
  const priceDelivery = 3.5

  const priceTotal = (Number(priceCurrentTotalItems) + priceDelivery)
    .toFixed(2)
    .replace('.', ',')

  const priceTotalToPay = priceCurrentTotalItems === '0.00' ? '0' : priceTotal

  useEffect(() => {
    setPriceCurrentTotalItems(priceTotalItems)
  }, [priceTotalItems])

  return (
    <ContainerInfos>
      <WrapperTotalItems>
        <TitleInfo>Total de itens</TitleInfo>
        <PriceInfo>R$ {priceTotalItemsFormatted}</PriceInfo>
      </WrapperTotalItems>
      <WrapperDelivery>
        <TitleInfo>Entrega</TitleInfo>
        <PriceInfo>R$ 3,50</PriceInfo>
      </WrapperDelivery>
      <WrapperTotal>
        <TitleTotal>Total</TitleTotal>
        <PriceTotal>R$ {priceTotalToPay}</PriceTotal>
      </WrapperTotal>
    </ContainerInfos>
  )
}
