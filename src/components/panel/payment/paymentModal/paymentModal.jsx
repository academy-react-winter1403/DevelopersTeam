import React, { useState, useRef } from "react";
import { Modal, Input } from "antd";
import { Field, Form, Formik } from "formik";
import http from "./../../../../core/services/interceptor";
import { BiImageAdd } from "react-icons/bi";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import FacturePayment from "../facturePayment/facturePayment";

const PaymentModal = ({
  firstModal,
  id,
  secondModal,
  thirdModal,
  setSecondModal,
  setThirdModal,
  handleFirstOk,
  handleSecondOk,
  handleThirdOk,
  setFirstModal,
  factureData,
  cost,
}) => {
  const [paymentId, setPaymentId] = useState();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const { mutateAsync: handlePay } = useMutation({
    mutationFn: async (values) => {
      const formData = new FormData();
      formData.append("CourseId", id);
      formData.append("Paid", values.Paid);
      formData.append("PeymentDate", values.PeymentDate);
      formData.append("PaymentInvoiceNumber", values.PaymentInvoiceNumber);
      const res = await http.post(`/CoursePayment/StudentAddPeyment`, formData);
      return res;
    },
    onSuccess: (res) => {
      toast.success("پرداخت با موفقیت انجام شد");
      setFirstModal(false);
      setSecondModal(true);
      setPaymentId(res.id);
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const { mutate: handleAddPaymentImage } = useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();
      formData.append("PaymentId", paymentId);
      formData.append("Image", file);
      const res = await http.post(`/CoursePayment/AddPeymentImage`, formData);
      return res;
    },
    onSuccess: () => {
      toast.success("تصویر پرداخت با موفقیت اضافه شد");
      setFirstModal(false);
      setSecondModal(false);
      setThirdModal(false);
    },
    onError: (error) => {
      toast.error(error?.response.data.ErrorMessage);
    },
  });

  const getUserPayList = async () => {
    const res = await http.get(
      `/CoursePayment/StudentUserPayList?CourseId=${paymentId}`
    );
    return res;
  };
  const { data } = useQuery({
    queryKey: ["userPayList"],
    queryFn: getUserPayList,
    enabled: !!paymentId,
  });

  const getPaymentDetail = async () => {
    const res = http.get(`/CoursePayment/${paymentId}`);
    return res;
  };
  const { data: paymentDetail } = useQuery({
    queryKey: ["paymentDetail", paymentId],
    queryFn: getPaymentDetail,
    enabled: !!paymentId,
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleAddPaymentImage(file);
    }
  };

  const handleZoneClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleAddPaymentImage(e.target.files[0]);
    }
  };

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
            Paid: cost,
          }}
        >
          {({ handleSubmit }) => (
            <Form className="flex flex-col">
              <Field
                name="Paid"
                value={cost}
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

      <Modal
        open={secondModal}
        onOk={handleSecondOk}
        onCancel={() => setSecondModal(false)}
        footer={false}
      >
        <FacturePayment
          setThirdModal={setThirdModal}
          setSecondModal={setSecondModal}
          paymentDetail={paymentDetail}
          factureData={factureData}
          data={data}
        />
      </Modal>

      <Modal
        title="ارسال فیش واریزی"
        open={thirdModal}
        onOk={handleThirdOk}
        onCancel={() => setThirdModal(false)}
        footer={false}
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleZoneClick}
          style={{
            border: "2px dashed #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: dragActive ? "#fafafa" : "transparent",
          }}
        >
          <BiImageAdd className="text-navyBlue w-10 h-10 inline-block" />
          <p>فایل خود را به اینجا بکشید یا برای انتخاب کلیک کنید</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileSelected}
        />
      </Modal>
    </>
  );
};

export default PaymentModal;
