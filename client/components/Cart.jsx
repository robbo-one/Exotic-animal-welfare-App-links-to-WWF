import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

function Cart (props) {
  console.log(props)
  const returnToHomepage = () => {
    props.dispatch(navigate('listing'))
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
          {props.cart.map(({ id, name, price }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                
                <td>{price}</td>
                {/* TODO: implement deletes */}
                <td><button><span className='fa fa-trash fa-2x' />Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={returnToHomepage} >Continue shopping</a>      
        <a href="https://www.worldwildlife.org/"> <button className='button-primary' >Checkout</button></a>
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