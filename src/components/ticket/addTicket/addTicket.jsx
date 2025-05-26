import { Field, Form, Formik } from "formik";
import React from "react";
import { TiArrowBack, TiArrowBackOutline } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const AddTicket = () => {
  const navigate = useNavigate();

  const loginData = useSelector((state) => state.login?.UserLoginInfo);
  //   console.log(loginData?.phoneOrGmail);

  const { mutate } = useMutation({
    mutationFn: async (values) => {
      const res = await axios.post(
        `https://taha-sepehr.liara.run/api/ticket/create/09339294953`,
        {
          name: values.name,
          type: values.type,
          message: values.message,
          orderId: null,
        }
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("با موفقیت ارسال شد");
      navigate("/panel/ticket");
    },
  });

  return (
    <div className="mt-8">
      <div className="w-full h-auto flex flex-col">
        <div className="flex flex-row justify-between items-center mb-5">
          <h2 className="w-full h-10 font-bold text-xl">ارسال تیکت جدید</h2>
          <NavLink
            to="/panel/ticket"
            className="bg-white w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <TiArrowBackOutline className="w-8 h-8 hover:text-navyBlue" />
          </NavLink>
        </div>
        <div className=" w-full h-auto bg-white rounded-2xl p-5">
          <Formik
            onSubmit={(values) => mutate(values)}
            initialValues={{ name: "", type: "", message: "" }}
          >
            <Form className="">
              <div className=" flex flex-row space-x-5 mb-3">
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
              </div>
              <Field
                as="textarea"
                name="message"
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
  );
};

export default AddTicket;
