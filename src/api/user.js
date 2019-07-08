import { AsyncStorage } from "react-native";
import axios from "axios";
const baseUrl = "http://localhost:5000/api/users";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

async function registerNewUser(user) {
  try {
    const response = await axios.post(`${baseUrl}`, user, config);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function loginUser(user) {
  try {
    const response = await axios.post(`${baseUrl}`, user);
    return response;
  } catch (err) {
    return err;
  }
}

async function retrieveToken() {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      return token;
    } else {
      return "No existing toke";
    }
  } catch (err) {
    console.log(`error retrieving local token ${err}`);
  }
}

async function setToken(token) {
  try {
    await AsyncStorage.setItem("token", JSON.stringify(token));
  } catch (err) {
    console.log(`error in setting token ${err}`);
  }
}

async function removeToken() {
  try {
    await AsyncStorage.setItem("token", null);
  } catch (err) {
    console.log(`error in setting token ${err}`);
  }
}

const UserFactory = {
  registerNewUser,
  loginUser,
  retrieveToken,
  setToken,
  removeToken
};

export default UserFactory;

// class UserFactory {
//   static constructCreateProfileUrl() {
//     return `${baseUrl}`;
//   }

//   static async createUser(user) {
//     try {
//       const response = await axios.post(this.constructCreateProfileUrl(), {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: {
//           name: user.name,
//           email: user.email,
//           password: user.password
//         }
//       });
//       console.log(response);
//       return response;
//     } catch (err) {
//       throw err;
//     }
//   }
// }
