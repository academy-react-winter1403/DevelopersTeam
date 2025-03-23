import { Input } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

const AuthPassInput = ({ inputLabel, placeholder }) => {
  const prefix = <TbLockPassword className="text-xl ml-3" />;

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const suffix = <MdOutlineRemoveRedEye onClick={handleShowPass} />;
  const suffix2 = <IoEyeOffOutline onClick={handleShowPass} />;

  return (
    <div>
      <Formik>
        {() => (
          <Form className="flex flex-col space-y-3">
            <span className="font-semibold text-xs sm:text-sm lg:text-base">
              {inputLabel}
            </span>
            {/* <Field
           className="bg-lightGray h-9 outline-none rounded-xl p-5 pr-12 placeholder:text-xs"
           placeholder={placeholder}
           type="password"
         /> */}
            <Input.Password
              size="large"
              placeholder={placeholder}
              prefix={prefix}
              suffix={showPass ? suffix : suffix2}
              style={{
                background: "#f4f4f4",
                border: "none",
                borderRadius: "12px",
                fontSize: "12px",
                height: "36px",
                paddingRight: "16px",
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthPassInput;
