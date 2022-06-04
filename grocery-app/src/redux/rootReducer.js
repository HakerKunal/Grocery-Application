import { combineReducers } from "redux";
import shopReducer from "./Shopping/shoppings-reducer";
const rootReducer = combineReducers({
  shop: shopReducer,
});
export default rootReducer;
