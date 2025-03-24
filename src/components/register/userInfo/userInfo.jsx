import React from "react";
import AuthInput from "../../common/auth-inputs";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { HiOutlineMail } from "react-icons/hi";

const UserInfo = ({ text }) => {

  const icon = <HiOutlineMail className="absolute top-2.5 right-3 text-xl" />
  

  return (
    <div className="w-xs xs:w-sm sm:w-md mt-14">
      <Formik initialValues={{d:'',s:''}}>
        <Form className=" space-y-5">
          <AuthInput
            inputLabel="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            name="d"
            icon={icon}
          />
          <AuthPassInput
            inputLabel={"رمزعبور"}
            placeholder={"رمزعبور خود را وارد کنید"}
            name="s"
          />
          <AuthButton text={text} />
        </Form>
      </Formik>
    </div>
  );
};

export default UserInfo;
