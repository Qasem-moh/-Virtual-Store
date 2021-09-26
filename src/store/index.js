import { createStore, combineReducers } from "redux";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import cartReducer from "./cart";

let reducers = combineReducers({
  productsReducer,
  categoriesReducer,
  cartReducer
})

const store = () => {
  return createStore(reducers)
}

export default store();