import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import getVisibleProducts from '../selectors/products';

const ProductList = (props) => (
  <div>
    <h2>Products</h2>
    {props.products.map((product) => {
      return <ProductListItem key = {product.model} {...product} />
    })}
  </div>
)

const ConnectedProductList = connect((state) => {//connects component to store, uses function to determine what info it needs to access
  console.log(state)
  return {
    products : getVisibleProducts(state.data, state.filters)
  }
})(ProductList);

export default ConnectedProductList;
