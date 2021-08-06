import axios from "axios";

const axiosClient = axios.create({
  baseURL: " https://6103e3f33356ea001748f53e.mockapi.io/",
  headers: {
    "Content-Type": "application/json"
  }
});
export default axiosClient;
