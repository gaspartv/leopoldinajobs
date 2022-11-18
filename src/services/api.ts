import axios from "axios";

export const api = axios.create({
  baseURL: "https://leopoldinajobs.herokuapp.com",
  timeout: 5000,
});
