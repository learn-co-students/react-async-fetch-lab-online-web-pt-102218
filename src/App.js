import React, {Component} from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      people: ''
    }
  }
  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(response => response.json)
    .then(data => {
      this.setState({
        data
      })
    })
  }

  render() {
  }
}
