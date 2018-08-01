import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedProductList from './ProductList';

const PriceCheckerApp = () => (
      <div>
        <Header title = "Price Checker"/>
        <Search />
        <ConnectedProductList />
      </div>
)

export default PriceCheckerApp
