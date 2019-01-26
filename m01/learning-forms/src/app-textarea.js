'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
    }
  }

  render () {
    return (
      <form>
        <textarea defaultValue={'Valor\nvalor'}/>
      </form>
    )
  }
}

export default App
