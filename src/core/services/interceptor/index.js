import axios from "axios";
import { getData } from "../../localStorage/localStorage";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {

  console.log(error);

  if (error?.response.status === 401) {
    toast.error("ابتدا وارد حساب کاربری شوید");
    window.location.pathname = "/login";
  }

  if (error?.response.status === 403) {
    toast.error("شما به این بخش دسترسی ندارید");
  }

//   if (err?.response.status >= 400 && err.response.status < 500) {
//     toast.error(err?.response.message);
//     console.log("client error: " + err.response.status);
//   }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getData("authToken") ? getData("authToken") : null;
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
