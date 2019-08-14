// create your App component here
import React from 'react' 

class App extends React.Component {


    state = {
        peopleInSpace: []
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json)
        .then(results => {
            this.setState({
                peopleInSpace: results
            })
        })
    }

    render() {

    }



}


export default App 