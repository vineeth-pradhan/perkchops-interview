import React from 'react';
import './App.css';


class Restaurants extends React.Component {
  constructor(props){
    super(props);
    console.log("props.restaurants")
    console.log(props.restaurants)
  }

  render() {
    return (
      <div className="restaurants">
      </div>
    );
  }
}

export default Restaurants;
