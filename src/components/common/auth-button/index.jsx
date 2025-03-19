import React from "react";

const AuthButton = ({ nextStep, text }) => {
  return (
    <button
      onClick={nextStep}
      className="bg-navyBlue w-full h-10 rounded-full text-white"
    >
      {text}
    </button>
  );
};

export default AuthButton;
