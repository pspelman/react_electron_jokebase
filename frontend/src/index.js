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

const allJokes = [
    {
      id: 1,
      punchline: 'this is a joke',
      author: 'Anonymous',
      date: 'Earlier'
    },
    {
      id: 2,
      punchline: 'this is not a joke - it is a sentence.',
      author: 'Phil',
      date: 'Once ago'
    },
  ]

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
        jokes: [...allJokes]
      })
    }, 3000)
    // console.log(`getting geolocation (hopefully)`,)
    // this.updateLocation();
    console.log(`going to get the jokes`,)
  }

  render() {

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
