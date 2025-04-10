import React from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { Field, Form, Formik } from "formik";
import ProfileInput from "../profileInput/profileInput";
import { Radio } from "antd";
import InfoFields from "./infoFields/infoFields";

const UserInfo = () => {
  return (
    <div className="md:grid md:grid-cols-10 flex flex-col">
      <div className="col-span-6 mt-6 order-2 md:order-1">
        <Formik>
          <Form className="px-6 mb-10">
            <InfoFields />
            <button
              type="submit"
              // onClick={nextStep}
              className="bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
            >
              اعمال تغییرات
            </button>
          </Form>
        </Formik>
      </div>
      <div className="col-span-4 order-1 md:order-2 flex justify-center md:justify-end ml-16 mt-6">
        <div className="md:border-2 md:border-borderGray w-72 h-72 rounded-2xl flex items-center justify-center">
          <ProgressProfile />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
