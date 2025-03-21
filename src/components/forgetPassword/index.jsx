import React, { Fragment, useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import StepsForgetPass from "./stepsForgetPass/stepsForgetPass";
import EnterEmail from "./enterEmail/enterEmail";
import NewPassword from "./newPassword/newPassword";
// import StepsLogin from "./stepsLogin";
// import EnterNumberLogin from "./enterNumberLogin";
// import VerifyCodeLogin from "./verifyCodeLogin";

const ForgetPassword = () => {
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
        <StepsForgetPass step={step} />
      </div>
      {/* left section */}
      <div className="col-span-3 pt-24 pr-28">
        <div className="w-md h-fit">
          {step == 1 && (
            <h1 className="text-3xl font-bold">فراموشی رمزعبور؟ 🔐</h1>
          )}
          {step == 2 && <h1 className="text-3xl font-bold">رمزعبور جدید 🔓</h1>}

          {step == 1 && (
            <p className="text-md mt-5 text-gray ">
              اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک
              صفحه تغییر رمزعبور برای شما ارسال شود
            </p>
          )}
          {step == 2 && (
            <p className="text-md mt-5 text-gray ">
              رمزعبور جدید خود را وارد کنید
            </p>
          )}
        </div>
        {/* inputs section */}
        {step == 1 && <EnterEmail nextStep={nextStep} text={"ارسال لینک"} />}
        {step == 2 && <NewPassword nextStep={nextStep} text={"تایید رمزعبور"} />}
      </div>
    </div>
  );
};

export default ForgetPassword;
