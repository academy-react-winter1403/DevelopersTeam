import { Field, Form, Formik } from "formik";
import React from "react";
import { BiHide } from "react-icons/bi";

const AuthPassInput = ({ inputLabel, placeholder }) => {

  return (
    <div>
      <Formik>
        <Form className="flex flex-col space-y-3">
          <span className="font-semibold">{inputLabel}</span>
          <Field
            className="bg-lightGray h-9 outline-none rounded-xl p-5 pr-12 placeholder:text-xs"
            placeholder={placeholder}
            type="password"
          />
          
        </Form>
      </Formik>
    </div>
  );
};

export default AuthPassInput;
