import UserFactory from "../api/user";

export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const emailChange = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

export const registerUser = ({ email, password }) = async dispatch => {
  const body = JSON.stringify({email, password});
  try {
    const res = UserFactory.registerNewUser(body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    })
  }
}
