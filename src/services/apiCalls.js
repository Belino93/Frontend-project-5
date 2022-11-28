import axios from "axios";
const baseUrl = "http://localhost:3005";
// let config = {
//   headers: { Authorization: "Bearer " + localStorageToken }
// }


export const createUser = async (user) => {
  const userCreated = await axios.post(baseUrl + "/auth/register", {
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
  });

  return userCreated;
};

export const loginUser = async (user) => {
  const userLoged = await axios.post(baseUrl + "/auth/login", {
    email: user.email,
    password: user.password,
  });
  return userLoged.data;
};

export const bringMovies = async () => {
  const movies = await axios.get(baseUrl + '/movie/')
  return movies
}

export const bringUser = async (localStorageToken) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken }
  }

  const resp = await axios.get(baseUrl + '/user/get', config)

  return resp
}