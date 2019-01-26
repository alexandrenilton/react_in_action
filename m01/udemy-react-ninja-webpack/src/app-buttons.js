'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      color: 'SpringGreen'
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <Square color={this.state.color}/>
        {['tomato', 'steelblue', 'lightyellow'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color: color })}>
            {color}
          </Button>
        ))}

      </div>
    )
  }
}

export default App
