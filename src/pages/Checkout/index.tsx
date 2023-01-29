import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RelativeRoutingType, useNavigate } from 'react-router-dom'

import {
  ContainerMain,
  ContainerMainAddress,
  Title,
  ContainerAddress,
  ContainerHeader,
  ContainerDescription,
  SubTitle,
  Description,
  ContainerPaymentMain,
  ContainerPayment,
  ContainerFormPayment,
  ContainerMainSelectedCoffees,
  ContainerSelectedCoffees,
  ListCoffees,
  ContainerMainInfo,
} from './styles'

import { ContainerInfosPrice } from './components/ContainerInfosPrice'
import { ContainerInputsForm } from './components/ContainerInputsForm'
import { CoffeeSelected } from './components/CoffeeSelected'

import { BtnFormPayment } from './components/BtnFormPayment'
import { Button } from '../../components/Button'

interface NavigateFunction {
  (
    to: '/success',
    options?: {
      replace?: boolean
      state?: any
      relative?: RelativeRoutingType
    },
  ): void
  (delta: number): void
}

// eslint-disable-next-line no-redeclare
declare function useNavigate(): NavigateFunction

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()

  function handleNavigateToSuccess() {
    navigate('/success')
  }

  return (
    <ContainerMain>
      <form action="">
        <ContainerMainAddress>
          <Title>Complete seu pedido</Title>
          <ContainerAddress>
            <ContainerHeader>
              <MapPinLine color={theme.colors['yellow-600']} size={22} />
              <ContainerDescription>
                <SubTitle>Endereço de Entrega</SubTitle>
                <Description>
                  Informe o endereço onde deseja receber seu pedido
                </Description>
              </ContainerDescription>
            </ContainerHeader>
            <ContainerInputsForm />
          </ContainerAddress>
          <ContainerPaymentMain>
            <ContainerPayment>
              <ContainerHeader>
                <CurrencyDollar color={theme.colors['purple-500']} size={22} />
                <ContainerDescription>
                  <SubTitle>Pagamento</SubTitle>
                  <Description>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </Description>
                </ContainerDescription>
              </ContainerHeader>
              <ContainerFormPayment>
                <BtnFormPayment
                  text="CARTÃO DE CRÉDITO"
                  icon="CreditCard"
                  isSelected={true}
                />
                <BtnFormPayment
                  text="CARTÃO DE DÉBITO"
                  icon="Bank"
                  isSelected={false}
                />
                <BtnFormPayment
                  text="DINHEIRO"
                  icon="Money"
                  isSelected={false}
                />
              </ContainerFormPayment>
            </ContainerPayment>
          </ContainerPaymentMain>
        </ContainerMainAddress>
        {/* Container Main Selecteds Coffees */}
        <ContainerMainSelectedCoffees>
          <Title>Cafés selecionados</Title>
          <ContainerSelectedCoffees>
            <ListCoffees>
              <CoffeeSelected />
              <CoffeeSelected />
            </ListCoffees>
            <ContainerMainInfo>
              <ContainerInfosPrice />
              <Button
                onClick={handleNavigateToSuccess}
                text="CONFIRMAR PEDIDO"
              />
            </ContainerMainInfo>
          </ContainerSelectedCoffees>
        </ContainerMainSelectedCoffees>
      </form>
    </ContainerMain>
  )
}
