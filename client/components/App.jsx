import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import List from './List'
import Cart from './Cart'
import Gotcha from './Gotcha'

function App (props) {
console.log("props", props)
  return (
    <>
    <div className='app'>  
      { props.activePage == 'listing' && <List />}  
      { props.activePage == 'cart' && <Cart />}
      { props.activePage == 'Gotcha' && <Gotcha />}

      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    activePage: globalState.activePage
  }
};

export default connect(mapStateToProps)(App)

