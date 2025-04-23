import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import AuthPassInput from "../../common/auth-pass-input";
import { GrSecure } from "react-icons/gr";
import { Checkbox } from "antd";
import { Form, Formik } from "formik";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import { getData, setData } from "../../../core/localStorage/localStorage";

const EnterNumberLogin = ({ nextStep, text }) => {
  const icon = (
    <HiOutlineDevicePhoneMobile className="absolute top-2.5 right-3 text-xl" />
  );

  const { mutateAsync } = useMutationCustom(
    "/Sign/Login",
    "Login",
    "عملیات با موفقیت انجام شد"
  );
  // const handleMutation = async (values) => {
  //   try {
  //     const response = await mutateAsync(values);
  //     // console.log('Login response:', response);
  //     if (response) {
  //       setData("authToken", response.token);
  //       setData("userData", response.user);
  //       nextStep();
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.log("Login error:", error);
  //   }
  // };

  const handleMutation = async (values) => {
    const response = await mutateAsync(values);
    if (response) {
      const existingAccounts = getData("accounts") || [];
      const accountExists = existingAccounts.some(account => account.id === response.id);
      if (!accountExists) {
        const newAccount = {
          id: response.id,
          token: response.token,
          phoneOrGmail: values.phoneOrGmail,
        };
        const updatedAccounts = [...existingAccounts, newAccount];
        setData("accounts", updatedAccounts);
      }
      setData("authToken", response.token);
      setData("currentAccount", {
        id: response.id,
        token: response.token,
        phoneOrGmail: values.phoneOrGmail,
      });
      navigate("/");
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md   mt-12 space-y-4">
          <Formik
            onSubmit={handleMutation}
            initialValues={{ phoneOrGmail: "", password: "", rememberMe: true }}
          >
            <Form className="space-y-4">
              <AuthInput
                inputLabel={"شماره یا ایمیل"}
                placeholder={"شماره همراه یا ایمیل خود را وارد کنید"}
                text={text}
                name="phoneOrGmail"
                icon={icon}
              />
              <AuthPassInput
                inputLabel={"رمزعبور"}
                placeholder={"رمزعبور خود را وارد کنید"}
                name="password"
              />
              <AuthButton text={text} />
            </Form>
          </Formik>

          <div className="flex ">
            <div className="flex items-center space-x-2  ">
              <Checkbox className="text-xs  font-semibold">
                <span className="dark:text-white"> مرا به خاطر بسپار</span>
              </Checkbox>
            </div>
            <div className="relative right-8 xs:right-[156px] flex justify-center items-center space-x-2 w-40 h-9 rounded-full bg-lightBlue text-navyBlue text-xs xs:text-sm">
              <GrSecure className="text-lg" />
              <NavLink to={"/forgetpass"}>فراموشی رمزعبور</NavLink>
            </div>
          </div>
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> حساب کاربری ندارید؟</span>
          <NavLink to={"/register"} className="underline">
            ایجاد حساب کاربری
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnterNumberLogin;
