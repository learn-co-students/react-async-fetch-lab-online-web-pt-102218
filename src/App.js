// create your App component here
import React from 'react'

export default class App extends React.Component {
  state = {
    astrosList: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        astrosList: json.people
      })}).then(() =>  console.log(this.state))
  }

  astrosUl = () => {
    console.log(this.state.astrosList)
    return (
      this.state.astrosList.map(astro => {
        return <li>{ astro.name }</li>
      })
    )
  }

  render() {
    return (
      <div>
        <h3>Astronauts in Space</h3>
        <div className="list"><ul>{this.astrosUl()}</ul></div>
      </div>
    )
  }
}