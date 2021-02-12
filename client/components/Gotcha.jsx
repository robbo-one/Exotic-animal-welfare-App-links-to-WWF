import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { navigate, removeAnimalFromCart } from '../actions'

function Cart (props) {
  console.log(props)
  const returnToHomepage = () => {
    <a ></a>
  }

   return (
    <>
      <div className='gotcha'>
        <div>
          <h1> Wait, seriously? You tried to buy:</h1>  
        </div>
        <div className="table">
          {props.cart.map(({ id, name }) => {
            return (
                <div key={id} className="petName">{name}  </div> 
      
            )
          })}

    <h1>What were you thinking? That is super illegal. </h1>

    <a href="https://www.endangeredspecies.org.nz/act-now/donate" ><button id="sorry">I'm Sorry..</button></a> 

      </div>
      </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    cart : globalState.cart,
    activePage : globalState.activePage
  }
}

export default connect(mapStateToProps)(Cart)