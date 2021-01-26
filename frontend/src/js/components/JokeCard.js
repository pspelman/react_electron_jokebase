import React from "react";

const JokeCard = (props) => {

	return (
		<div className="ui card">
			<div className="image">
				card image goes here
			</div>
			<div className="content">
				<a className="header">Season</a>
				<div className="meta">
					<span className="date">
						Joke date-a goes here
					</span>
				</div>
				<div className="description">
					{props.children}
				</div>
			</div>
			<div className="extra content">
				<a>
					<i className="user icon"></i>
					22 Joke Friends
				</a>
			</div>
		</div>
	)
}

export default JokeCard