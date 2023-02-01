import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { ICoffee, coffeeReducer } from '../reducers/coffeeReducer'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
  changeAmountSelectedAction,
  changeScoreCartSelectedAction,
  deleteAllStateAction,
} from '../reducers/coffeeReducer/actions'

export interface IDataForm {
  street: string
  number: string
  district: string
  city: string
  state: string
  formPaymentSelected: string
}

interface ICoffeeContext {
  countCart: number
  coffeesSelected: ICoffee[]
  dataForm: IDataForm
  addDataForm: (dataForm: IDataForm) => void
  addNewCoffeeOnCart: (newCoffee: ICoffee) => void
  removeCoffeeOnCart: (id: string) => void
  changeAmountCoffeeSelected: (id: string, amountSelected: number) => void
  deleteAllStateReducer: () => void
}

interface ICoffeeContextProvider {
  children: ReactNode
}

const keyCoffeesSelectedLocalStorage = '@CoffeesDelivery:CoffeesSelected-1.0.0'

export const CoffeeContext = createContext<ICoffeeContext>({} as ICoffeeContext)

export function CoffeeContextProvider({ children }: ICoffeeContextProvider) {
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffeesSelected: [],
      countCart: 0,
    },
    () => {
      const dataLocalStorage = localStorage.getItem(
        keyCoffeesSelectedLocalStorage,
      )

      if (dataLocalStorage) {
        return JSON.parse(dataLocalStorage)
      }

      return {
        coffeesSelected: [],
        countCart: 0,
      }
    },
  )

  const [dataForm, setDataForm] = useState<IDataForm>({} as IDataForm)

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
    dispatch(changeScoreCartSelectedAction())
  }

  function deleteAllStateReducer() {
    dispatch(deleteAllStateAction())
  }

  function addDataForm(dataForm: IDataForm) {
    setDataForm(dataForm)
  }

  const { coffeesSelected, countCart } = coffeeState

  useEffect(() => {
    const coffeesSelectedJSON = JSON.stringify(coffeeState)

    localStorage.setItem(keyCoffeesSelectedLocalStorage, coffeesSelectedJSON)
  }, [coffeesSelected])

  return (
    <CoffeeContext.Provider
      value={{
        coffeesSelected,
        countCart,
        dataForm,
        addDataForm,
        addNewCoffeeOnCart,
        removeCoffeeOnCart,
        changeAmountCoffeeSelected,
        deleteAllStateReducer,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
