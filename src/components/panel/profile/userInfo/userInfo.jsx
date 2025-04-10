import React from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { Field, Form, Formik } from "formik";
import ProfileInput from "../profileInput/profileInput";
import { Radio } from "antd";

const UserInfo = () => {
  return (
    <div className="md:grid md:grid-cols-10 flex flex-col">
      <div className="col-span-6 mt-6 order-2 md:order-1">
        <Formik>
          <Form className="space-y-5">
            <div className="w-full flex md:flex-row flex-col px-6 md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>نام</span>
                <Field
                  name="fname"
                  className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>نام خانوادگی</span>
                <Field
                  name="fname"
                  className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="نام خانوادگی خود را وارد کنید"
                />
              </div>
            </div>
            <div className="px-6">
              <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>درباره من</span>
                <Field
                  name="fname"
                  className="h-32 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="یک متن درباره خود را وارد کنید"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col px-6 md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>شماره همراه</span>
                <Field
                  name="fname"
                  className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="شماره همراه خود را وارد کنید"
                />
              </div>
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>کد ملی</span>
                <Field
                  name="fname"
                  className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="کد ملی خود را وارد کنید"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col px-6 md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>تاریخ تولد</span>
                <Field
                  name="fname"
                  className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="تاریخ تولد خود را وارد کنید"
                />
              </div>
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                <span>جنسیت</span>
                <div>
                  <Radio>مرد</Radio>
                  <Radio>زن</Radio>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="col-span-4 order-1 md:order-2 flex justify-center items-center md:justify-end ml-16 mt-6">
        <div className="md:border-2 md:border-borderGray w-72 h-72 rounded-2xl flex items-center justify-center">
          <ProgressProfile />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
