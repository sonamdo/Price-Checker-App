import React from 'react';

const ProductListItem = ({website, model, brand, price}) => (//takes product info from data array and renders into jsx
  <ul className = "product">
    <li>{model}</li>
    <li>{price}</li>
    <li>{brand}</li>
    <li>{website}</li>
  </ul>
)

export default ProductListItem;
