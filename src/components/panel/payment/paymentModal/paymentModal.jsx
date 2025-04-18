import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import http from "./../../../../core/services/interceptor";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";

const PaymentModal = ({
  firstModal,
  handleOk,
  handleCancel,
  data,
  secondModal,setSecondModal
}) => {
  console.log("ff", data);

  const handlePay = async (values) => {
    const formData = new FormData();
    formData.append("CourseId", data?.listOfMyCourses.courseId);
    formData.append("Paid", values.Paid);
    formData.append("PeymentDate", values.PeymentDate);
    formData.append("PaymentInvoiceNumber", values.PaymentInvoiceNumber);

    const res = await http.post(`/CoursePayment/StudentAddPeyment`, formData);
    return res;
  };

  return (
    <>
      <Modal
        title="پرداخت"
        open={firstModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        visible={firstModal}
      >
        <Formik
          onSubmit={handlePay}
          initialValues={{
            PaymentInvoiceNumber: "",
            PeymentDate: "",
            Paid: "",
          }}
        >
          <Form className="flex flex-col">
            <Field
              name="Paid"
              className="w-full h-9 outline-none mb-2 mt-3 rounded-xl p-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
              placeholder="مبلغ را وارد کنید"
            />
            <Field
              name="PaymentInvoiceNumber"
              className="w-full h-9 outline-none mb-2 mt-3 rounded-xl p-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
              placeholder="کدپیگیری را وارد کنید"
            />
            <Field
              type="date"
              name="PeymentDate"
              className="w-full h-10 outline-none mb-2 mt-3 rounded-xl flex justify-center items-center px-3 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
              placeholder="کدپیگیری را وارد کنید"
            />
            <button
              onClick={() => setSecondModal(true)}
              type="submit"
              className="bg-navyBlue w-20 h-10 rounded-full text-lg text-white hover:opacity-80 cursor-pointer"
            >
              ثبت
            </button>
          </Form>
        </Formik>
      </Modal>
      <Modal
        title="پرداخت"
        open={secondModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        visible={secondModal}
      >
        <Formik onSubmit={handlePay} initialValues={{}}>
          <Form className="flex flex-col">
            <Field
              name="Paid"
              className="w-full h-9 outline-none mb-2 mt-3 rounded-xl p-5 placeholder:text-xs border border-lightGray  bg-lightGray  focus:border-navyBlue transition-all duration-300"
              placeholder="مبلغ را وارد کنید"
            />
            <button
              type="submit"
              className="bg-navyBlue w-20 h-10 rounded-full text-lg text-white hover:opacity-80 cursor-pointer"
            >
              ثبت
            </button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default PaymentModal;
