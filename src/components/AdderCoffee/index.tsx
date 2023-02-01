import { Minus, Plus } from 'phosphor-react'

import { Adder, AdderCount, WrapperIcon } from './styles'

interface IAdderCoffee {
  countItems: number
  handleAddItem: () => void
  handleRemoveItem: () => void
}

export function AdderCoffee({
  countItems,
  handleAddItem,
  handleRemoveItem,
}: IAdderCoffee) {
  return (
    <Adder>
      <AdderCount>
        <WrapperIcon type="button" onClick={handleRemoveItem}>
          <Minus />
        </WrapperIcon>
        <span>{countItems}</span>
        <WrapperIcon type="button" onClick={handleAddItem}>
          <Plus />
        </WrapperIcon>
      </AdderCount>
    </Adder>
  )
}
