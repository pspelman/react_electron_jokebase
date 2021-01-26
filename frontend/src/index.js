import "semantic-ui-css/semantic.min.css";

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import JokeDisplay from "./js/JokeDisplay";
import Spinner from "./js/components/Spinner";
import JokeList from "./js/components/JokeList";
// import "semantic-ui-css/semantic.min.css";



const newZealandLat = 40.9006  // 40.9006° S, 174.8860° E
const seattleLat = 47.6062  // 47.6062° N, 122.3321° W

const handleGeolocationUpdate = pos => {
  console.log(`got geolocation update: `, pos);
  return pos
}


class App extends Component {
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

  render() {
    const renderJokes = (jokes) => {
      jokes.map(joke => {
        return (
          <div>
            {joke.punchline}
          </div>
        )
      })
    }

    {
      if (this.state.jokes) {
        return <JokeList jokes={this.state.jokes} />
      }
    }

    return <Spinner message={"loading jokes..."}/>
  }
}

ReactDOM
  .render(<App/>, document.querySelector("#root"));
