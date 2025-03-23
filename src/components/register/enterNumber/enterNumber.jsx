import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import http from "../../../core/services/interceptor";
import toast from "react-hot-toast";

const EnterNumber = ({ nextStep, text, handleRegister }) => {
  const handleMutation = async (e) => {
    await mutateAsync(e);
    nextStep();
  };

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: (values) => http.post("/Sign/SendVerifyMessage", values),
    mutationKey: ["registerCode"],
    onSuccess: (data) => {
      toast.success("successful");
    },
    onError: (error) => {
      console.log(error);
      toast.error("error");
    },
    isSuccess: (data) => {
      toast.success("csv");
    },
  });

  return (
    <div>
      <div className=" flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md   mt-12 space-y-4">
          <Formik onSubmit={handleMutation} initialValues={{ phoneNumber: "" }}>
            <Form className="flex flex-col space-y-3">
              <AuthInput
                inputLabel={"شماره همراه"}
                placeholder={"شماره همراه خود را وارد کنید"}
                name="phoneNumber"
                text={text}
                handleRegister={handleRegister}
              />
              <AuthButton text={"ارسال کد تایید"} />
            </Form>
          </Formik>
        </div>
        <div className="w-md mt-3 text-sm flex justify-center space-x-2">
          <span> حساب کاربری دارید؟ </span>
          <NavLink to={"/login"} className="underline">
            ورود به حساب کاربری
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnterNumber;
