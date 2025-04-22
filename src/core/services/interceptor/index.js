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
  // console.log(error);

  if (error?.message === "Network Error") {
    toast.error("ابتدا وارد حساب کاربری شوید");
  }

  if (error?.response.status === 403) {
    toast.error("شما به این بخش دسترسی ندارید");
  }

  if (error?.response.status === 422) {
    toast.error(error?.response.data.ErrorMessage);
  }

  // if (err?.response.status >= 400 && err.response.status < 500) {
  //   toast.error(err?.response.message);
  //   console.log("client error: " + err.response.status);
  // }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  let token = localStorage.getItem("currentAccount");
  token = JSON.parse(token);
  // console.log(token);
  // const token = getData("authToken") ? getData("authToken") : null;
  opt.headers.Authorization = "Bearer " + token.token;
  return opt;
});

export default instance;
