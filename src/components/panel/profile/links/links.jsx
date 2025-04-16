import { Field, Form, Formik } from "formik";
import React from "react";
import { PiTelegramLogoThin } from "react-icons/pi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";
import { SlSocialLinkedin } from "react-icons/sl";

const LinksTab = ({ data }) => {
  const queryClient = useQueryClient();
  const updateProfile = async (userData) => {
    const formData = new FormData();
    formData.append("LinkdinProfile", userData.LinkdinProfile || "");
    formData.append("TelegramLink", userData.TelegramLink || "");

    formData.append("FName", data?.fName || "");
    formData.append("LName", data?.lName || "");
    formData.append("UserAbout", data?.userAbout || "");
    formData.append("NationalCode", data?.nationalCode || "");
    formData.append("BirthDay", data?.birthDay || "1987-01-01T00:00:00");
    formData.append("Gender", data?.gender ?? false);
    formData.append("HomeAdderess", data?.homeAdderess || "");

    const res = await http.put(`/SharePanel/UpdateProfileInfo`, formData);
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
    <div className="w-full px-4 md:px-0 md:w-xl h-96 ">
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
              <div>
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  <h2 className="font-bold text-md dark:text-white">تلگرام</h2>
                </span>
                <span className="relative flex justify-center items-center mt-2 space-x -3 ">
                  <span>
                    <PiTelegramLogoThin className="w-5 h-5 absolute top-2 right-3 text-navyBlue" />
                  </span>
                  <Field
                    name="TelegramLink"
                    className="w-full h-9 outline-none rounded-xl p- 5 pr-11 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                    placeholder="لینک تلگرام خود را وارد کنید"
                  />
                </span>
              </div>
              <div className=" mt-3">
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  <h2 className="font-bold text-md dark:text-white">لینکدین</h2>
                </span>
                <span className="relative flex justify-center items-center mt-2 space-x -3 ">
                  <span>
                    <SlSocialLinkedin className="w-5 h-5 absolute top-2 right-3 text-navyBlue" />
                  </span>
                  <Field
                    name="LinkdinProfile"
                    className="w-full h-9 outline-none rounded-xl p- 5 pr-11 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
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
