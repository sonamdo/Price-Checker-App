import React from 'react';

const ProductListItem = ({website, model, brand, price, link}) => (//takes product info from data array and renders into jsx
  <tr className = "product">
    <td>
      <a href = {link}>
        {model}
      </a>
    </td>
    <td>${price}</td>
    <td>{brand}</td>
    <td>{website}</td>
  </tr>
)

export default ProductListItem;
