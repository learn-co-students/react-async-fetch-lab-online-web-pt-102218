// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => this.setState({list: json.people}))
            .catch(error => console.log(error))
        
    }

    render() {
        return (
            <div>
                {this.state.list.map(person => person.name)}
            </div>
        )
    }

}