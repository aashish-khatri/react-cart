import React, { Component } from 'react'
import Table from './Table'
import Form from './form'


class App extends Component {
	state = {
		characters: [
		{
			name: 'Ruhela',
			job: 'Nalla'
		},
		{
			name: 'Aitik',
			job: 'sdkn'
		},
		{
			name: 'Aadit',
			job: 'dkalck'
		},
		],
	}

	handleSubmit = character => {
		this.setState({characters: [...this.state.characters , character]})
	}

	removeCharacter = index => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character , i) => {
				return i !== index;
			}),
		})
	}

	render() {
		const {characters} = this.state; 
		return (
			<div className = "container">
				<Table characterData = {characters} removeCharacter = {this.removeCharacter} />
				<Form handleSubmit = {this.handleSubmit} />
			</div>
			)
	}
}

export default App;