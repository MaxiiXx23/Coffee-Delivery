import {
  MapPin,
  Timer,
  CurrencyDollar,
  ShoppingCart,
  Package,
  Coffee,
} from 'phosphor-react'

import { WrapperIcon, VariantType } from './styles'

type IconTypes =
  | 'MapPin'
  | 'Timer'
  | 'CurrencyDollar'
  | 'ShoppingCart'
  | 'Package'
  | 'Coffee'

interface ICircleIcon {
  IconName: IconTypes
  variantColor: VariantType
}

const Icons = {
  MapPin: <MapPin size={16} weight="fill" />,
  Timer: <Timer size={16} weight="fill" />,
  CurrencyDollar: <CurrencyDollar size={16} />,
  ShoppingCart: <ShoppingCart size={16} weight="fill" />,
  Package: <Package size={16} weight="fill" />,
  Coffee: <Coffee size={16} weight="fill" />,
}

export function CircleIcon({ IconName, variantColor }: ICircleIcon) {
  return (
    <WrapperIcon variant={variantColor}>
      <>{Icons[IconName]}</>
    </WrapperIcon>
  )
}
