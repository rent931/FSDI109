import React from "react";

const store = React.createContext({
  cart: [],
  user: {},

  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default store;
