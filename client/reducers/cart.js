import { ADD_ANIMAL_TO_CART, REMOVE_ANIMAL_FROM_CART } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANIMAL_TO_CART:
      return [...state,{
        id : action.id,
        name: action.name,
        quantity: 1
      } ]
    
        case REMOVE_ANIMAL_FROM_CART:
          return state.filter(animal => {
            animal.id !== action.id 
          })
    default:
      return state
  }
}

export default reducer
