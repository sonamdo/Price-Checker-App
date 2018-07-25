//Default values for dataReducer
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

//Data(product array) Reducer
export default (state = dataReducerDefaultState, action) => {
    switch (action.type){
      default:
        return state;
    }
};
