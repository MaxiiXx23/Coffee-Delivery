import { useTheme } from 'styled-components'
import { CreditCard, Money, Bank } from 'phosphor-react'

import { BtnContainer } from './styles'

type IconName = 'CreditCard' | 'Money' | 'Bank'
type FormPayment = 'CreditCard' | 'Debit' | 'Money'

interface IBtnFormPayment {
  isSelected: boolean
  text: string
  icon: IconName
  formPaymentSelected: string
  formPayment: FormPayment
  selectFormPayment: (formPayment: string) => void
}

export function BtnFormPayment({
  text,
  icon,
  formPaymentSelected,
  formPayment,
  selectFormPayment,
}: IBtnFormPayment) {
  const theme = useTheme()

  const Icons = {
    CreditCard: <CreditCard size={16} color={theme.colors['purple-500']} />,
    Money: <Money size={16} color={theme.colors['purple-500']} />,
    Bank: <Bank size={16} color={theme.colors['purple-500']} />,
  }

  function handleSelectFormPayment() {
    selectFormPayment(formPayment)
  }

  return (
    <BtnContainer
      type="button"
      onClick={handleSelectFormPayment}
      isSelected={formPaymentSelected === formPayment}
    >
      <>{Icons[icon]}</>
      <span>{text}</span>
    </BtnContainer>
  )
}
