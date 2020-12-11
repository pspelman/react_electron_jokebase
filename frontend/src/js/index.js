import React from 'react'
import ReactDOM from 'react-dom'

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
        {/*<img src="/images/avatar2/large/kristy.png">*/}
        {/*{props}*/}
      </div>
      <div className="content">
        <a className="header">Kristy</a>
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
    }
  }


  render() {
    console.log(`calling to get geolocation`,)
    let location = window.navigator.geolocation.getCurrentPosition(
      position => console.log(`got position: `, position),
      err => console.log(`error getting position: `, err))

    // return <Latcard>Latitude: {this.state.lat}</Latcard>
    return <Latcard>LAT HERE: {this.props.lat}</Latcard>
  }
}

ReactDOM
  .render(<App/>, document.querySelector("#root"));
