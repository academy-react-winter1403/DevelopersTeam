import { Field, Form, Formik } from "formik";
import React from "react";
import { PiTelegramLogoThin } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";

const LinksTab = ({ data }) => {
  const queryClient = useQueryClient();
  const updateProfile = async (userData) => {
    const formData = new FormData();
    formData.append("LinkdinProfile", userData.linkdinProfile);
    formData.append("TelegramLink", userData.telegramLink);
    formData.append("FName", userData.fname);
    formData.append("LName", userData.lname);
    formData.append("UserAbout", userData.aboutMe);
    formData.append("NationalCode", userData.code);
    formData.append("BirthDay", userData.birthday);
    formData.append("Gender", userData.gender);
    formData.append("HomeAdderess", userData.address);
    const res = await http.put(`/SharePanel/UpdateProfileInfo`, formData);
    console.log("dddd", userData.gender);
    return res;
  };

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("اطلاعات با موفقیت تغییر یافت");
    },
    onError: () => {
      toast.error("خطا در بروزرسانی اطلاعات");
    },
  });

  return (
    <div className="w-full h-96 mx-2">
      <div className="flex flex-col space-y-3">
        <Formik
          onSubmit={(values) => mutateUpdate(values)}
          initialValues={{
            LinkdinProfile: data?.linkdinProfile || "",
            TelegramLink: data?.telegramLink || "",
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="">
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  <h2 className="font-bold text-md">تلگرام</h2>
                </span>
                <span className="relative flex items-center mt-2 space-x-3 ">
                  <span>
                    <PiTelegramLogoThin className="w-6 h-6 absolute top-2.5 right-8 text-navyBlue" />
                  </span>
                  <Field
                    name="TelegramLink"
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
                    name="LinkdinProfile"
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LinksTab;
