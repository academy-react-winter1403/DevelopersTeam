import { Field, Form, Formik } from "formik";
import React from "react";
import AuthButton from "../auth-button";
import { Button, Input } from "antd";
import { SyncOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineMail } from "react-icons/hi";

const AuthInput = ({ inputLabel, placeholder, name, icon }) => {
  const prefix = <HiOutlineMail className="text-xl ml-3" />;

  return (
    <div className="flex flex-col space-y-3">
      <span className="font-semibold text-xs sm:text-sm lg:text-base">
        {inputLabel}
      </span>
      <span className="relative">
        {icon}
        <Field
          name={name}
          className="w-full h-9 outline-none rounded-xl p-5 pr-9 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
          placeholder={placeholder}
        />
      </span>
    </div>
  );
};

export default AuthInput;
