//filter default value
const filtersReducerDefaultState = {
  text : '',
  sortBy : '' //sortBy currently not in use
}
//filtersReducer
export default (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,//returns all values of current filter object via spread operator + new text value from setTextFilter action
        text : action.text
      }
    default:
      return state;
  }
}
