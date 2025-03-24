import React from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const EnterNumber = ({ nextStep, text , setPhoneNumber }) => {
  const { mutateAsync } = useMutationCustom(
    "/Sign/SendVerifyMessage",
    "SendVerifyMessage",
    "عملیات با موفقیت انجام شد"
  );
  const handleMutation = async (values) => {
    setPhoneNumber(values.phoneNumber)
    await mutateAsync(values);
    nextStep();
  };

  const icon = (
    <HiOutlineDevicePhoneMobile className="absolute top-2.5 right-3 text-xl" />
  );

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
                icon={icon}
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
