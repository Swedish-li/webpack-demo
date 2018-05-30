import React, { Component } from 'react'

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = { current: Date.now() }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    // Do Not Modify State Directly
    this.setState(
      { current: Date.now() }
    )
  }

  render () {
    return (
      <div>
        <h2>It is {this.state.current.toString()}</h2>
      </div>
    )
  }
}
