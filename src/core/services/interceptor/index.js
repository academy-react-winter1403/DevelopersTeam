import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
