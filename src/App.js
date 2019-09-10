import React from 'react';
import './App.css';
import Restaurants from './Restaurants.js';
const axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { restaurants: null }
    this.fetchRestaurants.bind(this);
  }

  fetchRestaurants() {
    axios.post("http://api.perkchops.com/get-mock-data", {
      headers: { 'token': 'interview', 'content-type': 'application/json' }
    }).then((response) => { this.setState({ restaurants: response.data });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Perkchops
          </p>
        </header>
        <div className="restaurants-component">
          <Restaurants restaurants={this.state.restaurants}/>
        </div>
      </div>
    );
  }
}

export default App;
