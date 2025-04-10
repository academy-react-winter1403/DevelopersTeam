import { Radio } from "antd";
import { Field } from "formik";
import React from "react";

const InfoFields = () => {
  return (
    <div className="space-y-5 mb-10 ">
      <div className="w-full flex md:flex-row flex-col   md:space-x-8 space-y-5">
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
      <div className=" ">
        <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
          <span>درباره من</span>
          <Field
            name="fname"
            className="h-32 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
            placeholder="یک متن درباره خود را وارد کنید"
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col   md:space-x-8 space-y-5">
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
      <div className="w-full flex md:flex-row flex-col   md:space-x-8 space-y-5">
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
            <span className="text-navyBlue mr-3">انتخاب کنید</span>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
          <span>ایمیل</span>
          <Field
            name="fname"
            className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>
      </div>
      <div className=" ">
        <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
          <span>آدرس سکونت</span>
          <Field
            name="fname"
            className="h-32 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
            placeholder="آدرس سکونت خود را وارد کنید"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoFields;
