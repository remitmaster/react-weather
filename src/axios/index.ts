import axios from "axios";

const api = axios.create({
  baseURL: "api.openweathermap.org/data/2.5"
});

api.interceptors.request.use((config) => {
  config.url =
    config.url + "&units=metric" + "&appid=77218dcba75424c5df34065fd2418923";
  return config;
});

export default api;
