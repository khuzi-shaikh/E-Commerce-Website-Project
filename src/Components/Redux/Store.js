import { createStore, combineReducers } from "redux";
import { ProductReducer} from "./Reducers/ProductReducer";
import {CountReducer} from "./Reducers/CountReducer"
import {CarReducer} from "./Reducers/CraReducer"

export const configStore = () => {
  const extension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const myStore = createStore(combineReducers({ ProductReducer, CountReducer, CarReducer }), extension);
  return myStore;
};
