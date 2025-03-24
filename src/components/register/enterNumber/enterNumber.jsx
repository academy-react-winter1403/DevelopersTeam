import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";

const EnterNumber = ({ nextStep, text, handleRegister }) => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md   mt-12 space-y-4">
          <AuthInput
            inputLabel={"شماره همراه"}
            placeholder={"شماره همراه خود را وارد کنید"}
            nextStep={nextStep}
            text={text}
            handleRegister={handleRegister}
          />
          <AuthButton nextStep={nextStep} text={text} />
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
