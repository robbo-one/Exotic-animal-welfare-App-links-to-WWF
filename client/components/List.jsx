import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAnimals, addAnimalToCart, navigate } from '../actions'

function List (props) {

  useEffect(() => {
    props.dispatch(fetchAnimals());
  }, []);
  
    const addToCart = (id, name) => {
      props.dispatch(addAnimalToCart(id, name))
      props.dispatch(navigate('cart'))
    }
  return (
      <div className='list'>
        <h1>Look at our exotic animals!</h1>
        <div>
          {props.animals.map(animal => (
            <div key={animal.id}>
              <img height="200px" src={"/images/" + animal.type.replace(/\s/g, '') + animal.name + ".jpg"} />

              <div>
                {animal.name}
              </div>
              <div>
                {animal.type}
              </div>
              <div>
                {animal.location}
              </div>
              <div>
                {animal.price}
              </div>
              <button onClick={()=>{addToCart(animal.id, animal.name)}}>+</button>
            </div>
          ))}
        </div>
       
      </div>
  )
          }

   const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
};       


export default connect(mapStateToProps)(List)