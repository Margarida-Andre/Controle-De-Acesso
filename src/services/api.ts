import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

/*api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("@Permission:token");
    if (token) {
      (config.headers ??= {}).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);*/

export default api;
