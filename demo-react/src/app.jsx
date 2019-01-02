import React from 'react'
import Clock from './clock'
import Toggle from './toggle'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Game from './game'

const clock = () => <Clock />
const toggle = () => <Toggle />
const game = () => <Game />

export default class Greeting extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello,{this.props.name}</h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Tutorial: Intro to React</Link>
                </li>
                <li>
                  <Link to='/clock/'>Clock</Link>
                </li>
                <li>
                  <Link to='/toggle/'>Toggle</Link>
                </li>
              </ul>
            </nav>

            <Route path='/' exact component={game} />
            <Route path='/clock/' component={clock} />
            <Route path='/toggle/' component={toggle} />
          </div>
        </Router>
      </div>

    )
  }
}
