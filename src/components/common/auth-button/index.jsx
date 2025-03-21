import React from "react";

const AuthButton = ({ nextStep, text }) => {
  return (
    <button
      type="submit"
      onClick={nextStep}
      className="bg-navyBlue w-full h-10 rounded-full text-white hover:opacity-80"
    >
      {text}
    </button>
  );
};

export default AuthButton;
