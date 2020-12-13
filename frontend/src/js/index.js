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
      errorMessage: '',
    }
    setTimeout(()=> {
      this.setState({lat: 37.774929})
    }, 2000)
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      },
      err => {
        console.log(`error getting position: `, err)
        this.setState({lat: position.coords.latitude})
      }
  )
  }
  
  componentDidMount() {
    console.log(`my component was rendered to the screen`, )
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`my component was just updated - it reRendered`, )

  }

  render() {
    console.log(`calling to get geolocation`,)
    // return <Latcard>Latitude: {this.state.lat}</Latcard>
    return (
      <Latcard>
        {this.state.lat ? `Latitude: ${this.state.lat}` : 'SPINNER'}
        <br/>
        {this.state.errorMessage ? `Error: ${this.state.errorMessage}` : ""}
        </Latcard>
    )
  }
}

ReactDOM
  .render(<App/>, document.querySelector("#root"));
