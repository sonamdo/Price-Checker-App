import React from 'react';
import ReactDOM from 'react-dom';
import PriceCheckerApp from './components/PriceCheckerApp';
import configureStore from './store/configureStore';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import getVisibleProducts from './selectors/products'

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleProducts = getVisibleProducts(state.data, state.filters)
  console.log(visibleProducts)
})
store.dispatch(setTextFilter('Domane'))

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

ReactDOM.render(<PriceCheckerApp />, document.getElementById('app'));
