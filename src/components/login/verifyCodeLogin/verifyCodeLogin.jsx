// import React, { useState } from "react";
// import { PiClockCountdown } from "react-icons/pi";
// import { Input } from "antd";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { Form, Formik } from "formik";
// import http from "./../../../core/services/interceptor";
// import { useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { getData, setData } from "../../../core/localStorage/localStorage";
// import OTPInput from "react-otp-input";

// const VerifyCodeLogin = ({ text, nextStep, prevStep }) => {
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();

//   const values = {
//     phoneOrGmail: "09339294953",
//     password: "1",
//     rememberMe: true,
//   };

//   const { mutateAsync } = useMutation({
//     mutationFn: async (VrifyCode) => {
//       const res = await http.post(
//         `/Sign/LoginTwoStep?VrifyCode=${VrifyCode}`,
//         values
//       );
//       console.log(VrifyCode);
//       return res;
//     },
//     onSuccess: () => {
//       toast.success("عملبات با موفقیت انجام شد");
//       navigate("/");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error(error.response.data.ErrorMessage);
//     },
//   });

//   const handleMutation = async (values) => {
//     const response = await mutateAsync(values);
//     if (response) {
//       const existingAccounts = getData("accounts") || [];
//       const accountExists = existingAccounts.some(
//         (account) => account.id === response.id
//       );
//       if (!accountExists) {
//         const newAccount = {
//           id: response.id,
//           token: response.token,
//           phoneOrGmail: values.phoneOrGmail,
//         };
//         const updatedAccounts = [...existingAccounts, newAccount];
//         setData("accounts", updatedAccounts);
//       }
//       setData("authToken", response.token);
//       setData("currentAccount", {
//         id: response.id,
//         token: response.token,
//         phoneOrGmail: values.phoneOrGmail,
//       });
//       // nextStep();
//     }
//   };

//   return (
//     <div className="w-xs xs:w-sm sm:w-md mt-10">
//       <div>
//         <Formik
//           initialValues={{ VrifyCode: "" }}
//           onSubmit={(values) => {
//             handleMutation(values.VrifyCode);
//           }}
//         >
//           {({ handleSubmit, values, setFieldValue }) => (
//             <Form onSubmit={handleSubmit}>
//               <span>کد تایید</span>
//               <div dir="ltr" className="w-full mt-3">
//                 <OTPInput
//                   name="VrifyCode"
//                   value={values.VrifyCode}
//                   onChange={(value) => {
//                     setOtp(value);
//                     setFieldValue("VrifyCode", value);
//                   }}
//                   numInputs={5}
//                   renderSeparator={<span></span>}
//                   renderInput={(props) => <input {...props} />}
//                   containerStyle={{
//                     height: "56px",
//                     display: "flex",
//                     gap: "15px",
//                   }}
//                   inputStyle={{
//                     width: "65px",
//                     height: "67px",
//                     backgroundColor: "#f4f4f4",
//                     borderRadius: "14px",
//                     minWidth: "40px",
//                     minHeight: "42px",
//                   }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={otp.length !== 5}
//                 className="bg-navyBlue w-full h-10 rounded-full text-white hover:opacity-80 disabled:opacity-50 mt-4"
//               >
//                 تایید
//               </button>
//             </Form>
//           )}
//         </Formik>
//         <div className="mt-4 flex justify-center xs:block space-x-18">
//           <div className="flex items-center space-x-4">
//             <div className="sm:flex justify-center items-center space-x-2 w-24 h-9 rounded-full bg-lightBlue hidden">
//               <PiClockCountdown className="w-5 h-5 text-navyBlue" />
//               <span className="text-navyBlue font-semibold">02:20</span>
//             </div>
//             <span className="text-navyBlue underline font-semibold text-sm whitespace-nowrap">
//               ارسال مجدد کد
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyCodeLogin;
import React, { useState } from "react";
import { PiClockCountdown } from "react-icons/pi";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import http from "./../../../core/services/interceptor";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getData, setData } from "../../../core/localStorage/localStorage";
import OTPInput from "react-otp-input";

const VerifyCodeLogin = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const loginData = useSelector((state) => state.login?.UserLoginInfo);
  console.log("loginData",loginData);

  const { mutateAsync } = useMutation({
    mutationFn: async (VrifyCode) => {
      const res = await http.post(
        `/Sign/LoginTwoStep?VrifyCode=${VrifyCode}`,
        loginData
      );
      // console.log(VrifyCode);
      return res;
    },
    onSuccess: (response) => {
      toast.success("عملیات با موفقیت انجام شد");
      handleSuccessResponse(response);
      navigate("/");
    },
    onError: (error) => {
      // console.error(error);
      toast.error(error.response?.data?.ErrorMessage);
    },
  });

  const handleSuccessResponse = (response) => {
    const existingAccounts = getData("accounts") || [];
    const accountExists = existingAccounts.some(
      (account) => account.id === response.id
    );

    if (!accountExists) {
      const newAccount = {
        id: response.id,
        token: response.token,
        phoneOrGmail: loginData.phoneOrGmail,
      };
      const updatedAccounts = [...existingAccounts, newAccount];
      setData("accounts", updatedAccounts);
    }

    setData("authToken", response.token);
    setData("currentAccount", {
      id: response.id,
      token: response.token,
      phoneOrGmail: loginData.phoneOrGmail,
    });
  };

  const handleMutation = async (values) => {
    await mutateAsync(values.VrifyCode);
  };

  return (
    <div className="w-xs xs:w-sm sm:w-md mt-10">
      <div>
        <Formik initialValues={{ VrifyCode: "" }} onSubmit={handleMutation}>
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <span>کد تایید</span>
              <div dir="ltr" className="w-full mt-3">
                <OTPInput
                  name="VrifyCode"
                  value={values.VrifyCode}
                  onChange={(value) => {
                    setOtp(value);
                    setFieldValue("VrifyCode", value);
                  }}
                  numInputs={5}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                  containerStyle={{
                    height: "56px",
                    display: "flex",
                    gap: "15px",
                  }}
                  inputStyle={{
                    width: "65px",
                    height: "67px",
                    backgroundColor: "#f4f4f4",
                    borderRadius: "14px",
                    minWidth: "40px",
                    minHeight: "42px",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={otp.length !== 5}
                className="bg-navyBlue w-full h-10 rounded-full text-white hover:opacity-80 disabled:opacity-50 mt-4"
              >
                تایید
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex justify-center xs:block space-x-18">
          <div className="flex items-center space-x-4">
            <div className="sm:flex justify-center items-center space-x-2 w-24 h-9 rounded-full bg-lightBlue hidden">
              <PiClockCountdown className="w-5 h-5 text-navyBlue" />
              <span className="text-navyBlue font-semibold">02:20</span>
            </div>
            <span className="text-navyBlue underline font-semibold text-sm whitespace-nowrap">
              ارسال مجدد کد
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeLogin;
