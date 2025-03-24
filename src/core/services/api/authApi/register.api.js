import { useMutation } from "@tanstack/react-query";
import http from "../../interceptor";
import toast from "react-hot-toast";

export const useMutationCustom = (url, key) => {
  return useMutation({
    mutationFn: (values) => http.post(url, values),
    mutationKey: [key],
    onSuccess: (data) => {
      toast.success("عملیات با موفقیت انجام شد");
    },
    onError: (error) => {
      console.log(error);
      toast.error("لطفا دوباره امتحان کنید");
    },
  });
};
