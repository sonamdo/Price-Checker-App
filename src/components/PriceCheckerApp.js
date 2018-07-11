import React from 'react';
import Header from './Header';
import Search from './Search';

export default class PriceChecker extends React.Component {
  render(){
    return(
      <div>
        <Header title = "Price Checker"/>
        <Search />
      </div>
    )
  }
}
