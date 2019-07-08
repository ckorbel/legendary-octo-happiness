import UserFactory from "../api/user";

export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const registerUserSuccess = payload => ({
  payload,
  type: REGISTER_SUCCESS
});

const registerUserFailed = error => ({
  error,
  type: REGISTER_FAIL
});

export const emailChange = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

export function registerUser(user) {
  return async dispatch => {
    try {
      const response = await UserFactory.registerNewUser(user);
      const { data } = response || {};
      dispatch(registerUserSuccess(data));
    } catch (error) {
      dispatch(registerUserFailed(error));
    }
  };
}
