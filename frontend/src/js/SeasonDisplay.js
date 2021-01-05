import React from 'react'
import Spinner from "./components/Spinner";

const getSeason = (lat, month) => {
  console.log(`getting the season for lat ${lat} in month ${month}`, )
  if (month > 2 && month < 9) {
    // if we're in northern it's summer, otherwise it's in winter
    return lat > 0 ? 'summer' : 'winter';
  } else {  // we're in jan, feb
    return lat > 0 ? 'winter' : 'summer'
  }
}

const seasonConfig = {
  winter: {
    text: 'Brr! it\'s chilly outside',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  }
}

const SeasonDisplay = props => {
  console.log(`the current season: `, getSeason(props.lat, new Date().getMonth()))
  const season = props.lat ? getSeason(props.lat, new Date().getMonth()) : ''

  // const seasonText = season === 'winter' ? 'Brr! it\'s chilly outside ' : 'Let\'s hit the beach!'
  // const icon = season === 'winter' ? 'snowflake' : 'sun'
  const iconStyle = props.lat ? {display: 'block'} : {display: 'none'}

  let seasonIcon = (position) => season ? <i className={`${position} massive ${seasonConfig[season].iconName} icon`} style={iconStyle} /> : ''

  return (
    <div className={`season-display ${season}`}>
      {season ? <i className={`icon-left massive ${seasonConfig[season].iconName} icon`} style={iconStyle} /> : ''}
      <br/>
      <button className={'btn'} onClick={props.updateLocation}>Update Location</button>
      <br/>
      {props.lat ? seasonConfig[season].text : 'SPINNER'}
      <div className="content">
        {/*<a className="header">*/}
        {/*  {props.lat ? seasonConfig[season].text : 'SPINNER'}*/}
        {/*</a>*/}
        <span className="date">{new Date().toDateString()}</span>
        <br/>
        <div className="meta">
          <span className="date">{new Date().toDateString()}</span>
        </div>
        <div className="description">
          Current Latitude: {props.lat ? `Latitude: ${props.lat}` : 'SPINNER'}
          {/*{seasonIcon('icon-right')}*/}
        </div>
      </div>
      {season ? <i className={`icon-right massive ${seasonConfig[season].iconName} icon`} style={iconStyle} /> : ''}
    </div>
  );
}

export default SeasonDisplay