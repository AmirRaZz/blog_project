import axios from "axios";

console.log(process.env.BASE_API_URL);
const app = axios.create({
  baseURL: "https://next-app-back-end.herokuapp.com/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
