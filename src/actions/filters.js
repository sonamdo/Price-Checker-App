// Filters products by text
export const setTextFilter = (text = '') => ({//function takes text value which is passed on as action to reducers/filters.js
  type: 'SET_TEXT_FILTER',
  text
});
