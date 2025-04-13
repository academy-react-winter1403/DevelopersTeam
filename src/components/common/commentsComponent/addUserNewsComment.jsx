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

const AddUserNewsComment = ({ id }) => {
  const queryClient = useQueryClient();

  const addComment = async (values) => {
    // const formData = new FormData();
    // formData.append("CourseId", id);
    // formData.append("Title", values.Title);
    // formData.append("Describe", values.Describe);
    const res = await http.post(`/News/CreateNewsComment`);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
      toast.success("نظرتان با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("ابتدا وارد حساب کاربری خود شوید");
    },
  });

  return (
    <div className="w-full h-auto border-2 border-borderGray rounded-3xl mt-10 p-6">
      <h2 className="w-full h-10 bg-[#3772FF] text-white rounded-3xl px-2 py-1 text-[12px] lg:text-xl text-center cursor-pointer flex justify-center items-center gap-2">
        <TfiWrite />
        نظر خود را ثبت کنید
      </h2>
      <div className="mt-5 ">
        <Formik onSubmit={mutate} initialValues={{ Title: "", Describe: "" }}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Field
                  as={Input}
                  name="Title"
                  placeholder="عنوان"
                  variant="filled"
                  size="large"
                />
              </div>
              <div>
                <Field
                  as={TextArea}
                  name="Describe"
                  rows={7}
                  placeholder="نظر خود را وارد کنید"
                  maxLength={100}
                  variant="filled"
                />
              </div>
              <button
                type="submit"
                className="bg-[#3772FF] w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
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
