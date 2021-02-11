import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchAnimals } from '../actions'

function Cart (props) {
  console.log(props)
  return (
    <>
      <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Animal</td>
            <td>Name</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(({ id, name, price, quantity }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td><input className='update-input' value={quantity} /></td>
                <td>{price}</td>
                {/* TODO: implement deletes */}
                <td><button><span className='fa fa-trash fa-2x' /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#'>Continue shopping</a>
        <button>Update</button> {/* TODO: implement updates */}
        <button className='button-primary'>Checkout</button>
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