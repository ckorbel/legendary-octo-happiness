import { EMAIL_CHANGE, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/auth";
import UserFactory from "../api/user";

const initialState = {
  loading: null,
  errors: {},
  user: null,
  isAuthenticated: null,
  token: UserFactory.retrieveToken()
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      UserFactory.setToken(payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      UserFactory.removeToken();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
};
