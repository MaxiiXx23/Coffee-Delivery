export interface ICoffee {
    id: string
    imgUrl: string
    name: string
    price: number
    amountSelected: number
}

// Reducer and after refectoring this "method" pass to a separate dir
interface ICoffeeStateReducer {
    coffeesSelected: ICoffee[],
    countCart: number
}

export enum ActionTypes {
    'ADD_NEW_COFFEE' = 'ADD_NEW_COFFE',
    'REMOVE_COFFEE_SELECTED' = 'REMOVE_COFFEE_SELECTED',
    'ADD_AT_COUNT' = 'ADD_AT_COUNT',
    'REMOVE_AT_COUNT' = 'REMOVE_AT_COUNT'
}

export interface IActions {
    type: ActionTypes
    payload?: any
}

export function coffeeReducer(state: ICoffeeStateReducer, action: IActions) {
    // to make switch with the options of actions

    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE: {

            const coffeeAlreadyExists = state.coffeesSelected
                .find((coffeeSelected) => coffeeSelected.id === action.payload.newCoffee.id)

            if (coffeeAlreadyExists) {
                coffeeAlreadyExists.amountSelected = action.payload.newCoffee.amountSelected

                return {
                    ...state,
                }
            }else {
                return {
                    ...state,
                    coffeesSelected: [...state.coffeesSelected, action.payload.newCoffee]
                }
            }
        }

        case ActionTypes.REMOVE_COFFEE_SELECTED: {
            const coffeeExists = state.coffeesSelected
                .find((coffee) => coffee.id === action.payload.id)

            console.log(coffeeExists)

            if(coffeeExists){
                const newArrayWithoutCoffeeSelected = state.coffeesSelected
                    .filter((coffee) => coffee.id !== coffeeExists.id)

                return {
                    ...state,
                    coffeesSelected: [...newArrayWithoutCoffeeSelected]
                }
            }
            return state
        }

        default:
            return state
    }
}
