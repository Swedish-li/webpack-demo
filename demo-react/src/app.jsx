import React from 'react'
import Clock from './clock'
import Toggle from './toggle'

export default class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <Clock />
                <Toggle />
            </div>

        )
    }
}
