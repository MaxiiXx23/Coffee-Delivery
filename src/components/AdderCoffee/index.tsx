// import { useContext } from 'react'

import { Minus, Plus } from 'phosphor-react'

import { Adder, AdderCount, WrapperIcon } from './styles'

// import { CoffeeContext } from '../../contexts/CoffeeContextProvider'

interface IAdderCoffee {
  idCoffee: string
}

export function AdderCoffee({ idCoffee }: IAdderCoffee) {
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
