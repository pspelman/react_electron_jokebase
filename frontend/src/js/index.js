import "semantic-ui-css/semantic.min.css";

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay";
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

const Latcard = (props) =>  {
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      errorMessage: '',
    }
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({lat: newZealandLat})
    }, 3000)
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errorMessage: err},));
  }


  render() {
    console.log(`calling to get geolocation`,)
    // return <Latcard>Latitude: {this.state.lat}</Latcard>
    return (
      <SeasonDisplay lat={this.state.lat} />
      // <Latcard>
      //   {this.state.lat ? `Latitude: ${this.state.lat}` : 'SPINNER'}
      //   <br/>
      //   {this.state.errorMessage ? `Error: ${this.state.errorMessage}` : ""}
      //   </Latcard>
    )
  }
}

ReactDOM
  .render(<App/>, document.querySelector("#root"));
