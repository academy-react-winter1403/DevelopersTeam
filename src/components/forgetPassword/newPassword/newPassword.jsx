import React from "react";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";

const NewPassword = ({ text, nextStep }) => {
  return (
    <div className="w-xs xs:w-md mt-12 space-y-4">
      <Formik>
        <Form className="space-y-5">
          <AuthPassInput
            inputLabel={"رمزعبور جدید"}
            placeholder={"رمزعبور جدید خود را وارد کنید"}
          />
          <AuthPassInput
            inputLabel={"تکرار رمزعبور"}
            placeholder={"رمزعبور جدید خود را دوباره وارد کنید"}
          />
          <AuthButton text={text} />
        </Form>
      </Formik>
    </div>
  );
};

export default NewPassword;
