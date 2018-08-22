import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedProductList from './ProductList';

const PriceCheckerApp = () => (
      <div>
        <Header title = "Price Checker" subtitle = "Search for bikes and prices"/>
        <div className = "container">
          <Search />
          <ConnectedProductList />
        </div>
      </div>
)

export default PriceCheckerApp
