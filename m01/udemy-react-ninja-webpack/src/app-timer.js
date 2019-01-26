'use strict'

import React, { Component } from 'react'

import Timer from './timer'

class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        {/* curto circuito do js, se o state.timer for true, renderiza o Timer, caso não.. nao rederiza */}
        { this.state.showTimer && <Timer timer={this.state.time} /> }

        <button onClick={ () => {
          this.setState({ showTimer: !this.state.showTimer})
        }}>Show / Hide Timer</button>
      </div>
    )
  }
}

export default App
