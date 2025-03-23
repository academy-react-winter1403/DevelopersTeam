import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";

const EnterEmail = ({ nextStep, text }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block ">
        <div className="w-xs xs:w-md mt-12 space-y-4 ">
<Formik initialValues={{name:'s'}}>
  <Form>
    <AuthInput
            inputLabel={"ایمیل"}
            placeholder={"ایمیل خود را وارد کنید"}
            nextStep={nextStep}
            name="s"
          />

          <AuthButton nextStep={nextStep} text={text} />
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
