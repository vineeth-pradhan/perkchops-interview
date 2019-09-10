import React from 'react';
import './App.css';

class Product extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id='product'>
        {this.props.product.name}
      </div>
    )
  }
}

export default Product;
