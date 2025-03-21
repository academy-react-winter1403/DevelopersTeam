import React, { Fragment, useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import StepsLogin from "./stepsLogin/stepsLogin";
import EnterNumberLogin from "./enterNumberLogin/enterNumberLogin";
import VerifyCodeLogin from "./verifyCodeLogin/verifyCodeLogin";

const Login = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div dir="rtl" className="grid grid-cols-5 w-full h-[800px] ">
      {/* right section */}
      <div className="col-span-2 bg-lightGray pt-24 pr-16">
        <div className="w-fit flex flex-row items-center">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </div>
        <StepsLogin step={step} />
      </div>
      {/* left section */}
      <div className="col-span-3 pt-24 pr-28">
        <div className="w-md h-fit">
          <h1 className="text-3xl font-bold">خوش برگشتی! 👋</h1>
          {step == 1 && (
            <p className="text-md mt-5 text-gray ">
              لطفا برای ورود به پنل خود ایمیل یا شماره همراه و رمزعبور خود را
              وارد کنید
            </p>
          )}
          {step == 2 && (
            <div className="space-x-3 mt-5 text-md text-gray">
              <span>لطفا کد ارسال شده به شماره</span>
              <span className="text-navyBlue">0111111111</span>
              <span>را وارد کنید</span>
            </div>
          )}
        </div>
        {/* inputs section */}
        {step == 1 && (
          <EnterNumberLogin nextStep={nextStep} text={"ورود به حساب کاربری"} />
        )}
        {step == 2 && (
          <VerifyCodeLogin
            nextStep={nextStep}
            prevStep={prevStep}
            text={"تایید"}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
