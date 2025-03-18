import React from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import Steps from "./steps";

const Register = () => {
  return (
    <div dir="rtl" className="grid grid-cols-5 w-full h-[800px] ">
      {/* right section */}
      <div className="col-span-2 bg-lightGrey pt-24 pr-16">
        <div className="w-fit flex flex-row items-center">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </div>
        <Steps />
      </div>
      {/* left section */}
      <div className="col-span-3 border  pt-24 pr-28">
        <div className="border w-96 h-fit">
          <h1 className="text-3xl font-bold">به آکادمی بحر خوش اومدی! </h1>
          <p className="text-lg">
            لطفا برای ثبت نام شماره همراه خود را وارد کنید تا برای شما کد تایید
            ارسال شود{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
