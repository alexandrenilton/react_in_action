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

  render () {
    // console.log('render app')
    return (
      <div>
        <Timer timer={this.state.time} />

        <button onClick={ () => {
          this.setState({ time: this.state.time + 1})
        }}>Change props</button>
      </div>
    )
  }
}

export default App
