import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";

const EnterNumber = ({ nextStep, text ,handleRegister }) => {



  return (
    <div>
      <Fragment>
        <div className="w-md mt-12 space-y-4">
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
      </Fragment>
    </div>
  );
};

export default EnterNumber;
