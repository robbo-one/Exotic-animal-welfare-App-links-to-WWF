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
     <h1> Wait, seriously? You tried to buy:</h1>  
          {props.cart.map(({ id, name }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                {/* TODO: implement deletes */}
              </tr>
            )
          })}
    <h1>What were you thinking? That is super illegal. </h1>

    <button onClick={returnToHomepage}>I'm Sorry..</button> 

    
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