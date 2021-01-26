import React, {Component} from 'react'
import ViewTitle from "./shared/ViewTitle";
import Spinner from "./Spinner";
import JokeCard from "./JokeCard";



class JokeList extends Component {

	renderJokelist() {
		// get the jokes from Redux
		// return a set of joke cards
		this.props.jokes.map(joke => {
			return <JokeCard joke={joke}/>
		})
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