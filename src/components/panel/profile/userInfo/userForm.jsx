import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import ProfileFormSchema from "./profileFormSchema";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const UserForm = ({ mutateUpdate, data }) => {
  return (
    // <Formik
    //   onSubmit={(values) => mutateUpdate(values)}
    //   validationSchema={ProfileFormSchema}
    //   initialValues={{
    //     fname: data?.fName || "",
    //     lname: data?.lName || "",
    //     aboutMe: data?.userAbout || "",
    //     phone: data?.phoneNumber || "",
    //     code: data?.nationalCode || "",
    //     birthday: data?.birthDay ? new Date(data.birthDay) : "",
    //     gender: data?.gender ?? true,
    //     email: data?.email || "",
    //     address: data?.homeAdderess || "",
    //   }}
    //   enableReinitialize
    // >
    //   {({ handleSubmit, values, setFieldValue }) => (
    //     <Form onSubmit={handleSubmit} className="px-6 mb-10">
    //       <div className="space-y-5 mb-10">
    //         <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>نام</span>
    //             <Field
    //               name="fname"
    //               className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //               placeholder="نام خود را وارد کنید"
    //             />
    //             <ErrorMessage
    //               name="fname"
    //               component="h1"
    //               className="text-navyBlue"
    //             />
    //           </div>
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>نام خانوادگی</span>
    //             <Field
    //               name="lname"
    //               className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //               placeholder="نام خانوادگی خود را وارد کنید"
    //             />
    //             <ErrorMessage
    //               name="lname"
    //               component="h1"
    //               className="text-navyBlue"
    //             />
    //           </div>
    //         </div>

    //         <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //           <span>درباره من</span>
    //           <Field
    //             name="aboutMe"
    //             as="textarea"
    //             className="h-32 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //             placeholder="یک متن درباره خود را وارد کنید"
    //           />
    //           <ErrorMessage
    //             name="aboutMe"
    //             component="h1"
    //             className="text-navyBlue"
    //           />
    //         </div>

    //         <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>شماره همراه</span>
    //             <Field
    //               name="phone"
    //               className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //               placeholder="شماره همراه خود را وارد کنید"
    //               disabled
    //             />
    //             <ErrorMessage
    //               name="phone"
    //               component="h1"
    //               className="text-navyBlue"
    //             />
    //           </div>
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>کد ملی</span>
    //             <Field
    //               name="code"
    //               className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //               placeholder="کد ملی خود را وارد کنید"
    //             />
    //             <ErrorMessage
    //               name="code"
    //               component="h1"
    //               className="text-navyBlue"
    //             />
    //           </div>
    //         </div>

    //         <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>تاریخ تولد</span>
    //             <DatePicker
    //               value={values.birthday}
    //               onChange={(dateObject) => {
    //                 const dateString = dateObject
    //                   ? dateObject.toDate().toISOString()
    //                   : "";
    //                 setFieldValue("birthday", dateString);
    //               }}
    //               calendar={persian}
    //               locale={persian_fa}
    //               style={{
    //                 height: "2.25rem",
    //                 width: "100%",
    //                 color: "#6b7280",
    //                 outline: "none",
    //                 borderRadius: "0.75rem",
    //                 padding: "1.25rem",
    //                 paddingRight: "1.25rem",
    //                 border: "1px solid #f4f4f4",
    //                 backgroundColor: "#f4f4f4",
    //                 transitionProperty: "all",
    //                 transitionDuration: "300ms",
    //               }}
    //               placeholder="تاریخ تولد خود را وارد کنید"
    //             />
    //             <ErrorMessage
    //               name="birthday"
    //               component="h1"
    //               className="text-navyBlue"
    //             />
    //           </div>
    //           <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //             <span>جنسیت</span>
    //             <div className="flex space-x-4">
    //               <label className="flex items-center space-x-2 cursor-pointer">
    //                 <input
    //                   type="radio"
    //                   name="gender"
    //                   checked={values.gender === true}
    //                   onChange={() => setFieldValue("gender", true)}
    //                   className="mr-2 cursor-pointer"
    //                 />
    //                 <span>مرد</span>
    //               </label>
    //               <ErrorMessage
    //                 name="gender"
    //                 component="h1"
    //                 className="text-navyBlue"
    //               />
    //               <label className="flex items-center space-x-2 cursor-pointer">
    //                 <input
    //                   type="radio"
    //                   name="gender"
    //                   checked={values.gender === false}
    //                   onChange={() => setFieldValue("gender", false)}
    //                   className="mr-2 cursor-pointer"
    //                 />
    //                 <span>زن</span>
    //               </label>
    //               <ErrorMessage
    //                 name="gender"
    //                 component="h1"
    //                 className="text-navyBlue"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //           <span>ایمیل</span>
    //           <Field
    //             name="email"
    //             className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //             placeholder="ایمیل خود را وارد کنید"
    //           />
    //           <ErrorMessage
    //             name="email"
    //             component="h1"
    //             className="text-navyBlue"
    //           />
    //         </div>

    //         <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
    //           <span>آدرس سکونت</span>
    //           <Field
    //             name="address"
    //             as="textarea"
    //             className="h-32 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
    //             placeholder="آدرس سکونت خود را وارد کنید"
    //           />
    //           <ErrorMessage
    //             name="address"
    //             component="h1"
    //             className="text-navyBlue"
    //           />
    //         </div>
    //       </div>

    //       <button
    //         type="submit"
    //         className="bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
    //       >
    //         اعمال تغییرات
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
    <Formik
      onSubmit={(values) => mutateUpdate(values)}
      validationSchema={ProfileFormSchema}
      initialValues={{
        fname: data?.fName || "",
        lname: data?.lName || "",
        aboutMe: data?.userAbout || "",
        phone: data?.phoneNumber || "",
        code: data?.nationalCode || "",
        birthday: data?.birthDay ? new Date(data.birthDay) : "",
        gender: data?.gender ?? true,
        email: data?.email || "",
        address: data?.homeAdderess || "",
      }}
      enableReinitialize
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit} className="px-6 mb-10">
          <div className="space-y-5 mb-10">
            {/* نام */}
            <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                <span>نام</span>
                <div className="relative">
                  <Field
                    name="fname"
                    className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="نام خود را وارد کنید"
                  />
                  <button
                    type="button"
                    onClick={() => handleSpeechToField(setFieldValue, "fname")}
                    className="absolute left-2 top-1.5 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="ورود صوتی"
                  >
                    🎤
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReadField(values.fname)}
                    className="absolute left-12 top-1.5 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="خواندن صوتی"
                    disabled={isSpeaking || !values.fname}
                    style={{ opacity: !values.fname || isSpeaking ? 0.6 : 1 }}
                  >
                    🔊
                  </button>
                </div>
                <ErrorMessage
                  name="fname"
                  component="h1"
                  className="text-navyBlue"
                />
              </div>
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                <span>نام خانوادگی</span>
                <div className="relative">
                  <Field
                    name="lname"
                    className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="نام خانوادگی خود را وارد کنید"
                  />
                  <button
                    type="button"
                    onClick={() => handleSpeechToField(setFieldValue, "lname")}
                    className="absolute left-2 top-1.5 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="ورود صوتی"
                  >
                    🎤
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReadField(values.lname)}
                    className="absolute left-12 top-1.5 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="خواندن صوتی"
                    disabled={isSpeaking || !values.lname}
                    style={{ opacity: !values.lname || isSpeaking ? 0.6 : 1 }}
                  >
                    🔊
                  </button>
                </div>
                <ErrorMessage
                  name="lname"
                  component="h1"
                  className="text-navyBlue"
                />
              </div>
            </div>

            {/* درباره من */}
            <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
              <span>درباره من</span>
              <div className="relative">
                <Field
                  name="aboutMe"
                  as="textarea"
                  className="h-32 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                  placeholder="یک متن درباره خود را وارد کنید"
                />
                <button
                  type="button"
                  onClick={() => handleSpeechToField(setFieldValue, "aboutMe")}
                  className="absolute left-2 top-2 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="ورود صوتی"
                >
                  🎤
                </button>
                <button
                  type="button"
                  onClick={() => handleReadField(values.aboutMe)}
                  className="absolute left-12 top-2 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="خواندن صوتی"
                  disabled={isSpeaking || !values.aboutMe}
                  style={{ opacity: !values.aboutMe || isSpeaking ? 0.6 : 1 }}
                >
                  🔊
                </button>
              </div>
              <ErrorMessage
                name="aboutMe"
                component="h1"
                className="text-navyBlue"
              />
            </div>

            {/* شماره همراه */}
            <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                <span>شماره همراه</span>
                <Field
                  name="phone"
                  className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
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
                <div className="relative">
                  <Field
                    name="code"
                    className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="کد ملی خود را وارد کنید"
                  />
                  <button
                    type="button"
                    onClick={() => handleSpeechToField(setFieldValue, "code")}
                    className="absolute left-2 top-1.5 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="ورود صوتی"
                  >
                    🎤
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReadField(values.code)}
                    className="absolute left-12 top-1.5 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                    title="خواندن صوتی"
                    disabled={isSpeaking || !values.code}
                    style={{ opacity: !values.code || isSpeaking ? 0.6 : 1 }}
                  >
                    🔊
                  </button>
                </div>
                <ErrorMessage
                  name="code"
                  component="h1"
                  className="text-navyBlue"
                />
              </div>
            </div>

            {/* تاریخ تولد و جنسیت */}
            <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
              <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                <span>تاریخ تولد</span>
                <DatePicker
                  value={values.birthday}
                  onChange={(dateObject) => {
                    const dateString = dateObject
                      ? dateObject.toDate().toISOString()
                      : "";
                    setFieldValue("birthday", dateString);
                  }}
                  calendar={persian}
                  locale={persian_fa}
                  style={{
                    height: "2.25rem",
                    width: "100%",
                    color: "#6b7280",
                    outline: "none",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    paddingRight: "1.25rem",
                    border: "1px solid #f4f4f4",
                    backgroundColor: "#f4f4f4",
                    transitionProperty: "all",
                    transitionDuration: "300ms",
                  }}
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

            {/* ایمیل */}
            <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
              <span>ایمیل</span>
              <div className="relative">
                <Field
                  name="email"
                  className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <button
                  type="button"
                  onClick={() => handleSpeechToField(setFieldValue, "email")}
                  className="absolute left-2 top-1.5 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="ورود صوتی"
                >
                  🎤
                </button>
                <button
                  type="button"
                  onClick={() => handleReadField(values.email)}
                  className="absolute left-12 top-1.5 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="خواندن صوتی"
                  disabled={isSpeaking || !values.email}
                  style={{ opacity: !values.email || isSpeaking ? 0.6 : 1 }}
                >
                  🔊
                </button>
              </div>
              <ErrorMessage
                name="email"
                component="h1"
                className="text-navyBlue"
              />
            </div>

            {/* آدرس سکونت */}
            <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
              <span>آدرس سکونت</span>
              <div className="relative">
                <Field
                  name="address"
                  as="textarea"
                  className="h-32 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                  placeholder="آدرس سکونت خود را وارد کنید"
                />
                <button
                  type="button"
                  onClick={() => handleSpeechToField(setFieldValue, "address")}
                  className="absolute left-2 top-2 bg-navyBlue text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="ورود صوتی"
                >
                  🎤
                </button>
                <button
                  type="button"
                  onClick={() => handleReadField(values.address)}
                  className="absolute left-12 top-2 bg-indigo-500 text-white px-2 py-1 rounded-full flex items-center justify-center"
                  title="خواندن صوتی"
                  disabled={isSpeaking || !values.address}
                  style={{ opacity: !values.address || isSpeaking ? 0.6 : 1 }}
                >
                  🔊
                </button>
              </div>
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
  );
};

export default UserForm;
