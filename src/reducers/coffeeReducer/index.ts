export interface ICoffee {
    id: string
    imgUrl: string
    name: string
    price: number
    amountSelected: number
}

interface ICoffeeStateReducer {
    coffeesSelected: ICoffee[],
    countCart: number
}

export enum ActionTypes {
    'ADD_NEW_COFFEE' = 'ADD_NEW_COFFE',
    'REMOVE_COFFEE_SELECTED' = 'REMOVE_COFFEE_SELECTED',
    'CHANGE_AMOUNT_SELECTED' = 'CHANGE_AMOUNT_SELECTED',
    'CHANGE_SCORE_CART_SELECTED' = 'CHANGE_SCORE_CART_SELECTED',
    'DELETE_ALL_STATE' = 'DELETE_ALL_STATE'
}

export interface IActions {
    type: ActionTypes
    payload?: any
}

export function coffeeReducer(state: ICoffeeStateReducer, action: IActions) {

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
                    coffeesSelected: [...state.coffeesSelected, action.payload.newCoffee],
                }
            }
        }

        case ActionTypes.REMOVE_COFFEE_SELECTED: {
            const coffeeExists = state.coffeesSelected
                .find((coffee) => coffee.id === action.payload.id)

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

        case ActionTypes.CHANGE_AMOUNT_SELECTED: {

            const coffeeExists = state.coffeesSelected
                .find((coffee) => coffee.id === action.payload.id)

            if(coffeeExists) {
                coffeeExists.amountSelected = action.payload.amountSelected
                return {
                    ...state,
                    coffeesSelected: [...state.coffeesSelected]          
                }
            }

            return state
        }

        case ActionTypes.CHANGE_SCORE_CART_SELECTED: {
            const scoresCoffeesSelected = state.coffeesSelected.map((coffee) => {
                return coffee.amountSelected
            })
            let totalScoreCart = 0;

            if(scoresCoffeesSelected.length > 0){
               totalScoreCart = scoresCoffeesSelected.reduce((acc, currentValue) => {
                    return acc + currentValue
                })

                return {
                    ...state,
                    countCart: totalScoreCart
                }
            }

            return {
                ...state,
                countCart: totalScoreCart
            }

        }

        case ActionTypes.DELETE_ALL_STATE: {
            return {
                ...state,
                coffeesSelected: [],
                countCart: 0
            }
        }

        default:
            return state
    }
}
