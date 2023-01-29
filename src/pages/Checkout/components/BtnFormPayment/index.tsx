import { useTheme } from 'styled-components'
import { CreditCard, Money, Bank } from 'phosphor-react'

import { BtnContainer } from './styles'

type IconName = 'CreditCard' | 'Money' | 'Bank'

interface IBtnFormPayment {
  isSelected: boolean
  text: string
  icon: IconName
}

export function BtnFormPayment({ text, icon, isSelected }: IBtnFormPayment) {
  const theme = useTheme()

  const Icons = {
    CreditCard: <CreditCard size={16} color={theme.colors['purple-500']} />,
    Money: <Money size={16} color={theme.colors['purple-500']} />,
    Bank: <Bank size={16} color={theme.colors['purple-500']} />,
  }

  return (
    <BtnContainer type="button" isSelected={isSelected}>
      <>{Icons[icon]}</>
      <span>{text}</span>
    </BtnContainer>
  )
}
