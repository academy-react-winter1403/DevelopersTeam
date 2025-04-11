import React from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { Field, Form, Formik } from "formik";
import ProfileInput from "../profileInput/profileInput";
import { Radio } from "antd";
import InfoFields from "./infoFields/infoFields";
import TextArea from "antd/es/input/TextArea";
import http from "./../../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PersianCalendar from "persian-calender";

const UserInfo = ({ data }) => {
  const queryClient = useQueryClient();

  const updateProfile = async (userData) => {
    const formData = new FormData();
    formData.append("FName", userData.fname);
    formData.append("LName", userData.lname);
    formData.append("UserAbout", userData.aboutMe);
    // formData.append("Phone", userData.phone);
    formData.append("NationalCode", userData.code);
    formData.append("BirthDay", userData.birthday);
    formData.append("Gender", userData.gender);
    // formData.append("Email", userData.email);
    formData.append("HomeAdderess", userData.address);

    const res = await http.put(`/SharePanel/UpdateProfileInfo`, formData);
    return res;
  };

  const {
    mutate: mutateUpdate,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      toast.success("اطلاعات با موفقیت تغییر یافت");
    },
  });

  return (
    <div className="md:grid md:grid-cols-10 flex flex-col">
      <div className="col-span-6 mt-6 order-2 md:order-1">
        <Formik
          onSubmit={(values) => mutateUpdate(values)}
          initialValues={{
            fname: data?.fName || "",
            lname: data?.lName || "",
            aboutMe: data?.userAbout || "",
            phone: data?.phoneNumber || "",
            code: data?.nationalCode || "",
            birthday: data?.birthDay || "",
            gender: data?.gender || "",
            email: data?.email || "",
            address: data?.homeAdderess || "",
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="px-6 mb-10">
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
                      name="lname"
                      className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                  </div>
                </div>
                <div className=" ">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>درباره من</span>
                    {/* <Field
                    name="aboutMe"
                    className="h-32 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                    placeholder="یک متن درباره خود را وارد کنید"
                  /> */}
                    <TextArea
                      name="aboutMe"
                      placeholder="یک متن درباره خود را وارد کنید"
                      rows={4}
                      style={{
                        backgroundColor: "#f4f4f4",
                        border: "none",
                        borderRadius: "12px",
                        padding: "10px",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex md:flex-row flex-col   md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>شماره همراه</span>
                    <Field
                      name="phone"
                      className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                      placeholder="شماره همراه خود را وارد کنید"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>کد ملی</span>
                    <Field
                      name="code"
                      className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                      placeholder="کد ملی خود را وارد کنید"
                    />
                  </div>
                </div>
                <div className="w-full flex md:flex-row flex-col   md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>تاریخ تولد</span>
                    <Field
                      name="birthday"
                      className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                      placeholder="تاریخ تولد خود را وارد کنید"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>جنسیت</span>
                    <div>
                      <Radio name="gender">مرد</Radio>
                      <Radio name="gender">زن</Radio>
                    </div>
                  </div>
                </div>
                <div className=" ">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>ایمیل</span>
                    <Field
                      name="email"
                      className="h-9 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>
                </div>
                <div className=" ">
                  <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3 ">
                    <span>آدرس سکونت</span>
                    {/* <Field
                    name="address"
                    className="h-32 outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
                    placeholder="آدرس سکونت خود را وارد کنید"
                  /> */}
                    <TextArea
                      name="address"
                      placeholder="آدرس سکونت خود را وارد کنید"
                      rows={4}
                      style={{
                        backgroundColor: "#f4f4f4",
                        border: "none",
                        borderRadius: "12px",
                        padding: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                // onClick={nextStep}
                className="bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
              >
                اعمال تغییرات
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-span-4 order-1 md:order-2 flex justify-center md:justify-end ml-16 mt-6">
        <div className="md:border-2 md:border-borderGray w-72 h-72 rounded-2xl flex items-center justify-center">
          <ProgressProfile
            profileCompletionPercentage={data?.profileCompletionPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
