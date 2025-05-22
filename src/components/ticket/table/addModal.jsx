import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { TiArrowBack, TiArrowBackOutline } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { Button, Modal } from "antd";

const AddTicketModal = ({ id }) => {
  const navigate = useNavigate();
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

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `https://taha-sepehr.liara.run/api/ticket/answer/09339294953`,
        {
          text: values.text,
          file: null,
          ticketId: id,
          isSender: true,
        }
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("با موفقیت ارسال شد");
      setIsModalOpen(false)
    },
  });

  return (
    <>
      <Button type="text" onClick={showModal}>
        <IoAddCircleOutline className="w-7 h-7" />
      </Button>
      <Modal
        title="پاسخ های تیکت"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1000px"
        footer={false}
      >
        <div className="mt-8">
          <div className="w-full h-auto flex flex-col">
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="w-full h-10 font-bold text-xl">
                پاسخ خود را بنویسید
              </h2>
            </div>
            <div className=" w-full h-auto bg-white rounded-2xl p-5">
              <Formik
                onSubmit={(values) => mutate(values)}
                initialValues={{ text: "" }}
              >
                <Form className="">
                  {/* <div className=" flex flex-row space-x-5 mb-3">
                <Field
                  name="name"
                  className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                  placeholder="عنوان"
                />
                <Field
                  name="type"
                  className="h-9 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                  placeholder="موضوع"
                />
              </div> */}
                  <Field
                    as="textarea"
                    name="text"
                    className="h-40 w-full dark:placeholder:text-gray dark:text-gray outline-none rounded-xl p-5 pr-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
                    placeholder="متن"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-navyBlue w-32 h-10 rounded-full text-white hover:opacity-80 font-semibold mt-5"
                  >
                    ارسال
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddTicketModal;
