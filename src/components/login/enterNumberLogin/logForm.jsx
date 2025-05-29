import React from "react";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import AuthPassInput from "../../common/auth-pass-input";
import { Form, Formik } from "formik";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import ReCAPTCHA from "react-google-recaptcha";

const LogForm = ({ mutateAsync, isPending, dispatch,setCaptchaToken }) => {
  const icon = (
    <HiOutlineDevicePhoneMobile className="absolute top-2.5 right-3 text-xl" />
  );
  return (
    <Formik
      onSubmit={(values) => {
        return mutateAsync(values);
      }}
      initialValues={{
        phoneOrGmail: "",
        password: "",
        rememberMe: true,
      }}
    >
      {({ values, handleChange }) => (
        <Form className="space-y-4">
          <AuthInput
            inputLabel={"شماره یا ایمیل"}
            placeholder={"شماره همراه یا ایمیل خود را وارد کنید"}
            name="phoneOrGmail"
            icon={icon}
            onChange={(e) => {
              handleChange(e);
              dispatch(
                handleLogin({
                  phoneOrGmail: e.target.value,
                  password: values.password,
                  rememberMe: values.rememberMe,
                })
              );
            }}
          />
          <AuthPassInput
            inputLabel={"رمزعبور"}
            placeholder={"رمزعبور خود را وارد کنید"}
            name="password"
            onChange={(e) => {
              handleChange(e);
              dispatch(
                handleLogin({
                  phoneOrGmail: values.phoneOrGmail,
                  password: e.target.value,
                  rememberMe: values.rememberMe,
                })
              );
            }}
          />
          <div className="flex justify-center w-full my-4">
            <ReCAPTCHA
              sitekey="6LdkY04rAAAAANR7vTpZDdpYrzPscqgNNGlEhvv1"
              onChange={setCaptchaToken}
              className="recaptcha"
            />
          </div>
          <AuthButton
            LogFirstStep={true}
            isPending={isPending}
            text={"ادامه"}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LogForm;
