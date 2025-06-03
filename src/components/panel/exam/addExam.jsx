import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Select from "react-select";
import { Field, Form, Formik } from "formik";
import { CiEdit } from "react-icons/ci";
import axios from "axios";

const AddExam = ({ el }) => {
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

//   const activeOptions = [
//     { value: true, label: "در حال کار" },
//     { value: false, label: "پایان کار" },
//   ];

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
         `${ 
             "https://taha-sepehr.liara.run/Exam/exam"
        }`,
        {
          title: values.title,
          time: values.time,
          Image: values.Image,
          Desc: values.Desc,
          Insert: values.Insert,
          Level: values.Level,
          av: values.av,
        
        }
      );
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["ExamPanel"]);
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
        type={"primary"}
        onClick={showModal}
        style={{ fontFamily: "yekan" }}
        className="btn-sm-hidden"
      >
        { "افزودن آزمون"}
      </Button>
      <Modal
        title={"افزودن آزمون"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Formik
          initialValues={{
            title: el?.title ,
            time:el?.time,
            // Image:el?.Image,
            Desc:el?.Desc,
            Insert:el?.Insert,
            Level:el?.Level ,
            av: el?.av,
          }}
          onSubmit={(values) => mutate(values)}
          enableReinitialize
        >
          {({ errors, touched, setFieldValue, values }) => (
            <Form className="space-y-3">
              <Field
                id="title"
                name="title"
                placeholder=" نام آزمون"
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="time"
                name="time"
                placeholder=" ساعت شروع "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="Desc"
                name="Desc"
                placeholder=" توضیحات "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                id="av"
                name="av"
                placeholder=" میانگین "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />
{/* 
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
              /> */}

              <Field
                id="Level"
                name="Level"
                placeholder="سطح  "
                className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              />

              <Field
                type="date"
                id="Insert"
                name="Insert"
                placeholder=" تاریخ شروع"
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
export default AddExam;

