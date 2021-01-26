import "semantic-ui-css/semantic.min.css";

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from "./js/SeasonDisplay";
import Spinner from "./js/components/Spinner";
// import "semantic-ui-css/semantic.min.css";


// import App from "./App"

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.scss'

// const App = () => {
//   console.log(`calling to get geolocation`,)
//
//   let location = window.navigator.geolocation.getCurrentPosition(
//     position => console.log(`got position: `, position),
//     err => console.log(`error getting position: `, err))
//
//   return <div>Latitude goes here: </div>
// }

const Latcard = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        {/*<img src="/images/avatar2/large/kristy.png" />*/}
      </div>
      <div className="content">
        <a className="header">Season</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          {props.children}
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  )
}


const newZealandLat = 40.9006  // 40.9006° S, 174.8860° E
const seattleLat = 47.6062  // 47.6062° N, 122.3321° W

const handleGeolocationUpdate = pos => {
  console.log(`got geolocation update: `, pos);
  return pos
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      errorMessage: '',
      jokes: null
    }
  }

  componentDidMount() {
    setTimeout(() => {  // this was for spoofing the geolocation - not working for electron
      // this.setState({lat: newZealandLat})
      console.log(`trying to get geolocation latitude `,)
      this.setState({
        jokes: [{
          punchline: 'this is a joke',
          author: 'Anonymous'
        }]
      })
    }, 3000)
    // console.log(`getting geolocation (hopefully)`,)
    // this.updateLocation();
    console.log(`going to get the jokes`,)
  }

  renderJokes = (jokes) => {
    jokes.map(joke => {
      return (
        <div>
          {joke.punchline}
        </div>
      )
    })
  }

  render() {

    {
      if (this.state.jokes) {
        return (
          <div>
            These are be jokes
          </div>
        )
      }
    }

    return <Spinner message={"loading jokes..."}/>
  }
}

ReactDOM
  .render(<App/>, document.querySelector("#root"));
