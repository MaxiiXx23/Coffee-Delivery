import { ActionTypes, IActions, ICoffee } from '.'

// actions que serão chamadas pelo dispatch

export function addNewCoffeeAction(newCoffee: ICoffee): IActions {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: { newCoffee },
  }
}

export function removeCoffeeAction(id: string): IActions {
  return {
    type: ActionTypes.REMOVE_COFFEE_SELECTED,
    payload: {
      id,
    },
  }
}
