import { useMutation, useQueryClient } from "@tanstack/react-query";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import http from "./../../../../../core/services/interceptor";
import toast from "react-hot-toast";

const SendTextBox = ({ isOpen, courseId ,commentId}) => {
  const queryClient = useQueryClient();

  const addCommentReply = async (values) => {
    const formData = new FormData();
    formData.append("CommentId", commentId);
    formData.append("CourseId", courseId);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);
    const res = await http.post(`/Course/AddReplyCourseComment`, formData);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addCommentReply,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  return (
    <div>
      {!isOpen && (
        <div className="mt-3 sm:mt-4 h-auto rounded-3xl text-sm sm:text-md border border-[#3772FF] p-3 sm:p-6 flex gap-2">
          <div className="flex-1">
            <Formik
              onSubmit={mutate}
              initialValues={{
                Title: "",
                Describe: "",
      
              }}
            >
              {({ handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="space-y-2 flex space-x-5"
                >
                  <div className="flex space-x-5">
                    <button
                      type="submit"
                      className="border cursor-pointer border-navyBlue bg-navyBlue w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center"
                    >
                      <RiTelegram2Line className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </button>
                    <div className="border border-[#F1F1F1] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center">
                      <CiFaceSmile className="w-3 h-3 sm:w-4 sm:h-4 text-navyBlue" />
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-3">
                    <Field
                      as="input"
                      name="Title"
                      placeholder="عنوان"
                      variant="borderless"
                      size="large"
                      className="placeholder:text-gray border-b border-borderGray pb-2 outline-none"
                    />
                    <Field
                      as="textarea"
                      name="Describe"
                      rows={1}
                      placeholder="نظر خود را وارد کنید"
                      maxLength={100}
                      variant="borderless"
                      className="placeholder:text-gray outline-none"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendTextBox;
