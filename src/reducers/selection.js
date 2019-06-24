import { SELECT_LIBRARY } from "../actions/selection";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_LIBRARY:
      return payload;
    default:
      return state;
  }
}
