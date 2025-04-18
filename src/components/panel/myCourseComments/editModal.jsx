import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import http from "./../../../core/services/interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const EditModal = ({ isModalOpen, handleOk, handleCancel, data }) => {
  const queryClient = useQueryClient();

  const editComment = async (values) => {
    const formData = new FormData();
    formData.append("CommentId", data?.commentId);
    formData.append("CourseId", data?.courseId);
    formData.append("Title", values.Title);
    formData.append("Describe", values.Describe);

    const res = await http.put(`/Course/UpdateCourseComment`, formData);
    return res;
  };

  const { mutate } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["myCourseComment"]);
      toast.success("ویرایش با موفقیت انجام شد");
    },
    onError: (error) => {
      toast.error(error.response.data.ErrorMessage);
    },
  });

  console.log(data?.title);

  return (
    <div>
      <Modal
        title="ویرایش کامنت های دوره"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Formik
          onSubmit={mutate}
          initialValues={{ Title: data?.title, Describe: data?.describe }}
          enableReinitialize
        >
          <Form className="space-y-3">
            <Field
              name="Title"
              className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              placeholder="عنوان"
            />
            <Field
              name="Describe"
              className="h-9 w-full  dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              placeholder="متن نظر"
            />
            <button
              type="submit"
              className="bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold"
            >
              اعمال تغییرات
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default EditModal;
