import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import List from './List'
// import Cart from './Cart'

import { fetchAnimals } from '../actions'

function App () {

  // useEffect(() => {
  //   props.dispatch(fetchAnimals());
  // }, []);

  return (
    <>
    <div className='app'>
      
      <List />
      {/* <Cart /> */}
     
      </div>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//     animals: globalState.animals
//   }
// };

export default App

