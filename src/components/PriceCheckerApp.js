import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedProductList from './ProductList';

const PriceCheckerApp = () => (
      <div>
        <Header title = "Bike Price Checker" subtitle = "Check stores in the GTA for Bike Prices"/>
        <div className = "container">
          <Search />
          <ConnectedProductList />
        </div>
      </div>
)

export default PriceCheckerApp
