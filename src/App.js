import React from 'react';
import './App.css';
import Restaurants from './Restaurants';
const axios = require('axios');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { restaurants: null, greeting: null }
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    axios.post("http://api.perkchops.com/get-mock-data", {
      headers: { 'token': 'interview', 'content-type': 'application/json' }
    }).then((response) => { this.setState({ restaurants: response.data });
    }).catch(err => console.log(err));
  }

  render() {
    if(this.state.restaurants) {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Perkchops: { localStorage.getItem('greeting') ? localStorage.getItem('greeting') : '' }
            </p>
          </header>
          <div className="restaurants-component">
            <Restaurants restaurants={this.state.restaurants}/>
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Perkchops
            </p>
          </header>
          <div className="restaurants-component">
            Unavailable
          </div>
        </div>
      );
    }

  }
}

export default App;
