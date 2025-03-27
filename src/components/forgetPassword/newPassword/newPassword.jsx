import React, { useEffect } from "react";
import AuthPassInput from "../../common/auth-pass-input";
import AuthButton from "../../common/auth-button";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useMutationCustom } from "../../../core/services/api/authApi/register.api";
import http from "../../../core/services/interceptor";
import { useQuery } from "@tanstack/react-query";
import { useQueryGet } from "../../../hooks/useQueryGet/useQueryGet";
import { message } from "antd";

const NewPassword = ({ text, nextStep }) => {
  const { id } = useParams();

  const getConfigValue = async () => {
    const res = await http.get(`/Sign/Reset/${id}`);
    return res;
  };

  const { data: resData } = useQuery({
    queryKey: ["getConfigValue"],
    queryFn: () => getConfigValue(),
  });
  useEffect(() => {
    console.log(resData);
  }, [resData]);

  const { mutate } = useMutationCustom(
    "/Sign/Reset",
    "ResetPasswordMutation",
    "رمزعبور با موفقیت تغییر یافت"
  );

  // "/Sign/Reset",
  // "ResetPassword",
  // "رمزعبور با موفقیت تغییر یافت"

  // const handleSubmit = async (values) => {
  //   await mutateAsync({
  //     userId,
  //     newPassword: values.newPassword,
  //     resetValue: values.resetValue,
  //   });
  // };

  function submit(data) {
    if (data.newPassword == data.pastPassword) {
      mutate({ resetValue: id, newPassword: data.newPassword, id: resData.id });
    }
  }

  return (
    <div className="w-xs xs:w-md mt-12 space-y-4 absolute top-48 right-[720px]">
      <Formik
        onSubmit={(e) => submit(e)}
        initialValues={{ newPassword: "", pastPassword: "" }}
      >
        <Form className="space-y-5">
          <AuthPassInput
            inputLabel={"رمزعبور جدید"}
            placeholder={"رمزعبور جدید خود را وارد کنید"}
            name="newPassword"
          />
          <AuthPassInput
            inputLabel={"تکرار رمزعبور"}
            placeholder={"رمزعبور جدید خود را دوباره وارد کنید"}
            name="pastPassword"
          />
          <AuthButton text={"تایید رمزعبور"} />
        </Form>
      </Formik>
    </div>
  );
};

export default NewPassword;
