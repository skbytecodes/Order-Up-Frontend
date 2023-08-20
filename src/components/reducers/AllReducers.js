import { combineReducers } from "redux"
import authToggleReducer from "./AuthToggleReducer"
import {showAuthPageReducer} from "./ShowAuthPageReducer"

const allReducers = combineReducers({
  authToggle : authToggleReducer,
  showAuthPage : showAuthPageReducer
});
export default allReducers;