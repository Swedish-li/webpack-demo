const React = require('react')
const ReactDOM = require('react-dom')

class Greeting extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>
  }
}

ReactDOM.render(
  <Greeting name="React's world!" />,
  document.querySelector('#wrapper')
)