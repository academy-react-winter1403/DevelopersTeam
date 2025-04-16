import React from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "./../../../../core/services/interceptor";
import ProfileFormSchema from "./profileFormSchema";
import DateComponent from "../../../common/date/dateComponent";

const UserInfo = ({ data }) => {
  const queryClient = useQueryClient();

  const updateProfile = async (userData) => {
    const formData = new FormData();
    formData.append("FName", userData.fname);
    formData.append("LName", userData.lname);
    formData.append("UserAbout", userData.aboutMe);
    formData.append("NationalCode", userData.code);
    formData.append("BirthDay", userData.birthday);
    formData.append("Gender", userData.gender);
    formData.append("HomeAdderess", userData.address);

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

  const myBirthDay = new Date(data?.birthDay).toLocaleDateString("fa-IR");

  return (
    <div className="md:grid md:grid-cols-10 flex flex-col">
      <div className="col-span-6 mt-6 order-2 md:order-1">
        <Formik
          onSubmit={(values) => mutateUpdate(values)}
          validationSchema={ProfileFormSchema}
          initialValues={{
            fname: data?.fName || "",
            lname: data?.lName || "",
            aboutMe: data?.userAbout || "",
            phone: data?.phoneNumber || "",
            code: data?.nationalCode || "",
            birthday: data?.birthDay || "",
            gender: data?.gender ?? true,
            email: data?.email || "",
            address: data?.homeAdderess || "",
          }}
          enableReinitialize
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className="px-6 mb-10">
              <div className="space-y-5 mb-10">
                <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>نام</span>
                    <Field
                      name="fname"
                      className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                      placeholder="نام خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="fname"
                      component="h1"
                      className="text-navyBlue"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>نام خانوادگی</span>
                    <Field
                      name="lname"
                      className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                      placeholder="نام خانوادگی خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="lname"
                      component="h1"
                      className="text-navyBlue"
                    />
                  </div>
                </div>

                <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                  <span>درباره من</span>
                  <Field
                    name="aboutMe"
                    as="textarea"
                    className="h-32 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="یک متن درباره خود را وارد کنید"
                  />
                  <ErrorMessage
                    name="aboutMe"
                    component="h1"
                    className="text-navyBlue"
                  />
                </div>

                <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>شماره همراه</span>
                    <Field
                      name="phone"
                      className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                      placeholder="شماره همراه خود را وارد کنید"
                      disabled
                    />
                    <ErrorMessage
                      name="phone"
                      component="h1"
                      className="text-navyBlue"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>کد ملی</span>
                    <Field
                      name="code"
                      className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                      placeholder="کد ملی خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="code"
                      component="h1"
                      className="text-navyBlue"
                    />
                  </div>
                </div>

                <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>تاریخ تولد</span>
                    <Field
                      name="birthday"
                      // type="date"
                      className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                      placeholder="تاریخ تولد خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="birthday"
                      component="h1"
                      className="text-navyBlue"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>جنسیت</span>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          checked={values.gender === true}
                          onChange={() => setFieldValue("gender", true)}
                          className="mr-2 cursor-pointer"
                        />
                        <span>مرد</span>
                      </label>
                      <ErrorMessage
                        name="gender"
                        component="h1"
                        className="text-navyBlue"
                      />
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          checked={values.gender === false}
                          onChange={() => setFieldValue("gender", false)}
                          className="mr-2 cursor-pointer"
                        />
                        <span>زن</span>
                      </label>
                      <ErrorMessage
                        name="gender"
                        component="h1"
                        className="text-navyBlue"
                      />
                    </div>
                  </div>
                </div>

                <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                  <span>ایمیل</span>
                  <Field
                    name="email"
                    className="h-9 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                  <ErrorMessage
                    name="email"
                    component="h1"
                    className="text-navyBlue"
                  />
                </div>

                <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                  <span>آدرس سکونت</span>
                  <Field
                    name="address"
                    as="textarea"
                    className="h-32 w-full outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="آدرس سکونت خود را وارد کنید"
                  />
                  <ErrorMessage
                    name="address"
                    component="h1"
                    className="text-navyBlue"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
              >
                اعمال تغییرات
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="col-span-4 order-1 md:order-2 flex justify-center md:justify-end md:ml-16 mt-6">
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
