import axios from "axios";

export const API = axios.create({
  baseURL: "https://tasklogin.herokuapp.com/api/",
});

export const setAuth = async (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
