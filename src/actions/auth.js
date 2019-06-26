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

export function registerUser(user) {
  return async dispatch => {
    try {
      const response = await UserFactory.registerNewUser(user);
      return {
        type: REGISTER_SUCCESS,
        response
      };
    } catch (error) {
      return {
        type: REGISTER_FAIL,
        error
      };
    }
  };
}

// export const registerUser = user = async dispatch => {
//   const { firstName, lastname, email, password } = user || {};
//   const body = JSON.stringify({ firstName, lastname, email, password });
//   console.log(body);
//   try {
//     const res = UserFactory.registerNewUser(body);
//     console.log(res);
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };
