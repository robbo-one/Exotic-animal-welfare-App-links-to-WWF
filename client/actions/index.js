import { getAnimals } from '../apis/animals'

export const SET_ANIMALS = 'SET_ANIMALS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals
  }
}

export function fetchAnimals () {
  return dispatch => {
    return getAnimals()
      .then(animals => {
        console.log(animals)
        dispatch(setAnimals(animals))
        return null
      })
  }
}

export function addToCart (id, name) {
  return {
    type: ADD_TO_CART,
    id: id,
    name: name,
  }
}
