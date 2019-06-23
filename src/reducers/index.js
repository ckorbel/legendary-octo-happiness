import { combineReducers } from "redux";
import alert from "./alerts";
import library from "./library";

export default combineReducers({
  libraries: library
});
