import { combineReducers } from 'redux'

import animals from './animals'
import cart from './cart'
import activePage from './activePage'

export default combineReducers({
  animals, cart, activePage
})
