import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrSecure } from "react-icons/gr";
import AuthInput from "../../common/auth-inputs";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { HiOutlineMail } from "react-icons/hi";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import toast from "react-hot-toast";

const EnterEmail = () => {
  const icon = <HiOutlineMail className="absolute top-2.5 right-3 text-xl" />;
  const navigate = useNavigate()
  const { mutateAsync } = useMutationCustom(
    "/Sign/ForgetPassword",
    "ForgetPassword",
    "لینک بازنشانی ارسال شد"
  );

  const handleMutation = async (values) => {
    const payload = {
      email: values.email,
      baseUrl: "http://localhost:5173/forgetpass/setpassword",
    };
    try {
      const response = await mutateAsync(payload);
      // nextStep(); 
      // history.push(payload.baseUrl); 
      // navigate('/forgetpass/setpassword')
      if (response?.data?.id) {
        navigate(`/forgetpass/setpassword/${response.data.id}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className=" absolute top-48 right-[720px]">
      <div className="flex flex-col justify-center items-center xs:block ">
        <div className="w-xs xs:w-md mt-12 ">
          <Formik onSubmit={handleMutation} initialValues={{ email: "" }}>
            <Form className=" space-y-4">
              <AuthInput
                inputLabel={"ایمیل"}
                placeholder={"ایمیل خود را وارد کنید"}
                name="email"
                icon={icon}
              />
              <AuthButton text={"ارسال لینک"} />
            </Form>
          </Formik>
        </div>
        <div className="w-md mt-5 text-sm flex justify-center space-x-2">
          <span> رمزعبور خود فراموش نکردید؟</span>
          <NavLink to={"/register"} className="underline">
            ورود به حساب کاربری
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EnterEmail;
