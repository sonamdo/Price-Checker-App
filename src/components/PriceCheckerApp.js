import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedProductList from './ProductList';

const PriceCheckerApp = () => (
      <div>
        <div className = "container">
          <Search />
          <ConnectedProductList />
        </div>
      </div>
)

export default PriceCheckerApp
