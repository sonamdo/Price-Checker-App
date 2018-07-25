import React from 'react';
import configureStore from '../store/configureStore';

const Search = () => (

        <div>
            <form className ="search">
              <input type = "text" placeholder = "Search by product name"/>
            </form>
        </div>
);

const store = configureStore();
console.log(store.getState());

export default Search;
