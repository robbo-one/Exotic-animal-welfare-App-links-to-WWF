import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { navigate, removeAnimalFromCart } from '../actions'

function Cart (props) {
  console.log(props)
  const returnToHomepage = () => {
    props.dispatch(navigate('listing'))
  }
  const deleteItem = (id) => {
    props.dispatch(removeAnimalFromCart(id))
  }

  const goToGotcha = () => {
    props.dispatch(navigate('Gotcha'))
  }
   return (
    <>
      <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(({ id, name, type, price }) => {
            return (
              
              <tr key={id}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{price}</td>
                {/* TODO: implement deletes */}
                <td><button onClick={() => deleteItem(id)}><span className='fa fa-trash fa-2x' />Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={returnToHomepage} >Continue shopping</a>      
        <button onClick={goToGotcha} className='button-primary' >Checkout</button>
      </p>
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