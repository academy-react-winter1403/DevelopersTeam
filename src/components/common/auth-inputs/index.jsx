import { Field, Form, Formik } from "formik";
import React from "react";
import AuthButton from "../auth-button";
import { Button, Input } from "antd";
import { SyncOutlined, UserOutlined } from "@ant-design/icons";
import { HiOutlineMail } from "react-icons/hi";



const AuthInput = ({
  inputLabel,
  placeholder,
  nextStep,
  text,
  handleRegister,
}) => {

  const prefix = <HiOutlineMail className="text-xl ml-3" />;


  return (
    <div>
      <Formik onSubmit={handleRegister} initialValues={{ phone: "" }}>
        {() => (
          <Form className="flex flex-col space-y-3">
            <span className="font-semibold">{inputLabel}</span>
            {/* <Field
              name="phone"
              className="bg-lightGray h-9 outline-none rounded-xl p-5 pr-12 placeholder:text-xs"
              placeholder={placeholder}
            /> */}
            <Input
              size="large"
              placeholder={placeholder}
              prefix={prefix}
              style={{
                background: "#f4f4f4",
                border: "none",
                borderRadius: "12px",
                fontSize: "12px",
                height: "36px",
                paddingRight: "16px",
              }}
            />
            {/* <button
          className="bg-navyBlue w-full h-10 rounded-full text-white"
          type="submit"
        >
          {text}
        </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthInput;
