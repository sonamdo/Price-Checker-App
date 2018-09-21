import {createStore, combineReducers} from 'redux';
import dataReducer from '../reducers/data';
import skiReducer from '../reducers/skis'
import filtersReducer from '../reducers/filters';

//Store creation
//imports reducers from folder directory and combines with combineReducers
export default() => {
  const store = createStore(
    combineReducers({
      data : dataReducer,
      skis : skiReducer,
      filters : filtersReducer
    })
  )
  return store //store is exported as function, which can be called for use
};
