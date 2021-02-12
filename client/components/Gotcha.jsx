import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { navigate, removeAnimalFromCart } from '../actions'

function Cart (props) {
  console.log(props)
  const returnToHomepage = () => {
    props.dispatch(navigate('listing'))
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
              
              <tr key={id}>
                <td className="petName">{name}</td>
                {/* TODO: implement deletes */}
              </tr>
              
              
            )
          })}
          </div>
    <div>
      <h1>What were you thinking? That is super illegal. </h1>
    </div>
    
    <div>
      <button id="sorry" onClick={returnToHomepage}>I'm sorry ...</button>
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