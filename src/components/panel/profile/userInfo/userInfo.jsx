import React, { useRef, useState } from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "./../../../../core/services/interceptor";
import ProfileFormSchema from "./profileFormSchema";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import UserForm from "./userForm";
import SecurityInfo from "./securityInfo";
import { Divider } from "antd";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { useDarkMode } from "../../../../context/theme/themeContext";

function isFirefox() {
  return typeof window !== "undefined" && /firefox/i.test(navigator.userAgent);
}

const UserInfo = ({ data }) => {
  const queryClient = useQueryClient();
  const recognitionRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleReadField = (text) => {
    if (!text) {
      toast.error("مقداری برای خواندن وارد نشده است.");
      return;
    }
    if (!("speechSynthesis" in window)) {
      toast.error("مرورگر شما از قابلیت خواندن متون پشتیبانی نمی‌کند.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const faVoice = voices.find((v) => v.lang?.startsWith("fa"));
    if (faVoice) utterance.voice = faVoice;
    utterance.lang = "fa-IR";
    utterance.rate = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeechToField = (setFieldValue, fieldName) => {
    if (isFirefox()) {
      toast.error(
        "قابلیت ورود صوتی فعلاً در Firefox پشتیبانی نمی‌شود. لطفاً با مرورگر Chrome تست کنید."
      );
      return;
    }
    if (!("webkitSpeechRecognition" in window)) {
      toast.error("مرورگر شما از تشخیص گفتار پشتیبانی نمی‌کند.");
      return;
    }
    if (recognitionRef.current) recognitionRef.current.abort();

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "fa-IR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      setFieldValue(fieldName, transcript);
    };
    recognition.onerror = function (event) {
      toast.error("خطا در دریافت صدا: " + event.error);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };

  const updateProfile = async (userData) => {
    const formData = new FormData();
    formData.append("TelegramLink", data?.telegramLink || "");
    formData.append("LinkdinProfile", data?.linkdinProfile || "");
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
    onMutate: async (newData) => {
      await queryClient.cancelQueries(["profile"]);
      const previousData = queryClient.getQueryData(["profile"]);
      queryClient.setQueryData(["profile"], (old) => ({
        ...old,
        fName: newData.fname,
        lName: newData.lname,
        userAbout: newData.aboutMe,
        nationalCode: newData.code,
        birthDay: newData.birthday,
        gender: newData.gender,
        homeAdderess: newData.address,
      }));
      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries(["profile"]);
    },
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت تغییر یافت");
    },
    onError: () => {
      toast.error("خطا در بروزرسانی اطلاعات");
    },
  });
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="md:grid md:grid-cols-10 flex flex-col dark:text-white">
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
                        className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                        placeholder="نام خود را وارد کنید"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleSpeechToField(setFieldValue, "fname")
                        }
                        className="absolute bg-navyBlue text-white w-9 h-9 left-1 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="ورود صوتی"
                      >
                        <MdOutlineKeyboardVoice />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleReadField(values.fname)}
                        className="absolute bg-navyBlue text-white w-9 h-9 left-11 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="خواندن صوتی"
                        disabled={isSpeaking || !values.lname}
                        style={{
                          opacity: !values.lname || isSpeaking ? 0.6 : 1,
                        }}
                      >
                        <HiOutlineSpeakerWave />
                      </button>
                    </div>
                    <ErrorMessage
                      name="fname"
                      component="h1"
                      className="text-red-600"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>نام خانوادگی</span>
                    <div className="relative">
                      <Field
                        name="lname"
                        className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                        placeholder="نام خانوادگی خود را وارد کنید"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleSpeechToField(setFieldValue, "lname")
                        }
                        className="absolute bg-navyBlue text-white w-9 h-9 left-1 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="ورود صوتی"
                      >
                        <MdOutlineKeyboardVoice />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleReadField(values.lname)}
                        className="absolute bg-navyBlue text-white w-9 h-9 left-11 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="خواندن صوتی"
                        disabled={isSpeaking || !values.lname}
                        style={{
                          opacity: !values.lname || isSpeaking ? 0.6 : 1,
                        }}
                      >
                        <HiOutlineSpeakerWave />
                      </button>
                    </div>
                    <ErrorMessage
                      name="lname"
                      component="h1"
                      className="text-red-600"
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
                      className="h-32 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                      placeholder="یک متن درباره خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="aboutMe"
                      component="h1"
                      className="text-red-600"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeechToField(setFieldValue, "aboutMe")
                      }
                      className="absolute bg-navyBlue text-white w-9 h-9 left-2 top-2 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="ورود صوتی"
                    >
                      <MdOutlineKeyboardVoice />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReadField(values.aboutMe)}
                      className="absolute bg-navyBlue text-white w-9 h-9 left-12 top-2 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="خواندن صوتی"
                      disabled={isSpeaking || !values.lname}
                      style={{
                        opacity: !values.lname || isSpeaking ? 0.6 : 1,
                      }}
                    >
                      <HiOutlineSpeakerWave />
                    </button>
                  </div>
                </div>

                {/* شماره همراه */}
                <div className="w-full flex md:flex-row flex-col md:space-x-8 space-y-5">
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>شماره همراه</span>
                    <Field
                      name="phone"
                      className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                      placeholder="شماره همراه خود را وارد کنید"
                      disabled
                    />
                    <ErrorMessage
                      name="phone"
                      component="h1"
                      className="text-red-600"
                    />
                  </div>
                  <div className="w-full font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                    <span>کد ملی</span>
                    <div className="relative">
                      <Field
                        name="code"
                        className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                        placeholder="کد ملی خود را وارد کنید"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          handleSpeechToField(setFieldValue, "code")
                        }
                        className="absolute bg-navyBlue text-white w-9 h-9 left-1 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="ورود صوتی"
                      >
                        <MdOutlineKeyboardVoice />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleReadField(values.code)}
                        className="absolute bg-navyBlue text-white w-9 h-9 left-11 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                        title="خواندن صوتی"
                        disabled={isSpeaking || !values.lname}
                        style={{
                          opacity: !values.lname || isSpeaking ? 0.6 : 1,
                        }}
                      >
                        <HiOutlineSpeakerWave />
                      </button>
                    </div>
                    <ErrorMessage
                      name="code"
                      component="h1"
                      className="text-red-600"
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
                        border: darkMode
                          ? "1px solid #101828"
                          : "1px solid #f4f4f4",
                        backgroundColor: darkMode ? "#101828" : "#f4f4f4",
                        transitionProperty: "all",
                        transitionDuration: "300ms",
                      }}
                      placeholder="تاریخ تولد خود را وارد کنید"
                    />
                    <ErrorMessage
                      name="birthday"
                      component="h1"
                      className="text-red-600"
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
                        className="text-red-600"
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
                        className="text-red-600"
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
                      className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeechToField(setFieldValue, "email")
                      }
                      className="absolute bg-navyBlue text-white w-9 h-9 left-1 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="ورود صوتی"
                    >
                      <MdOutlineKeyboardVoice />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReadField(values.email)}
                      className="absolute bg-navyBlue text-white w-9 h-9 left-11 top-0.5 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="خواندن صوتی"
                      disabled={isSpeaking || !values.lname}
                      style={{
                        opacity: !values.lname || isSpeaking ? 0.6 : 1,
                      }}
                    >
                      <HiOutlineSpeakerWave />
                    </button>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="h1"
                    className="text-red-600"
                  />
                </div>

                {/* آدرس سکونت */}
                <div className="font-semibold text-xs sm:text-sm lg:text-base flex flex-col space-y-3">
                  <span>آدرس سکونت</span>
                  <div className="relative">
                    <Field
                      name="address"
                      as="textarea"
                      className="h-32 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray dark:border-[#101828] bg-lightGray dark:bg-[#101828] focus:border-navyBlue transition-all duration-300"
                      placeholder="آدرس سکونت خود را وارد کنید"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleSpeechToField(setFieldValue, "address")
                      }
                      className="absolute bg-navyBlue text-white w-9 h-9 left-2 top-2 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="ورود صوتی"
                    >
                      <MdOutlineKeyboardVoice />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReadField(values.address)}
                      className="absolute  bg-navyBlue text-white w-9 h-9 left-12 top-2 border  cursor-pointer rounded-full flex items-center justify-center"
                      title="خواندن صوتی"
                      disabled={isSpeaking || !values.lname}
                      style={{
                        opacity: !values.lname || isSpeaking ? 0.6 : 1,
                      }}
                    >
                      <HiOutlineSpeakerWave />
                    </button>
                  </div>
                  <ErrorMessage
                    name="address"
                    component="h1"
                    className="text-red-600"
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
      {/* <div className="col-span-4 order-1 md:order-2 flex justify-center md:justify-end md:ml-16 mt-6">
        <UserForm mutateUpdate={mutateUpdate} data={data} />
      </div> */}
      <div className="col-span-4 order-1 md:order-2 flex flex-col justify-center md:justify-start  items-center line md:ml-16 mt-6">
        <div className="md:border-2 md:border-borderGray w-72 h-72 rounded-2xl flex items-center justify-center">
          <ProgressProfile
            profileCompletionPercentage={data?.profileCompletionPercentage}
          />
        </div>
        <div className="w-72 h-52 md:border-2 md:border-borderGray  rounded-2xl p-3 flex flex-col mt-10">
          <SecurityInfo />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
