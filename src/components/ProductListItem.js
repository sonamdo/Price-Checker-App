import React from 'react';

const ProductListItem = ({website, model, brand, price}) => (//takes product info from data array and renders into jsx
  <div>
    <h2>{model}</h2>
    <p>{price}</p>
  </div>
)

export default ProductListItem;
