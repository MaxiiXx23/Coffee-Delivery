import { ActionTypes, IActions, ICoffee } from '.'

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

export function changeAmountSelectedAction(
  id: string,
  amountSelected: number,
): IActions {
  return {
    type: ActionTypes.CHANGE_AMOUNT_SELECTED,
    payload: {
      id,
      amountSelected,
    },
  }
}

export function changeScoreCartSelectedAction(): IActions {
  return {
    type: ActionTypes.CHANGE_SCORE_CART_SELECTED,
  }
}
export function deleteAllStateAction(): IActions {
  return {
    type: ActionTypes.DELETE_ALL_STATE,
  }
}
