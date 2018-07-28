import React from 'react';
import configureStore from '../store/configureStore';

const Search = () => (
        <div>
            <form className ="search">
              <input type = "text" placeholder = "Search by product name"/>
            </form>
        </div>
);

export default Search;
