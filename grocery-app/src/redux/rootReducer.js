import { combineReducers } from "redux";
import shopReducer from "./Shopping/shoppings-reducer";
import userReducer from "./User/user-reducer";
const rootReducer = combineReducers({
  shop: shopReducer,
  user: userReducer,
});
export default rootReducer;
