import React from 'react';
import Header from './Header';
import Search from './Search';
import ConnectedSkiList from './SkiList';

const SkiPage = () => (
      <div>
        <div className = "container">
          <Search />
          <ConnectedSkiList />
        </div>
      </div>
)

export default SkiPage
