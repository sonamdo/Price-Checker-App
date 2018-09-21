import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import getVisibleProducts from '../selectors/products';

const ProductList = (props) => (
  <div className = "productList">
    <h2>Skis</h2>
    <table>
      <tr>
        <th>Model</th>
        <th>Price</th>
        <th>Brand</th>
        <th>Website</th>
      </tr>
    {props.products.map((product) => {
      return <ProductListItem key = {product.model} {...product} />
    })}
    </table>
  </div>
)

const ConnectedProductList = connect((state) => {//connects component to store, uses function to determine what info it needs to access
  console.log(state)
  return {
    products : getVisibleProducts(state.skis, state.filters)
  }
})(ProductList);

export default ConnectedProductList;
