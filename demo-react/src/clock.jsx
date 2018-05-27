import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: new Date() }
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
      { current: new Date() }
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
