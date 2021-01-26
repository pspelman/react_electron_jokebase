import React, {Component} from 'react'
import ViewTitle from "./shared/ViewTitle";
import Spinner from "./Spinner";


const allJokes = {
	jokes: [
		{
			punchline: 'this is a joke',
			author: 'Anonymous',
			date: 'Earlier'
		},
		{
			punchline: 'this is not a joke - it is a sentence.',
			author: 'Phil',
			date: 'Once ago'
		},
	]
}

class JokeList extends Component {

	renderJokelist() {
		// get the jokes from Redux
		// return a set of joke cards
	}

	render() {

		if (!this.props.jokes) {
			return <Spinner message={'awaiting a laf'}/>
		}

		return (
			<div>
				<ViewTitle text={"the jokez"}/>

			</div>
		);
	}
}

export default JokeList