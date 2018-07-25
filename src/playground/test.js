import {createStore, combineReducers} from 'redux';

store.subscribe(() => {
  const state = store.getState();
  const visibleProducts = getVisibleProducts(state.data, state.filters);
  console.log(state)
  console.log(visibleProducts)
  console.log('store updated')
})

store.dispatch(setTextFilter('dom'))
