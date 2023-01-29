import { Minus, Plus } from 'phosphor-react'

import { Adder, AdderCount, WrapperIcon } from './styles'

export function AdderCoffee() {
  return (
    <Adder>
      {/* Adder */}
      <AdderCount>
        <WrapperIcon>
          <Minus />
        </WrapperIcon>
        <span>1</span>
        <WrapperIcon>
          <Plus />
        </WrapperIcon>
      </AdderCount>
    </Adder>
  )
}
