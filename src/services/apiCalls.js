import axios from "axios";

const baseUrl = "https://backend-project-5-production.up.railway.app";



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
  const movies = await axios.get(baseUrl + "/movie/");
  return movies;
};

export const bringByTitle = async (criteria) => {
  const movies = await axios.post(baseUrl + "/movie/title",{title:criteria});
  return movies;
}

export const getProfile = async (localStorageToken) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken },
  };

  const resp = await axios.get(baseUrl + "/user/get", config);

  return resp;
};

export const getLeaseById = async (localStorageToken) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken },
  };
  try {
    const resp = await axios.get(baseUrl + "/lease/get", config);
    return resp;
  } catch (error) {

  }
  
};

export const updateLease = async (localStorageToken, lease_id) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken },
  };
  const resp = await axios.patch(
    baseUrl + "/lease/update",
    { lease_id: lease_id },
    config
  );
  return resp;
};

export const newLease = async (localStorageToken, movie_id) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken },
  };
  const resp = await axios.post(
    baseUrl + "/lease/new",
    { movie_id: movie_id },
    config
  );
  return resp
};

export const showAllLeases = async (localStorageToken) => {
  let config = {
    headers: { Authorization: "Bearer " + localStorageToken },
  };
  const resp = await axios.get(baseUrl + '/lease/getAll', config)
  return resp;
}