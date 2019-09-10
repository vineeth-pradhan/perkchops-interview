import React from 'react';
import './App.css';
import Product from './Product';


class Restaurants extends React.Component {
  constructor(props){
    super(props);
    localStorage.setItem('greeting', props.restaurants.greeting);
  }

  compare(a, b){
    if(a.restaurant.openStatus > 'closed')  return -1; 
    return 0;
  }

  render() {
    return (
      <div className="restaurants container">
        { this.props.restaurants.products.sort(this.compare).map((product, i) => {
          return <Product key={i} product={product} />
        })}
      </div>
    );
  }
}

export default Restaurants;
