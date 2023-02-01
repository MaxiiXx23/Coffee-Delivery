import { useContext } from 'react'

import { CoffeeContext } from '../../contexts/CoffeeContextProvider'

import IllustrationImg from '../../assets/images/Illustration.svg'
import { CircleIcon } from '../../components/CircleIcon'

import {
  ContainerMain,
  ContainerInfoSuccess,
  Title,
  Subtitle,
  ContainerTitleAndSubtitle,
  ContainerInfosFinal,
  List,
  ItemInfo,
  WrapperInfos,
  Text,
  TextBold,
  ContainerIllustration,
} from './styles'

export function Success() {
  const { dataForm } = useContext(CoffeeContext)

  const formPaymentPtBR: { [key: string]: any } = {
    CreditCard: 'Cartão de Crédito',
    Debit: 'Cartão de Débito',
    Money: 'Dinheiro',
  }

  const { street, number, district, city, state, formPaymentSelected } =
    dataForm

  const formPayment = formPaymentPtBR[formPaymentSelected]

  return (
    <ContainerMain>
      <ContainerInfoSuccess>
        <ContainerTitleAndSubtitle>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </ContainerTitleAndSubtitle>
        <ContainerInfosFinal>
          <List>
            <ItemInfo>
              <CircleIcon IconName="MapPin" variantColor="purple" />
              <WrapperInfos>
                <Text>
                  Entrega em{' '}
                  <TextBold>
                    {street}, {number}
                  </TextBold>
                </Text>
                <Text>
                  {district} - {city}, {state}
                </Text>
              </WrapperInfos>
            </ItemInfo>
            <ItemInfo>
              <CircleIcon IconName="Timer" variantColor="yellow" />
              <WrapperInfos>
                <Text>Previsão de entrega</Text>
                <TextBold>20 min - 30 min</TextBold>
              </WrapperInfos>
            </ItemInfo>
            <ItemInfo>
              {/* Colocar o CircleIcon */}
              <CircleIcon IconName="CurrencyDollar" variantColor="yellowDark" />
              <WrapperInfos>
                <Text>Pagamento na entrega</Text>
                <TextBold>{formPayment}</TextBold>
              </WrapperInfos>
            </ItemInfo>
          </List>
        </ContainerInfosFinal>
      </ContainerInfoSuccess>
      <ContainerIllustration>
        <img src={IllustrationImg} alt="" title="Illustration-success" />
      </ContainerIllustration>
    </ContainerMain>
  )
}
