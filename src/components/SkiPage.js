import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedSkiList from './SkiList';

const SkiPage = () => (
      <div>
        <div className = "container">
          <h1>Testing Router</h1>
          <Search />
          <ConnectedSkiList />
        </div>
      </div>
)

export default SkiPage
