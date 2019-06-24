import { combineReducers } from "redux";
import library from "./library";
import selectLibrary from "./selection";

export default combineReducers({
  libraries: library,
  selectedLibraryId: selectLibrary
});
