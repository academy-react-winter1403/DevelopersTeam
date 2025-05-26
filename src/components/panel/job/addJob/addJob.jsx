import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./../../../../core/services/interceptor";
import toast from "react-hot-toast";
import Select from "react-select";
import { Field, Form, Formik } from "formik";
import { CiEdit } from "react-icons/ci";

const AddJob = ({ isEdit, el }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const queryClient = useQueryClient();

  const activeOptions = [
    { value: true, label: "در حال کار" },
    { value: false, label: "پایان کار" },
  ];

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await http.post(
        `${
          isEdit
            ? "/SharePanel/UpdateJobHistory"
            : "/SharePanel/CreateJobHistory"
        }`,
        {
          jobTitle: values.jobTitle,
          aboutJob: values.aboutJob,
          companyWebSite: values.companyWebSite,
          companyLinkdin: values.companyLinkdin,
          workStartDate: values.workStartDate,
          workEndDate: values.workEndDate,
          inWork: values.inWork,
          companyName: values.companyName,
          id: isEdit && el?.id,
          userId: isEdit && el?.userId,
        }
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["jobPanel"]);
      setIsModalOpen(false);
      toast.success("افزوده شد");
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  return (
    <>
      <Button
        type={isEdit ? "text" : "primary"}
        onClick={showModal}
        style={{ fontFamily: "yekan" }}
      >
        {isEdit ? <CiEdit className="w-5 h-5" /> : "افزودن شغل"}
      </Button>
      <Modal
        title={isEdit ? "ویرایش شغل" : "افزودن شغل"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Formik
          initialValues={{
            jobTitle: isEdit ? el?.jobTitle : "",
            aboutJob: isEdit ? el?.aboutJob : "",
            companyWebSite: isEdit ? el?.companyWebSite : "",
            companyLinkdin: isEdit ? el?.companyLinkdin : "",
            workStartDate: isEdit ? el?.workStartDate : "",
            workEndDate: isEdit ? el?.workEndDate : "",
            inWork: isEdit ? el?.inWork : "",
            companyName: isEdit ? el?.companyName : "",
          }}
          onSubmit={(values) => mutate(values)}
          enableReinitialize
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form className="space-y-3">
              <Field
                id="jobTitle"
                name="jobTitle"
                placeholder=" نام شغل"
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="companyName"
                name="companyName"
                placeholder=" نام شرکت "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="aboutJob"
                name="aboutJob"
                placeholder="درباره شغل "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="companyWebSite"
                name="companyWebSite"
                placeholder="سایت شرکت "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Select
                options={activeOptions}
                name="inWork"
                className="react-select"
                classNamePrefix="select"
                value={activeOptions.find((opt) => opt.value === values.inWork)}
                onChange={(option) => {
                  setFieldValue("inWork", option.value);
                }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    height: "36px",
                    width: "100%",
                    borderRadius: "12px",
                    padding: "0 8px",
                    borderColor: state.isFocused ? "#3772ff" : "#f4f4f4",
                    backgroundColor: "#f3f4f6",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: "#3772ff",
                    },
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: "12px",
                    color: "#9ca3af",
                  }),
                  input: (base) => ({
                    ...base,
                    color: "#4b5563",
                  }),
                }}
              />

              <Field
                id="companyLinkdin"
                name="companyLinkdin"
                placeholder="لینکدین شرکت "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                type="date"
                id="workStartDate"
                name="workStartDate"
                placeholder=" تاریخ شروع"
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl px-2 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                type="date"
                id="workEndDate"
                name="workEndDate"
                placeholder=" تاریخ پایان"
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl px-2 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <button
                type="submit"
                className="mt-5 bg-navyBlue w-20 h-10 rounded-full text-white hover:opacity-80 font-semibold"
              >
                ثبت
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
export default AddJob;
