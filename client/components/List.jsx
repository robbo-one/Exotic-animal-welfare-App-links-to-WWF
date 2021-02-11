import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAnimals } from '../actions'

function List (props) {

  useEffect(() => {
    props.dispatch(fetchAnimals());
  }, []);
  
  return (
    
      <div className='list'>
        
        <h1>Look at our exotic animals!</h1>
        <div>
          {props.animals.map(animal => (
            <div key={animal.id}>
              <img src={"/images/" + animal.type.replace(/\s/g, '') + animal.name + ".jpg"} />

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

            </div>
          ))}
        </div>
       
      </div>
  )
          }

   const mapStateToProps = (globalState) => {
     console.log(globalState)
  return {
    animals: globalState.animals
  }
};       


export default connect(mapStateToProps)(List)