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

/* 

interface IContainerInfosPrice {
  PriceTotalItems: number
  PriceDelivery: number
  PriceTotal: number
}

*/

export function ContainerInfosPrice() {
  return (
    <ContainerInfos>
      <WrapperTotalItems>
        <TitleInfo>Total de itens</TitleInfo>
        <PriceInfo>R$ 29,70</PriceInfo>
      </WrapperTotalItems>
      <WrapperDelivery>
        <TitleInfo>Entrega</TitleInfo>
        <PriceInfo>R$ 3,50</PriceInfo>
      </WrapperDelivery>
      <WrapperTotal>
        <TitleTotal>Total</TitleTotal>
        <PriceTotal>R$ 33,20</PriceTotal>
      </WrapperTotal>
    </ContainerInfos>
  )
}
