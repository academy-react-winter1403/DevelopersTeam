import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const StepPay = ({
  firstModal,
  handleFirstOk,
  setFirstModal,
  cost,
  handlePay,
}) => {
  return (
    <Modal
      title="پرداخت"
      open={firstModal}
      onOk={handleFirstOk}
      onCancel={() => setFirstModal(false)}
      footer={false}
    >
      <Formik
        onSubmit={handlePay}
        initialValues={{
          PaymentInvoiceNumber: "",
          PeymentDate: "",
          Paid: cost,
        }}
      >
        {({ handleSubmit }) => (
          <Form className="flex flex-col">
            <Field
              name="Paid"
              className="w-full h-9 outline-none mb-2 mt-3 rounded-xl p-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              placeholder="مبلغ را وارد کنید"
            />
            <Field
              name="PaymentInvoiceNumber"
              className="w-full h-9 outline-none mb-2 mt-3 rounded-xl p-5 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
              placeholder="کدپیگیری را وارد کنید"
            />
            <Field
              type="date"
              name="PeymentDate"
              className="w-full h-10 outline-none mb-2 mt-3 rounded-xl flex justify-center items-center px-3 placeholder:text-xs border border-lightGray bg-lightGray focus:border-navyBlue transition-all duration-300"
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-navyBlue w-20 h-10 rounded-full text-lg text-white hover:opacity-80 cursor-pointer"
            >
              ثبت
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default StepPay;
