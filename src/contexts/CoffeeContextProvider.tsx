import { ReactNode, createContext, useReducer } from 'react'

import { ICoffee, coffeeReducer } from '../reducers/coffeeReducer'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
  changeAmountSelectedAction,
  changeScoreCartSelectedAction,
} from '../reducers/coffeeReducer/actions'

interface ICoffeeContext {
  countCart: number
  coffeesSelected: ICoffee[]
  addNewCoffeeOnCart: (newCoffee: ICoffee) => void
  removeCoffeeOnCart: (id: string) => void
  changeAmountCoffeeSelected: (id: string, amountSelected: number) => void
}

interface ICoffeeContextProvider {
  children: ReactNode
}

export const CoffeeContext = createContext<ICoffeeContext>({} as ICoffeeContext)

export function CoffeeContextProvider({ children }: ICoffeeContextProvider) {
  const [coffeeState, dispatch] = useReducer(coffeeReducer, {
    coffeesSelected: [],
    countCart: 0,
  })

  function addNewCoffeeOnCart(newCoffee: ICoffee) {
    dispatch(addNewCoffeeAction(newCoffee))
    dispatch(changeScoreCartSelectedAction())
  }

  function removeCoffeeOnCart(id: string) {
    dispatch(removeCoffeeAction(id))
    dispatch(changeScoreCartSelectedAction())
  }

  function changeAmountCoffeeSelected(id: string, amountSelected: number) {
    dispatch(changeAmountSelectedAction(id, amountSelected))
  }

  const { coffeesSelected, countCart } = coffeeState

  return (
    <CoffeeContext.Provider
      value={{
        coffeesSelected,
        countCart,
        addNewCoffeeOnCart,
        removeCoffeeOnCart,
        changeAmountCoffeeSelected,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
