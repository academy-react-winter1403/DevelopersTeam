import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  return Promise.reject(err);
};

http.interceptors.response.use(onSuccess, onError);

export default http;
