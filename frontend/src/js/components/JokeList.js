import React, {Component} from 'react'



const allJokes = {
	jokes: [{
		punchline: 'this is a joke',
		author: 'Anonymous',
		date: 'Earlier'
	}]
}

class JokeList extends Component {

	renderJokelist(){
		// get the jokes from Redux
		// return a set of joke cards
	}

  render() {
    return (
      <div>
        JokeList component
      </div>
    )
  }
}

export default JokeList