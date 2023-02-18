export const ProductReducer = (state = { cart: [], ProductName:"T-Shirt" }, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return {
        ...state,
        cart: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
  return state;
};
