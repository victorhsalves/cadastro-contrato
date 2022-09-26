import axios from "axios";

console.log(process.env.REACT_APP_API_HOST)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST as string,
});

export default api;
