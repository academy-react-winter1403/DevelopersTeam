import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import { Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "./../../../core/services/interceptor";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../../redux/slices/loginSlice";
import { getData, setData } from "../../../core/localStorage/localStorage";
import LogForm from "./logForm";
import ReCAPTCHA from "react-google-recaptcha";

const EnterNumberLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login?.UserLoginInfo);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values) => http.post(`/Sign/Login`, values),
    mutationKey: ["Login"],
    onSuccess: (data, values) => {
      dispatch(
        handleLogin({
          phoneOrGmail: values.phoneOrGmail,
          password: values.password,
          rememberMe: values.rememberMe,
        })
      );
      if (data.message === "عملیات با موفقیت انجام شد.") {
        handleSuccessResponse(data);
        toast.success("عملیات با موفقیت انجام شد");
        navigate("/");
      } else if (data.message === "ارسال پیامک انجام شد.") {
        navigate("/login/verifycode");
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("لطفا دوباره امتحان کنید");
    },
  });

  const handleSuccessResponse = (data) => {
    const existingAccounts = getData("accounts") || [];
    const accountExists = existingAccounts.some(
      (account) => account.id === data.id
    );

    if (!accountExists) {
      const newAccount = {
        id: data.id,
        token: data.token,
        phoneOrGmail: loginData.phoneOrGmail,
      };
      const updatedAccounts = [...existingAccounts, newAccount];
      setData("accounts", updatedAccounts);
    }

    setData("authToken", data.token);
    setData("currentAccount", {
      id: data.id,
      token: data.token,
      phoneOrGmail: loginData.phoneOrGmail,
    });
  };

  // تابع ارسال فرم
  const handleSubmit = async (values) => {
    if (!captchaToken) {
      toast.error("لطفا کپچا را تکمیل کنید");
      return;
    }
    await mutateAsync({ ...values, rememberMe, captchaToken });
  };

  // برای LogForm فرض این است که prop‌ای برای onSubmit دارد
  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md mt-12 space-y-4">
          <LogForm
            mutateAsync={handleSubmit}
            isPending={isPending}
            dispatch={dispatch}
            setCaptchaToken={setCaptchaToken}
          />
          <div className="flex">
            <div className="flex items-center space-x-2">
              <Checkbox
                name="rememberMe"
                onChange={(e) => setRememberMe(e.target.checked)}
                className="text-xs font-semibold"
              >
                <span className="dark:text-white"> مرا به خاطر بسپار</span>
              </Checkbox>
            </div>
            <div className="relative right-8 xs:right-[156px] flex justify-center items-center space-x-2 w-40 h-9 rounded-full bg-lightBlue text-navyBlue text-xs xs:text-sm">
              <GrSecure className="text-lg" />
              <NavLink to={"/forgetpass"}>فراموشی رمزعبور</NavLink>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
     
{/* 
            <button
              className="btn btn-primary w-full"
               type="submit"
            >
              ورود
            </button> */}
          </div>
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> حساب کاربری ندارید؟</span>
          <NavLink to={"/register"} className="underline">
            ایجاد حساب کاربری
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnterNumberLogin;
