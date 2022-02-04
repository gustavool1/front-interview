import axios from "axios";

const api = axios.create({
  baseURL: "https://flaskproducts-interview-api.herokuapp.com/stocks/",
});

export default api;