import { Spin } from "antd";
import React from "react";
import { FiLoader } from "react-icons/fi";
const AuthButton = ({ nextStep, text, isPending }) => {
  return (
    <button
      type="submit"
      className={
        isPending
          ? "bg-navyBlue opacity-50 w-full h-10 rounded-full text-white hover:opacity-80"
          : "bg-navyBlue w-full h-10 rounded-full text-white hover:opacity-80"
      }
    >
      {isPending ? (
        <Spin
          indicator={<FiLoader className="text-white w-7 h-7" spin />}
          size="small"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default AuthButton;
