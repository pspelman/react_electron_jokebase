import React, {Component} from 'react'

class JokeDisplay extends Component {

	render() {
		const joke = props.joke ? props.joke : 'no joking around... yet'
		const iconStyle = props.lat ? {display: 'block'} : {display: 'none'}

		return (
			<div className={`joke-display ${joke}`}>
				<br/>
				<button className={'btn'}
				        onClick={() => console.log(`you liked the joke`)}
				>
					Like this joke
				</button>
				<br/>
				<div className="content">
					<div className="description">
						A joke description
					</div>
				</div>
			</div>
		)
	}
}

// Todo: add the joke date later
//         <div className="meta">
//           <span className="date">{new Date().toDateString()}</span>
//         </div>

export default JokeDisplay