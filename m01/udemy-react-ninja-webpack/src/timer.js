'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }

    this.timer;
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWilLReceiveProps timer', this.props, nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(`shouldComponentUpdate timer.:  ${this.props.time !== nextProps.time}` )
  //   return this.props.time !== nextProps.time
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate', this.props, nextProps)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentDidMount () {
    console.log('BEG: componentDidMount timer')
    this.timer = setInterval( () => {
      this.setState({ time: this.state.time + 1})
    }, 1000)
    console.log('END: componentDidMount timer')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    // para o setInterval criado em componentDidMount()
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return <div>Timer.: {this.state.time} </div>
  }
}

Timer.defaultProps = {
  time: 0
}

export default Timer
