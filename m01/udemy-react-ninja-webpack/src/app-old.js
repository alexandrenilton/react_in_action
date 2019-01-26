'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'
import Button from './button'

class App extends Component {

  constructor () {
    super()
    this.state = {
      text: 'Hello from ReactJS State'
    }
  }


  render () {
    return(
      <div className="container" >
        <LikeButton onClick={() => this.setState( {text: 'Alexandre'})} />
        <SearchButton />
        {this.state.text}
      </div>
    )
  }
}

// import Square from './square'
// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         {/* repetindo componentes..   */}
//         {['steelblue', 'tomato', 'lightyellow', 'brown', 'chartreuse', 'teal', 'DodgerBlue', 'LightCoral']
//           .map((square, index) => (
//             <Square key={index} color={square} />
//         ))}

//       </div>
//     )
//   }
// }

export default App
