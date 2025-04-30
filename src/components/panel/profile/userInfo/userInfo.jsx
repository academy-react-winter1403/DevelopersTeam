import React from "react";
import ProgressProfile from "../progressProfile/progressProfile";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "./../../../../core/services/interceptor";
import UserForm from "./userForm";
import SecurityInfo from "./securityInfo";
import { Divider } from "antd";

const UserInfo = ({ data }) => {
  const queryClient = useQueryClient();

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

  // const { mutate: mutateUpdate } = useMutation({
  //   mutationFn: updateProfile,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["profile"]);
  //     toast.success("اطلاعات با موفقیت تغییر یافت");
  //   },
  //   onError: () => {
  //     toast.error("خطا در بروزرسانی اطلاعات");
  //   },
  // });

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

  return (
    <div className="md:grid md:grid-cols-10 flex flex-col dark:text-white">
      <div className="col-span-6 mt-6 order-2 md:order-1">
        <UserForm mutateUpdate={mutateUpdate} data={data} />
      </div>
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
