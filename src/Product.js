import React from 'react';
import './App.css';

class Product extends React.Component {
  constructor(props){
    super(props);
    console.log(props.product)
  }

  render() {
    return(
      <div id='product' className='row mt-5'>
        <div id='product-image' className='col-lg-3'>
          {this.props.product.image ? <img src={this.props.product.image} width='200px'/> : <img src='food-cartoon.jpg' width='200px' />}
        </div>
        <div id='product-details' className='col-lg-9'>
          <div className='col-lg-12 row mt-2'>
            <div className='col-sm-6 text-left text-primary font-weight-bold'>
              {this.props.product.name} - ${this.props.product.price}
            </div>
          </div>
          <div className='col-lg-12 text-left row mt-2'>
            <div className='col-lg-12 text-justify'>
              {this.props.product.description}
            </div>
          </div>
          <div className='col-lg-12 text-left row mt-3'>
            <div className='col-md-auto text-muted'>
              {this.props.product.restaurant.name}
            </div>
            <div className='col-md-auto text-muted'> | </div>
            <div className='col-md-auto text-left text-success'>
              {this.props.product.restaurant.openStatus}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
