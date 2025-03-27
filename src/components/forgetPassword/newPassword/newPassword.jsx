import React from "react";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";

const NewPassword = ({ text, nextStep }) => {
  const { id } = useParams();

  const { mutateAsync } = useMutationCustom(
    "/Sign/Reset",
    "ResetPassword",
    "رمزعبور با موفقیت تغییر یافت"
  );

  const handleSubmit = async (values) => {
    await mutateAsync({
      userId,
      newPassword: values.newPassword,
      resetValue: values.resetValue,
    });
  };

  return (
    <div className="w-xs xs:w-md mt-12 space-y-4 absolute top-48 right-[720px]">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ newPassword: "", resetValue: "" }}
      >
        <Form className="space-y-5">
          <AuthPassInput
            inputLabel={"رمزعبور جدید"}
            placeholder={"رمزعبور جدید خود را وارد کنید"}
            name="newPassword"
          />
          <AuthPassInput
            inputLabel={"تکرار رمزعبور"}
            placeholder={"رمزعبور جدید خود را دوباره وارد کنید"}
            name="resetValue"
          />
          <AuthButton text={"تایید رمزعبور"} />
        </Form>
      </Formik>
    </div>
  );
};

export default NewPassword;
