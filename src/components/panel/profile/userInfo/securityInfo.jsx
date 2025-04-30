import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import http from "./../../../../core/services/interceptor";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

const SecurityInfo = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["SecurityInfo"],
    queryFn: async () => {
      const res = await http.get(`/SharePanel/GetSecurityInfo`);
      console.log(res);
      return res;
    },
  });

  const { mutate: editSecurity } = useMutation({
    mutationFn: async (values) => {
      const res = await http.put(`/SharePanel/EditSecurity`, values);
      console.log("put", res);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["SecurityInfo"]);
      toast.success("عملبات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  return (
    <div>
      <Formik
        onSubmit={editSecurity}
        initialValues={{
          twoStepAuth: data?.twoStepAuth,
          recoveryEmail: data?.recoveryEmail,
          baseUrl: "http://localhost:5173/panel/profile",
        }}
        enableReinitialize
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <Form className="space-y-5">
            <label className="flex items-center space-x-2 cursor-pointer">
              <Field
                type="checkbox"
                name="twoStepAuth"
                checked={values.twoStepAuth === true}
                className="mr-2 cursor-pointer"
              />
              <span className="font-semibold">تایید دو مرحله ای</span>
            </label>
            <span className="font-semibold">ایمیل بازیابی</span>
            <Field
              name="recoveryEmail"
              className="h-9 w-full mt-2  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              placeholder="ایمیل خود را وارد کنید"
            />
            <button
              type="submit"
              className="bg-navyBlue w-16 h-10 rounded-full text-white hover:opacity-80 font-semibold"
            >
              ثبت
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SecurityInfo;
