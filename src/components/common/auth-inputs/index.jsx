import { Field, Form, Formik } from "formik";
import React from "react";
import AuthButton from "../auth-button";

const AuthInput = ({ inputLabel, placeholder ,nextStep , text}) => {
  return (
    <div>
      <Formik>
        <Form className="flex flex-col space-y-3">
          <span className="font-semibold">{inputLabel}</span>
          <Field
            className="bg-lightGray h-9 outline-none rounded-xl p-5 pr-12 placeholder:text-xs"
            placeholder={placeholder}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AuthInput;
