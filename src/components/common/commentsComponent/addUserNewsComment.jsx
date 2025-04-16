import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import http from "./../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDarkMode } from "../../../context/theme/themeContext";

const AddUserNewsComment = ({ id }) => {
  const queryClient = useQueryClient();

  const addComment = async (values) => {
    const res = await http.post(`/News/CreateNewsComment`, values);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["newsComment"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="w-full h-auto border-2 dark:border-gray-700  border-borderGray rounded-2xl sm:rounded-3xl mt-6 sm:mt-10 p-4 sm:p-6">
      <h2 className="w-full h-8 sm:h-10 bg-[#3772FF] text-white rounded-2xl px-2 py-1 text-xs sm:text-sm lg:text-xl text-center cursor-pointer flex justify-center items-center gap-1 sm:gap-2">
        <TfiWrite className="text-sm sm:text-base" />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-3 sm:mt-5">
        <Formik
          onSubmit={mutate}
          initialValues={{
            title: "",
            describe: "",
            userId: 40330,
            newsId: id,
            userIpAddress: "1.1.1.1",
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
              <div>
                <Field
                  as={Input}
                  name="title"
                  placeholder="عنوان"
                  size="middle"
                  variant={darkMode ? "" : "filled"}
                  style={darkMode && { color: "#fff" }}
                  className="text-sm sm:text-base dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder:text-white"
                />
              </div>
              <div>
                <Field
                  as={TextArea}
                  name="describe"
                  rows={4}
                  placeholder="نظر خود را وارد کنید"
                  maxLength={100}
                  variant={darkMode ? "" : "filled"}
                  style={darkMode && { color: "#fff" }}
                  className="text-sm sm:text-base dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-[#3772FF] w-24 sm:w-32 h-8 sm:h-10 rounded-full text-white hover:opacity-80 font-medium sm:font-semibold text-sm sm:text-base"
              >
                ثبت
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUserNewsComment;
