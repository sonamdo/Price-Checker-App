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
  },
  {
    website: "Bikezone",
    model: "2018 Bombtrack Beyond+ 2",
    brand: "",
    price: 3249.99
  },
  {
    website:"Bikezone",
    model:"2018 Bombtrack Hook 2",
    brand:"",
    price:2549.99
  },
  {
    website:"Corbbets",
    model:"2019 Armada ARV 96 Skis",
    brand:"ARMADA",
    price:579.99},
  {
    website:"Corbbets",
    model:"2019 Atomic Vantage 90 CTi Skis",
    brand:"ATOMIC","price":699.99
  },
  {
    website:"Corbbets",
    model:"2019 Armada ARW 84 Womens Skis",
    brand:"ARMADA",
    price:349.99
  },
  {
    website:"Corbbets",
    model:"2019 Atomic Vantage X 80 CTI Womens Skis w/ FT 11 GW Bindings",
    brand:"ATOMIC",
    price:799.99
  },
  {
    website:"Corbbets",
    model:"2019 Atomic Redster G9 Skis w/ X 14 TL RS Bindings",
    brand:"ATOMIC",
    price:1099
  }
]

//Data(product array) Reducer
export default (state = dataReducerDefaultState, action) => {
    switch (action.type){
      default:
        return state;
    }
};
