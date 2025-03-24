import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";

const EnterEmail = ({ nextStep, text }) => {
  const icon = <HiOutlineMail className="absolute top-2.5 right-3 text-xl" />;

  const { mutateAsync } = useMutationCustom("/Sign/ForgetPassword", "ForgetPassword");
  const handleMutation = async (e) => {
    await mutateAsync(e);
    nextStep();
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block ">
        <div className="w-xs xs:w-md mt-12 ">
          <Formik onSubmit={handleMutation} initialValues={{ email:'' }}>
            <Form className=" space-y-4">
              <AuthInput
                inputLabel={"ایمیل"}
                placeholder={"ایمیل خود را وارد کنید"}
                name="email"
                icon={icon}
              />
              <AuthButton text={text} />
            </Form>
          </Formik>
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> رمزعبور خود فراموش نکردید؟</span>
          <NavLink to={"/register"} className="underline">
            ورود به حساب کاربری
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnterEmail;
