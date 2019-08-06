import React, {Component} from 'react'

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {astros: []}
	}

	componentDidMount(){
		fetch("http://api.open-notify.org/astros.json")
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					...this.state,
					astros: data.people
				})
			})
	}

	render(){
		return (
			<ul>{this.state.astros.map(astro =>
				<li key={astro.name} >{astro.name} - {astro.craft}</li>
			)}</ul>
		)
	}
}