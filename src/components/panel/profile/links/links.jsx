import { Field, Form, Formik } from "formik";
import React from "react";
import { PiTelegramLogoThin } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";

const LinksTab = () => {
  return (
    <div className="w-full h-96 mx-2">
      <div className="flex flex-col space-y-3">
        <Formik>
          <Form>
            <div className="">
              <span className="font-semibold text-xs sm:text-sm lg:text-base">
                <h2 className="font-bold text-md">تلگرام</h2>
              </span>
              <span className="relative flex items-center mt-2 space-x-3 ">
                <span>
                  <PiTelegramLogoThin className="w-6 h-6 absolute top-2.5 right-8 text-navyBlue" />
                </span>
                <Field
                  name={name}
                  className="w-7/11 h-9 outline-none rounded-xl p-5 pr-14 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="لینک تلگرام خود را وارد کنید"
                />
              </span>
            </div>
            <div className="">
              <span className="font-semibold text-xs sm:text-sm lg:text-base">
                <h2 className="font-bold text-md">لینکدین</h2>
              </span>
              <span className="relative flex items-center mt-2 space-x-3">
                <span className="">
                  <LuLinkedin className="w-6 h-6 absolute top-2.5 right-8 text-navyBlue " />
                </span>
                <Field
                  name={name}
                  className="w-7/11 h-9 outline-none rounded-xl py-5 pr-14 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                  placeholder="لینک لینکدین خود را وارد کنید"
                />
              </span>
            </div>
            <button
              type="submit"
              // onClick={nextStep}
              className="bg-navyBlue w-32 h-10 rounded-full font-bold text-white hover:opacity-80 my-6"
            >
              اعمال تغییرات
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LinksTab;
