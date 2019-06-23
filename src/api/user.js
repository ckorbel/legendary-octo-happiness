import axios from "axios";
const baseUrl = "http://localhost:5000/api/users";

async function registerNewUser(user) {
  try {
    const response = await axios.post(`${baseUrl}`, user);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
const UserFactory = {
  registerNewUser
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
