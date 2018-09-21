import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//provides store to all components in our application
import PriceCheckerApp from './components/PriceCheckerApp';
import configureStore from './store/configureStore';
import {setTextFilter} from './actions/filters';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import getVisibleProducts from './selectors/products';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleProducts = getVisibleProducts(state.data, state.filters)
  console.log(visibleProducts)
})
store.dispatch(setTextFilter(''))

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
console.log(store)
ReactDOM.render(jsx, document.getElementById('app'));
