import React from 'react';
import './App.css';
import Product from './Product';


class Restaurants extends React.Component {
  constructor(props){
    super(props);
    localStorage.setItem('greeting', props.restaurants.greeting);
  }

  render() {
    return (
      <div className="restaurants">
        { this.props.restaurants.products.map((product, i) => {
          return <Product key={i} product={product} />
        })}
      </div>
    );
  }
}

export default Restaurants;
