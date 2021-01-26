import React, {Component} from 'react'
import ViewTitle from "./shared/ViewTitle";
import Spinner from "./Spinner";
import JokeCard from "./JokeCard";



class JokeList extends Component {

	renderJokeList() {
		// get the jokes from Redux
		// return a set of joke cards
		return this.props.jokes.map(joke => {
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
				{this.props.jokes && this.renderJokeList()}
			</div>
		);
	}
}

export default JokeList