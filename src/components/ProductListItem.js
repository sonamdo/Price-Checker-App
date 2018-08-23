import React from 'react';

const ProductListItem = ({website, model, brand, price}) => (//takes product info from data array and renders into jsx
  <tr className = "product">
    <td>{model}</td>
    <td>{price}</td>
    <td>{brand}</td>
    <td>{website}</td>
  </tr>
)

export default ProductListItem;
