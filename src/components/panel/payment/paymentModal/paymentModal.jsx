import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import http from "./../../../../core/services/interceptor";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import FacturePayment from "../facturePayment/facturePayment";

const PaymentModal = ({
  firstModal,
  id,
  secondModal,
  setSecondModal,
  handleFirstOk,
  handleSecondOk,
  setFirstModal,
  factureData,
}) => {
  const { mutate: handlePay } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("CourseId", id);
      formData.append("Paid", values.Paid);
      formData.append("PeymentDate", values.PeymentDate);
      formData.append("PaymentInvoiceNumber", values.PaymentInvoiceNumber);

      const res = await http.post(`/CoursePayment/StudentAddPeyment`, formData);
      return res;
    },
    onSuccess: () => {
      toast.success("پرداخت با موفقیت انجام شد");
      setFirstModal(false);
      setSecondModal(true);
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const getUserPayList = async () => {
    if (!id) return;
    const res = await http.get(
      `/CoursePayment/StudentUserPayList?CourseId=${id}`
    );
    return res;
  };
  const { data } = useQuery({
    queryKey: ["userPayList"],
    queryFn: getUserPayList,
    enabled: !!id,
  });

  const { mutate: handleAddPaymentImage } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("PaymentId", data?.paymentId);
      formData.append("Image", values.Image);

      const res = await http.post(`/CoursePayment/AddPeymentImage`, formData);
      return res;
    },
    onSuccess: () => {
      toast.success("تصویر پرداخت با موفقیت اضافه شد");
      setFirstModal(false);
      setSecondModal(false);
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  return (
    <>
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
            Paid: "",
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
      <Modal open={false}>
        <FacturePayment factureData={factureData} data={data} />
      </Modal>
      <Modal
        title="ارسال فیش واریزی"
        open={secondModal}
        onOk={handleSecondOk}
        onCancel={() => setSecondModal(false)}
        footer={false}
      >
        <Formik onSubmit={handleAddPaymentImage} initialValues={{ Image: "" }}>
          {({ setFieldValue }) => (
            <Form>
              <Field
                id="file-inp"
                type="file"
                name="Image"
                className="hidden"
                onChange={(event) => {
                  setFieldValue("Image", event.currentTarget.files[0]);
                }}
              />
              <label htmlFor="file-inp" className="flex flex-row">
                <div className="w-20 h-20 border-4 rounded-2xl border-borderGray flex justify-center items-center cursor-pointer hover:border-blue-200 transition-colors">
                  <BiImageAdd className="text-navyBlue w-10 h-10" />
                </div>
              </label>
              <button
                type="submit"
                className="bg-navyBlue w-20 h-10 rounded-full text-lg text-white hover:opacity-80 cursor-pointer"
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

export default PaymentModal;
