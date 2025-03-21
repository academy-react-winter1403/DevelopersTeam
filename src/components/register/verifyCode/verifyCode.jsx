import React, { Fragment, useState } from "react";
import AuthButton from "../../common/auth-button";
import { PiClockCountdown } from "react-icons/pi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Input } from "antd";

const VerifyCode = ({ text, nextStep, prevStep }) => {
  const [otp, setOtp] = useState("");
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <div className="w-md mt-10 space-y-">
      <span>کد تایید</span>

      <div dir="ltr" className="w-full ">
        <Input.OTP
          variant="filled"
          {...sharedProps}
          size="large"
          style={{ width: "440px", height: "100px" }}
          className="border w-52 h-20"
        />
      </div>
      <AuthButton text={text} nextStep={nextStep} />
      <div className="mt-4 flex space-x-16">
        <div className="flex items-center space-x-4">
          <div className="flex justify-center items-center space-x-2 w-24 h-9 rounded-full bg-lightBlue">
            <PiClockCountdown className="w-5 h-5 text-navyBlue" />
            <span className=" text-navyBlue font-semibold">02:20</span>
          </div>
          <span className="text-navyBlue underline font-semibold text-sm">
            ارسال مجدد کد
          </span>
        </div>
        <div className="flex justify-center items-center space-x-2 w-44 h-9 rounded-full bg-lightBlue text-navyBlue">
          <button onClick={prevStep} className="text-sm font-semibold">
            تغییر شماره همراه
          </button>
          <IoReturnUpBackOutline className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
