import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";

const EnterEmail = ({ nextStep, text }) => {
  return (
    <div>
      <Fragment>
        <div className="w-md mt-12 space-y-4">
          <AuthInput
            inputLabel={"ایمیل"}
            placeholder={"ایمیل خود را وارد کنید"}
            nextStep={nextStep}
            text={text}
          />

          <AuthButton nextStep={nextStep} text={text} />
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> رمزعبور خود فراموش نکردید؟</span>
          <NavLink to={"/register"} className="underline">
            ورود به حساب کاربری
          </NavLink>
        </div>
      </Fragment>
    </div>
  );
};

export default EnterEmail;
