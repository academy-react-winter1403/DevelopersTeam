import React from "react";
import ForgetPassword from "../../components/forgetPassword";
import { Outlet } from "react-router-dom";

const ForgetPasswordPage = () => {
  return (
    <div>
      <ForgetPassword />
      <Outlet />
    </div>
  );
};

export default ForgetPasswordPage;
