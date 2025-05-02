import React, { Fragment, useState } from "react";
import logo from "./../../assets/images/logo.svg";
import logoText from "./../../assets/images/logoText.svg";
import StepsForgetPass from "./stepsForgetPass/stepsForgetPass";
import EnterEmail from "./enterEmail/enterEmail";
import NewPassword from "./newPassword/newPassword";
import { NavLink, Outlet } from "react-router-dom";
import { useDarkMode } from "../../context/theme/themeContext";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

const ForgetPassword = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div dir="rtl" className="md:grid md:grid-cols-5 w-full h-[740px]">
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="header-darkmode absolute   bottom-10  md:right-16 right-5  border-0 lg:border-2 border-gray-200 dark:border-gray-600 w-9 h-9 flex justify-center items-center rounded-full"
      >
        {darkMode ? (
          <GoSun className="size-5 text-white cursor-pointer" />
        ) : (
          <IoMoonOutline className="size-5 cursor-pointer dark:text-gray-300" />
        )}
      </div>
      {/* right section */}
      <NavLink to="/" className="w-fit flex md:hidden p-5 ">
        <img src={logo} alt="logo" className="w-14" />
      </NavLink>
      <div className="col-span-2 bg-lightGray dark:bg-gray-700 pt-24 md:pr-5 lg:pr-16 hidden md:block">
        <NavLink to="/" className="w-fit flex flex-row items-center">
          <img src={logo} alt="logo" className="w-14" />
          <img src={logoText} alt="text" className="w-44 h-8 mt-3" />
        </NavLink>
        <StepsForgetPass step={step} />
      </div>
      {/* left section */}
      <div className=" col-span-3 pt-5 md:pt-24 flex flex-col items-center md:block px-5  lg:pr-28 ">
        <div className="w-xs xs:w-md h-fit">
          {step == 1 && (
            <h1 className="xs:text-2xl lg:text-3xl font-bold">
              فراموشی رمزعبور؟ 🔐
            </h1>
          )}
          {step == 2 && (
            <h1 className="xs:text-2xl lg:text-3xl font-bold">
              رمزعبور جدید 🔓
            </h1>
          )}

          {step == 1 && (
            <p className="text-xs xs:text-sm lg:text-md mt-5 text-gray">
              اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک
              صفحه تغییر رمزعبور برای شما ارسال شود
            </p>
          )}
          {step == 2 && (
            <p className="text-xs xs:text-sm lg:text-md mt-5 text-gray  ">
              رمزعبور جدید خود را وارد کنید
            </p>
          )}
        </div>

        <Outlet />
        {/* inputs section */}
        {/* {step == 1 && <EnterEmail nextStep={nextStep} text={"ارسال لینک"} />} */}
        {/* {step == 2 && (
          <NewPassword nextStep={nextStep} text={"تایید رمزعبور"} />
        )} */}
      </div>
    </div>
  );
};

export default ForgetPassword;
