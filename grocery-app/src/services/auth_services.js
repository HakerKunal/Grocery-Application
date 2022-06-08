import axios from "axios";

export const signupServer = (obj) => {
  let response = axios.post("http://127.0.0.1:8000/users/register", obj);
  return response;
};

export const signinServer = (obj) => {
  let response = axios.post("http://127.0.0.1:8000/users/login", obj);
  return response;
};

export const fetchUserDetail = (header) => {
  let response = axios.get("http://127.0.0.1:8000/users/user", header);
  return response;
};
