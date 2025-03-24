import { Input } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiHide, BiUserCheck } from "react-icons/bi";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

const AuthPassInput = ({ inputLabel, placeholder, name }) => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const show = (
    <MdOutlineRemoveRedEye
      onClick={handleShowPass}
      className="absolute top-3.5 left-3"
    />
  );
  const hide = (
    <IoEyeOffOutline
      onClick={handleShowPass}
      className="absolute top-3.5 left-3"
    />
  );

  return (
    <div>
      <div className="flex flex-col space-y-3">
        <span className="font-semibold text-xs sm:text-sm lg:text-base">
          {inputLabel}
        </span>
        <span className="relative">
          <TbLockPassword className="absolute top-2.5 right-3 text-xl" />
          <Field
            className="w-full h-9 outline-none rounded-xl p-5 pr-9 placeholder:text-xs bg-lightGray border border-lightGray focus:border-navyBlue transition-all duration-300 "
            placeholder={placeholder}
            type={showPass ? "text" : "password"}
            name={name}
          />
          {showPass ? hide : show}
        </span>
      </div>
    </div>
  );
};

export default AuthPassInput;
