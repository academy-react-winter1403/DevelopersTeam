import React, { useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import Steps from "./steps/steps";
import EnterNumber from "./enterNumber/enterNumber";
import VerifyCode from "./verifyCode/verifyCode";
import UserInfo from "./userInfo/userInfo";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [PhoneNumber, setPhoneNumber] = useState();
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div dir="rtl" className="md:grid md:grid-cols-5 w-full h-[800px] ">
      {/* right section */}
      <NavLink to="/" className="w-fit flex md:hidden p-5 ">
        <img src={logo} alt="logo" className="w-14" />
      </NavLink>
      <div className="col-span-2 bg-lightGray dark:bg-gray-700 pt-24 md:pr-5 lg:pr-16 hidden md:block">
        <NavLink to="/" className="w-fit flex flex-row items-center">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </NavLink>
        <Steps step={step} />
      </div>
      {/* left section */}
      <div className=" col-span-3 pt-5 md:pt-24 flex flex-col items-center md:block px-5  md:pr-12 lg:pr-28 ">
        <div className="md:w-sm lg:w-md h-fit">
          <h1 className="xs:text-2xl lg:text-3xl font-bold">
            به آکادمی بحر خوش اومدی! 😍
          </h1>
          {step == 1 && (
            <p className="text-xs xs:text-sm lg:text-md mt-5 text-gray ">
              لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد
              تایید ارسال شود
            </p>
          )}
          {step == 2 && (
            <div className="space-x-3 mt-5 text-md text-gray">
              <span>لطفا کد ارسال شده به شماره</span>
              <span className="text-navyBlue">0111111111</span>
              <span>را وارد کنید</span>
            </div>
          )}
          {step == 3 && (
            <div className="space-x-3 mt-5 text-md text-gray">
              <span>لطفا اطلاعات شخصی حساب کاربری خود را وارد کنید </span>
            </div>
          )}
        </div>
        {/* inputs section */}
        {step == 1 && <EnterNumber nextStep={nextStep} setPhoneNumber={setPhoneNumber}/>}
        {step == 2 && (<VerifyCode nextStep={nextStep} prevStep={prevStep} text={"تایید"} PhoneNumber={PhoneNumber} />)}
        {step == 3 && <UserInfo text={"ثبت اطلاعات"} PhoneNumber={PhoneNumber} />}
      </div>
    </div>
  );
};

export default Register;
