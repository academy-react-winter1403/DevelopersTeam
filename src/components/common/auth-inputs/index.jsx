import { Field, Form, Formik } from "formik";
import React from "react";
import AuthButton from "../auth-button";
import { Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const AuthInput = ({
  inputLabel,
  placeholder,
  nextStep,
  text,
  handleRegister,
}) => {
  return (
    <div>
      <Formik onSubmit={handleRegister} initialValues={{ phone: "" }}>
        <Form className="flex flex-col space-y-3">
          <span className="font-semibold">{inputLabel}</span>
          <Field
            name="phone"
            className="bg-lightGray h-9 outline-none rounded-xl p-5 pr-12 placeholder:text-xs"
            placeholder={placeholder}
          />
          {/* <button
            className="bg-navyBlue w-full h-10 rounded-full text-white"
            type="submit"
          >
            {text}
          </button> */}
        </Form>
      </Formik>
    </div>
  );
};

export default AuthInput;
