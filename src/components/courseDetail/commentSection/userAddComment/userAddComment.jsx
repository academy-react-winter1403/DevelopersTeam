import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import http from "./../../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getData } from "../../../../core/localStorage/localStorage";
import toast from "react-hot-toast";
import { useDarkMode } from "../../../../context/theme/themeContext";

const UserAddComment = ({ id }) => {
  const queryClient = useQueryClient();

  const addComment = async (values) => {
    const formData = new FormData();
    formData.append("CourseId", id);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);
    const res = await http.post(`/Course/AddCommentCourse`, formData);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="w-full h-auto border-2 border-borderGray dark:border-gray-700 rounded-3xl mt-10 p-6 dark:bg-gray-800">
      <h2 className="w-full h-10 bg-[#3772FF] dark:bg-blue-600 text-white rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <TfiWrite />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-5">
        <Formik onSubmit={mutate} initialValues={{ Title: "", Describe: "" }}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Field
                  as={Input}
                  name="Title"
                  placeholder="عنوان"
                  variant={darkMode ? "" : "filled"}
                  size="large"
                  style={darkMode && { color: "#fff" }}
                  className="dark:bg-gray-700 dark:text-white dark:border-gray-600 placeholder:text-white"
                />
              </div>
              <div>
                <Field
                  as={TextArea}
                  name="Describe"
                  rows={7}
                  placeholder="نظر خود را وارد کنید"
                  maxLength={100}
                  variant={darkMode ? "" : "filled"}
                  style={darkMode && { color: "#fff" }}
                  className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
              <button
                type="submit"
                className="bg-[#3772FF] dark:bg-blue-600 w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
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

export default UserAddComment;
