import React from 'react'

const Button = (props) => {

	return (
		<React.Fragment>
			<div className={'ui secondary button big-button'}
			     onClick={() => {console.log('yeah gurl!')}}
			>
				{props.text}
			</div>
		</React.Fragment>
	)
}

// Note: aspects of a button
//    event listener so it can do something
//    color, size  ( style )
//    TEXT ON THE FUCKING BUTTON

export default BigButton