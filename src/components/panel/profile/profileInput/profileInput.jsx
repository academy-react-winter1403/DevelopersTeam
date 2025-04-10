import { Field } from "formik";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const ProfileInput = ({ inputLabel, name, placeholder }) => {
  return (
    <div className="flex flex-col space-y-3">
      <span className="font-semibold text-xs sm:text-sm lg:text-base">
        {inputLabel}
      </span>
      <span className="relative">
        <Field
          name={name}
          className="w-full h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
          placeholder={placeholder}
        />
      </span>
    </div>
  );
};

export default ProfileInput;
