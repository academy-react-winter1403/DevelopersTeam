import React, { Fragment, useState } from "react";
import AuthButton from "../../common/auth-button";
import { PiClockCountdown } from "react-icons/pi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Input } from "antd";
import { Field, Form, Formik } from "formik";

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

  // const { mutateAsync, isSuccess } = useMutation({
  //   mutationFn: (values) => http.post("/Sign/VerifyMessage", values),
  //   mutationKey: ["message"],
  //   onSuccess: (data) => {
  //     alert("success");
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     alert("error");
  //   },
  //   // isSuccess:(data)=>{toast.success('csv')}
  // });


  return (
    <div className="w-xs xs:w-sm sm:w-md mt-10 ">
      <span>کد تایید</span>

      <div dir="ltr" className="w-full ">
        {/* <Formik>
          <Form>
            <Field />

          </Form>
        </Formik> */}
        <Input.OTP
          variant="filled"
          {...sharedProps}
          size="large"
          style={{ width: "440px", height: "100px" }}
          className="border w-52 h-20"
          name="verifyCode"
        />
      </div>
      <AuthButton text={text} nextStep={nextStep} />
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
