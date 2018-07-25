//Applies filter reducer and returns matching products
export default (data, {text, sortBy}) => { // filters through state and outputs products that match text set by setTextFilter Action
  return data.filter((dat) => {
    const textMatch = dat.model.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};
