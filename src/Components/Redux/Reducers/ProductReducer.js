const initialState = {
  cart: [],
  product: [],
  category: [],
  loader: false,
  searchData: "hello",
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
      break;
    case "ADD_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };
      break;
    case "ADD_TO_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
      break;
    case "LOADER_ACTIVATE":
      return {
        ...state,
        loader: action.payload,
      };
      break;
    case "LOADER_DE-ACTIVATE":
      return {
        ...state,
        loader: action.payload,
      };
      break;
    case "SEARCH_DATA":
      return {
        ...state,
        searchData: action.payload,
      };
      break;
  }
  return state;
};
