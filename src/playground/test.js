import {createStore, combineReducers} from 'redux';

const dataReducerDefaultState = [
  {
    website : 'Broadway',
    model : 'Cannondale Forray 2',
    brand : '',
    price : 74999
  },
  {
    website : 'Gears',
    model : 'Domane AR3',
    brand : 'Trek',
    price : 14999
  },
  {
    website : 'Gears',
    model : 'Domane Gioni',
    brand : 'Trek',
    price : 15000
  }
]

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const filtersReducerDefaultState = {
  text : '',
  sortBy : ''
}

const dataReducer = (state = dataReducerDefaultState, action) => {
    switch (action.type){
      default:
        return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        text : action.text
      }
    default:
      return state;
  }
}

const getVisibleProducts = (data, {text, sortBy}) => { // filters through state and outputs products that match text
  return data.filter((dat) => {
    const textMatch = dat.model.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};

const store = createStore(
  combineReducers({
    data : dataReducer,
    filters : filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleProducts = getVisibleProducts(state.data, state.filters);
  console.log(state)
  console.log(visibleProducts)
  console.log('store updated')
})

store.dispatch(setTextFilter('dom'))
