import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import http from "./../../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

const ChangePass = () => {
  const queryClient = useQueryClient();

  const handleChangePass = async (values) => {
    const res = await http.post(`/SharePanel/ChangePassword`, values);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: handleChangePass,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("عملبات با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error("دوباره امتحان کنید");
      console.log(error);
    },
  });

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const show = (
    <MdOutlineRemoveRedEye
      onClick={handleShowPass}
      className="absolute top-12 left-3"
    />
  );
  const hide = (
    <IoEyeOffOutline
      onClick={handleShowPass}
      className="absolute top-12 left-3"
    />
  );

  return (
    <div className="w-full px-4 md:px-0 md:w-xl h-96 ">
      <div className="flex flex-col space-y-3">
        <Formik
          onSubmit={mutate}
          initialValues={{ oldPassword: "", newPassword: "" }}
        >
          <Form className=" space-y-4">
            <div className="flex flex-col space-y-3 relative">
              <span className="relative">رمز قبلی</span>
              <Field
                name="oldPassword"
                type={showPass ? "text" : "password"}
                className="w-full h-9 outline-none rounded-xl p-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                placeholder="رمز قبلی خود را وارد کنید"
              />
              {showPass ? hide : show}
            </div>
            <div className="flex flex-col space-y-3 relative">
              <span className="relative"> رمز جدید</span>
              <Field
                name="newPassword"
                type={showPass ? "text" : "password"}
                className="w-full h-9 outline-none rounded-xl p-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                placeholder="رمز جدید خود را وارد کنید"
              />
              {showPass ? hide : show}
            </div>
            <button
              type="submit"
              className="bg-navyBlue w-20 h-10 rounded-full text-white hover:opacity-80"
            >
              ثبت
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePass;
