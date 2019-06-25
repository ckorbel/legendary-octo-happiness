import { combineReducers } from "redux";
import library from "./library";
import selectLibrary from "./selection";
import auth from "./auth";

export default combineReducers({
  library,
  selectLibrary,
  auth
});
