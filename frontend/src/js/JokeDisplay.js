import React from 'react'

const JokeDisplay = props => {
  const joke = props.joke ? props.joke : 'no joking around... yet'
  const iconStyle = props.lat ? {display: 'block'} : {display: 'none'}

  return (
    <div className={`joke-display ${joke}`}>
      <br/>
      <button className={'btn'}
              onClick={props.updateLocation}>
        Update Location
      </button>
      <br/>
      {props.lat ? jokeConfig[joke].text : 'SPINNER'}
      <div className="content">
        <span className="date">{new Date().toDateString()}</span>
        <br/>
        <div className="description">
          Current Latitude: {props.lat ? `Latitude: ${props.lat}` : 'SPINNER'}
        </div>
      </div>
      {joke ? <i className={`icon-right massive ${jokeConfig[joke].iconName} icon`} style={iconStyle} /> : ''}
    </div>
  );
}

// Todo: add the joke date later
//         <div className="meta">
//           <span className="date">{new Date().toDateString()}</span>
//         </div>

export default JokeDisplay