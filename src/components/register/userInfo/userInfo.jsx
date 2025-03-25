import React from "react";
import AuthInput from "../../common/auth-inputs";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ text, PhoneNumber }) => {
  const navigate = useNavigate();
  const icon = <HiOutlineMail className="absolute top-2.5 right-3 text-xl" />;
  const { mutateAsync } = useMutationCustom(
    "/Sign/Register",
    "submitRegister",
    "عملیات با موفقیت انجام شد"
  );
  const handleMutation = async (values) => {
    await mutateAsync({
      phoneNumber: PhoneNumber,
      gmail: values.gmail,
      password: values.password,
    });
    navigate("/");
  };

  return (
    <div className="w-xs xs:w-sm sm:w-md mt-14">
      <Formik
        onSubmit={handleMutation}
        initialValues={{ gmail: "", password: "" }}
      >
        <Form className=" space-y-5">
          <AuthInput
            inputLabel="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            name="gmail"
            icon={icon}
          />
          <AuthPassInput
            inputLabel={"رمزعبور"}
            placeholder={"رمزعبور خود را وارد کنید"}
            name="password"
          />
          <AuthButton text={text} />
        </Form>
      </Formik>
    </div>
  );
};

export default UserInfo;
