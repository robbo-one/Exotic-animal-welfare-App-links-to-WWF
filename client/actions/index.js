import { getAnimals } from '../apis/animals'

export const SET_ANIMALS = 'SET_ANIMALS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function setAnimals (animals) {
  return {
    type: SET_ANIMALS,
    animals
  }
}

export const ADD_ANIMAL_TO_CART = 'ADD_ANIMAL_TO_CART'

export function addAnimalToCart (id, name) {
  return {
    type: ADD_ANIMAL_TO_CART,
    id: id,
    name: name
  }
}

export const REMOVE_ANIMAL_FROM_CART = 'REMOVE_ANIMAL_FROM_CART'

export function removeAnimalFromCart (id) {
  return {
    type: REMOVE_ANIMAL_FROM_CART,
    id: id
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

export const NAVIGATE = 'NAVIGATE'

export function navigate (target) {
  return {
    type: NAVIGATE,
    target: target
    
  }
}
