import React, { useState } from "react";
import { PiClockCountdown } from "react-icons/pi";
import { Input } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import http from "./../../../core/services/interceptor";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyCodeLogin = ({ text, nextStep, prevStep }) => {
  const [otp, setOtp] = useState("");
  const {navigate}=useNavigate()

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await http.get(`/SharePanel/GetProfileInfo`);
      return res;
    },
  });

  const values = {
    phoneOrGmail: data?.email || data?.phoneNumber,
    password: "1",
    rememberMe: true,
  };

  const { mutate } = useMutation({
    mutationFn: async (VrifyCode) => {
      const res = await http.post(
        `/Sign/LoginTwoStep?VrifyCode=${VrifyCode}`,
        values
      );
      console.log(VrifyCode);
      return res;
    },
    onSuccess: () => {
      toast.success("عملبات با موفقیت انجام شد");
      navigate('/')
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.response.data.ErrorMessage);
    },
  });

  return (
    <div className="w-xs xs:w-sm sm:w-md mt-10">
      <div>
        <Formik
          initialValues={{ VrifyCode: "" }}
          onSubmit={(values) => {
            mutate(values.VrifyCode);
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <span>کد تایید</span>
              <div dir="ltr" className="w-full">
                <Input.OTP
                  name="VrifyCode"
                  length={5}
                  onChange={(value) => {
                    setOtp(value);
                    setFieldValue("VrifyCode", value);
                  }}
                  value={values.VrifyCode}
                  size="large"
                  style={{ width: "100%", height: "50px" }}
                  className="flex justify-center"
                  inputStyle={{
                    width: "40px",
                    height: "40px",
                    margin: "0 4px",
                    fontSize: "16px",
                  }}
                  autoFocus
                />
              </div>
              <button
                type="submit"
                disabled={otp.length !== 5}
                className="bg-navyBlue w-full h-10 rounded-full text-white hover:opacity-80 disabled:opacity-50 mt-4"
              >
                تایید
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex justify-center xs:block space-x-18">
          <div className="flex items-center space-x-4">
            <div className="sm:flex justify-center items-center space-x-2 w-24 h-9 rounded-full bg-lightBlue hidden">
              <PiClockCountdown className="w-5 h-5 text-navyBlue" />
              <span className="text-navyBlue font-semibold">02:20</span>
            </div>
            <span className="text-navyBlue underline font-semibold text-sm whitespace-nowrap">
              ارسال مجدد کد
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeLogin;
