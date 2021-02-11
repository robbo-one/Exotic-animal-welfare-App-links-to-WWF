import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

const App = (props) => {

  useEffect(() => {
    props.dispatch(fetchFruits())
  })

  return (
    <>
      <div className='app'>
        <h1>Look at our exotic animals!</h1>
        <ul>
          {props.animals.map(animal => (
            <li key={animal}>{animal}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)

