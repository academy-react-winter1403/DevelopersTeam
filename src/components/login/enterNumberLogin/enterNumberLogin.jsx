import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import AuthPassInput from "../../common/auth-pass-input";
import { GrSecure } from "react-icons/gr";
import { Checkbox } from "antd";
import { Form, Formik } from "formik";

const EnterNumberLogin = ({ nextStep, text }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md   mt-12 space-y-4">
          <Formik initialValues={{name:'d'}}>
            <Form>
                  <AuthInput
            inputLabel={"شماره یا ایمیل"}
            placeholder={"شماره همراه یا ایمیل خود را وارد کنید"}
            nextStep={nextStep}
            text={text}
            name="d"
          />
            </Form>
          </Formik>
      
          <AuthPassInput
            inputLabel={"رمزعبور"}
            placeholder={"رمزعبور خود را وارد کنید"}
          />
          <div className="flex ">
            <div className="flex items-center space-x-2">
              <Checkbox className="text-xs font-semibold" >
                مرا به خاطر بسپار
              </Checkbox>
            </div>
            <div className="relative right-8 xs:right-[156px] flex justify-center items-center space-x-2 w-40 h-9 rounded-full bg-lightBlue text-navyBlue text-xs xs:text-sm">
              <GrSecure className="text-lg" />
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
      </div>
    </div>
  );
};

export default EnterNumberLogin;
