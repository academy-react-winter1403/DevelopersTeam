import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import AuthPassInput from "../../common/auth-pass-input";
import { GrSecure } from "react-icons/gr";

const EnterNumberLogin = ({ nextStep, text }) => {
  return (
    <div>
      <Fragment>
        <div className="w-md mt-12 space-y-4">
          <AuthInput
            inputLabel={"شماره یا ایمیل"}
            placeholder={"شماره همراه یا ایمیل خود را وارد کنید"}
            nextStep={nextStep}
            text={text}
          />
          <AuthPassInput
            inputLabel={"رمزعبور"}
            placeholder={"رمزعبور خود را وارد کنید"}
          />
          <div className="flex">
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-lightGray rounded-lg"></div>
                <span className="text-sm">مرا به خاطر بسپار</span>
            </div>
            <div className="relative right-[156px] flex justify-center items-center space-x-2 w-40 h-9 rounded-full bg-lightBlue text-navyBlue text-sm">
                    <GrSecure className="text-lg"/>
                    <NavLink to={"/forgetpass"}>فراموشی رمزعبور</NavLink>
            </div>
          </div>
          <AuthButton nextStep={nextStep} text={text} />
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> حساب کاربری ندارید؟</span>
          <NavLink to={"/register"} className="underline">
            ایجاد حساب کاربری
          </NavLink>
        </div>
      </Fragment>
    </div>
  );
};

export default EnterNumberLogin;
