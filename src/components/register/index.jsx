import React, { Fragment, useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import Steps from "./steps";
import EnterNumber from "./enterNumber";
import VerifyCode from "./verifyCode";
import UserInfo from "./userInfo";

const Register = () => {
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
        <Steps />
      </div>
      {/* left section */}
      <div className="col-span-3 pt-24 pr-28">
        <div className="w-md h-fit">
          <h1 className="text-3xl font-bold">به آکادمی بحر خوش اومدی! 😍</h1>
          {step == 1 && (
            <p className="text-md mt-5 text-gray ">
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
        {step == 1 && <EnterNumber nextStep={nextStep} text={"ارسال کد تایید"} />}
        {step == 2 && <VerifyCode nextStep={nextStep} prevStep={prevStep} text={"تایید"} />}
        {step == 3 && <UserInfo text={"ثبت اطلاعات"} />}
      </div>
    </div>
  );
};

export default Register;
