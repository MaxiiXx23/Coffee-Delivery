import { useContext, useState } from 'react'

import { useTheme } from 'styled-components'
// import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { MapPinLine, CurrencyDollar } from 'phosphor-react'

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

import { CoffeeContext } from '../../contexts/CoffeeContextProvider'
import { ContainerInfosPrice } from './components/ContainerInfosPrice'
import { ContainerInputsForm } from './components/ContainerInputsForm'
import { CoffeeSelected } from './components/CoffeeSelected'

import { BtnFormPayment } from './components/BtnFormPayment'
import { Button } from '../../components/Button'

/*
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

*/

const schema = yup.object({
  state: yup.string().max(2, 'Estado não pode conter mais de 2 caracteres.'),
  city: yup.string().max(50, 'Cidade não pode conter mais de 50 caracteres.'),
  district: yup
    .string()
    .max(50, 'Bairro não pode conter mais de 50 caracteres.'),
  complement: yup
    .string()
    .max(50, 'Complemento não pode conter mais de 50 caracteres.'),
  number: yup.string().required('Número inválido.'),
  street: yup
    .string()
    .max(50, 'Rua não pode conter mais de 50 caracteres.')
    .required('Rua inválida.'),
  cep: yup.string().length(8, 'CEP inválido.').required(),
})

// type FormData = yup.InferType<typeof schema>

interface IFormData {
  state: string
  city: string
  district: string
  complement: string
  number: string
  street: string
  cep: string
  formPayment: string
}

export function Checkout() {
  const theme = useTheme()
  const { coffeesSelected } = useContext(CoffeeContext)

  const [formPaymentSelected, setFormPaymentSelected] = useState('')

  // const navigate = useNavigate()

  const formCheckout = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      formPayment: '',
    },
  })

  const { handleSubmit, setValue } = formCheckout

  // function handleNavigateToSuccess() {
  //   navigate('/success')
  // }

  // calcule of total value to pay

  const totalToPayItems =
    coffeesSelected.length > 0
      ? coffeesSelected
          .map((coffee) => {
            return coffee.price * coffee.amountSelected
          })
          .reduce((acc, currentValue) => {
            return acc + currentValue
          })
      : 0

  const priceTotalItems = totalToPayItems.toFixed(2)

  function selectFormPayment(formPayment: string) {
    setFormPaymentSelected(formPayment)
    setValue('formPayment', formPayment)
  }

  function handleFormCheckout(data: IFormData) {
    console.log(data)
  }

  return (
    <ContainerMain>
      <form onSubmit={handleSubmit(handleFormCheckout)} action="">
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
            <FormProvider {...formCheckout}>
              <ContainerInputsForm />
            </FormProvider>
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
                  formPaymentSelected={formPaymentSelected}
                  formPayment="CreditCard"
                  selectFormPayment={selectFormPayment}
                  isSelected={true}
                />
                <BtnFormPayment
                  text="CARTÃO DE DÉBITO"
                  icon="Bank"
                  formPaymentSelected={formPaymentSelected}
                  formPayment="Debit"
                  selectFormPayment={selectFormPayment}
                  isSelected={false}
                />
                <BtnFormPayment
                  text="DINHEIRO"
                  icon="Money"
                  formPaymentSelected={formPaymentSelected}
                  formPayment="Money"
                  selectFormPayment={selectFormPayment}
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
              {coffeesSelected.map((coffeeSelected) => {
                return (
                  <CoffeeSelected
                    key={coffeeSelected.id}
                    id={coffeeSelected.id}
                    imgUrl={coffeeSelected.imgUrl}
                    name={coffeeSelected.name}
                    price={coffeeSelected.price}
                    amountSelected={coffeeSelected.amountSelected}
                  />
                )
              })}
            </ListCoffees>
            <ContainerMainInfo>
              <ContainerInfosPrice priceTotalItems={priceTotalItems} />
              <Button type="submit" text="CONFIRMAR PEDIDO" />
            </ContainerMainInfo>
          </ContainerSelectedCoffees>
        </ContainerMainSelectedCoffees>
      </form>
    </ContainerMain>
  )
}
