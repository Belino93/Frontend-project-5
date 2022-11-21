import axios from "axios";
const baseUrl = "http://localhost:3005";

export const createUser = async (user) => {
  try {
    let res = await axios.post(baseUrl + "/auth/register", {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
    return;
  }
};
