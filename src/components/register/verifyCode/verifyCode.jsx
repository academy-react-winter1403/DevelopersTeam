import React, { Fragment, useState } from "react";
import AuthButton from "../../common/auth-button";
import { PiClockCountdown } from "react-icons/pi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Input } from "antd";
import { Field, Form, Formik } from "formik";
import AuthInput from "../../common/auth-inputs";
import OTPInput from "react-otp-input";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import CountdownTimer from "../countDownTimer/countDownTimer";
import toast from "react-hot-toast";

const VerifyCode = ({ text, nextStep, prevStep , PhoneNumber }) => {
  // const [otp, setOtp] = useState("");

  const { mutateAsync } = useMutationCustom(
    "/Sign/VerifyMessage",
    "VerifyMessage",
    "عملیات با موفقیت انجام شد"
  );

  const handleMutation = async (values) => {
    console.log(values);
    await mutateAsync({phoneNumber :PhoneNumber , verifyCode: values.verifyCode });
    nextStep();
    // console.log("registerCodeMessage", values.verifyCode);
  };

  // const handleTimerExpire = () => {
  //   toast.error("لطفا دوباره امتحان کنید");
  // };
  return (
    <div className="w-xs xs:w-sm sm:w-md mt-10 ">
      <span>کد تایید</span>

      <div dir="ltr" className="w-full mt-5">
        <Formik onSubmit={handleMutation} initialValues={{ verifyCode: "" }}>
          {({ setFieldValue, values }) => (
            <Form className="space-y-5">
              <OTPInput
              name='verifyCode'
                value={values.verifyCode}
                onChange={(otp) => setFieldValue("verifyCode", otp)}
                numInputs={5}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                containerStyle={{
                  height: "56px",
                  display: "flex",
                  gap: "15px",
                }}
                inputStyle={{
                  width: "65px",
                  height: "67px",
                  backgroundColor: "#f4f4f4",
                  borderRadius: "14px",
                  minWidth: "40px",
                  minHeight: "42px",
                }}
              />
              <AuthButton text={text} />
            </Form>
          )}
        </Formik>
      </div>
      {/* <CountdownTimer initialTime={120} onExpire={handleTimerExpire} /> */}
      <div className=" mt-4 flex justify-around space-x-18">
        <div className="flex items-center space-x-4">
          <div className="sm:flex justify-center items-center space-x-2 w-24 h-9 rounded-full bg-lightBlue hidden">
            <PiClockCountdown className="w-5 h-5 text-navyBlue" />
            <span className=" text-navyBlue font-semibold">02:20</span>
          </div>
          <span className="text-navyBlue underline font-semibold text-sm whitespace-nowrap">
            ارسال مجدد کد
          </span>
        </div>
        <div className="flex justify-center items-center w-auto p-2 sm:w-44 h-9  space-x-2 rounded-full bg-lightBlue text-navyBlue">
          <button
            onClick={prevStep}
            className="text-xs sm:text-sm whitespace-nowrap font-semibold"
          >
            تغییر شماره همراه
          </button>
          <IoReturnUpBackOutline className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
