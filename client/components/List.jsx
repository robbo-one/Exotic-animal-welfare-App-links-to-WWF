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
        <h1 className="homeTitle" >BUY EXOTIC Animals HERE!</h1>
        <h2 className="sale">* SALE *</h2>
        <div className="animalWrap">
          {props.animals.map(animal => (
            <div className="animalListingggs" key={animal.id}>
              <img className="animalImg" height="200px" src={"/images/" + animal.type.replace(/\s/g, '') + animal.name + ".jpg"} />
             <div className="animalListing">
                <h3> Name: {animal.name} </h3>
             <br></br>
                <h3> Species: {animal.type} </h3>
                <br></br>
                <h3> Origin: {animal.location} </h3>
                <br></br>
                <h3> Price $ {animal.price} </h3>
                <br></br>
              
              </div>
              <div className="buttonDiv">
              <button className="addToCartButton"  onClick={()=>{addToCart(animal.id, animal.name)}}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
       <footer>Legal Disclaimer: Purchase at your own risk! Shipping not included.</footer>
      </div>
  )
          }

   const mapStateToProps = (globalState) => {
  return {
    animals: globalState.animals
  }
};       


export default connect(mapStateToProps)(List)