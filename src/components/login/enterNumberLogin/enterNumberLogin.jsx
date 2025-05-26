import React from "react";
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

const EnterNumberLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login?.UserLoginInfo);

  console.log("loginData",loginData);

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

  return (
    <div>
      <div className="flex flex-col justify-center items-center xs:block">
        <div className="w-xs xs:w-md lg:w-md mt-12 space-y-4">
          <LogForm
            mutateAsync={mutateAsync}
            isPending={isPending}
            dispatch={dispatch}
          />
          <div className="flex">
            <div className="flex items-center space-x-2">
              <Checkbox
                name="rememberMe"
                onChange={(e) => {
                  dispatch(
                    handleLogin({
                      phoneOrGmail: values.phoneOrGmail,
                      password: values.password,
                      rememberMe: e.target.checked,
                    })
                  );
                }}
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
