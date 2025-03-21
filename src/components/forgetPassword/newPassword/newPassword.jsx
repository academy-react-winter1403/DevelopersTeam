import React from "react";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";

const NewPassword = ({text,nextStep}) => {
  return (
    <div className="w-md mt-12 space-y-4">
      <AuthPassInput
        inputLabel={"رمزعبور جدید"}
        placeholder={"رمزعبور جدید خود را وارد کنید"}
      />
      <AuthPassInput
        inputLabel={"تکرار رمزعبور"}
        placeholder={"رمزعبور جدید خود را دوباره وارد کنید"}
      />
      <AuthButton nextStep={nextStep} text={text} />
    </div>
  );
};

export default NewPassword;
