import React from "react";

const JokeCard = (props) => {
	const {punchline, author, date, id} = props.joke
	return (
		<div className="ui card"
		     key={id}
		>
			<div className="image">
				joke image goes here
			</div>
			<div className="content">
				<a className="header">
					{author}
				</a>
				<div className="meta">
					<span className="date">
						Written: {date}
					</span>
				</div>
				<div className="description">
					{punchline}
				</div>
			</div>
			<div className="extra content">
				<a>
					<i className="user icon"></i>
					22 Joke Lovers
				</a>
			</div>
		</div>
	)
}

export default JokeCard