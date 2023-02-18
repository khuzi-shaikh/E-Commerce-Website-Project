import { createStore, combineReducers } from "redux";
import { ProductReducer } from "./Reducer/ProductReducer";

export const configStore = () => {
  const extension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const myStore = createStore(combineReducers({ ProductReducer }), extension);

  return myStore;
};
