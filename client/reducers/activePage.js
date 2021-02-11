import { NAVIGATE } from '../actions'

const initialState = "listing"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
     return action.target
    default:
      return state
  }
}

export default reducer